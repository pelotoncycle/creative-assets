import Vuex from "vuex"

var Airtable = require("airtable")

Airtable.configure({
  endpointUrl: process.env.airtableEndpointUrl,
  apiKey: process.env.airtableApiKey
})

const airtable = Airtable.base(process.env.airtableBase)

const createStore = () => {
  return new Vuex.Store({
    state: {
      categories: [],
      assetTypes: [],
      assets: [],
      platforms: [],
      selectedPlatforms: ["All"]
    },
    getters: {
      selectedCategories: (state, getters) =>
        state.categories.filter(category => {
          if (state.selectedPlatforms.includes("All")) {
            return true
          } else {
            const assetTypeRefs = category["Asset Types"]
            if (assetTypeRefs) {
              for (const assetTypeRef of assetTypeRefs) {
                const assetType = getters.selectedAssetTypes.find(assetType => {
                  return assetType["ID"] === assetTypeRef
                })
                if (assetType) {
                  return true
                }
              }
            } else {
              return false
            }
          }
        }),
      selectedAssetTypes: (state, getters) =>
        state.assetTypes.filter(assetType => {
          if (state.selectedPlatforms.includes("All")) {
            return true
          } else {
            return assetType["Platforms"].includes(getters.selectedPlatformRef)
          }
        }),
      apiAssetTypes: (state, getters) =>
        state.assetTypes.filter(assetType => {
          if (assetType["Available On API"]) {
            if (state.selectedPlatforms.includes("All")) {
              return true
            } else {
              return assetType["Platforms"].includes(
                getters.selectedPlatformRef
              )
            }
          }
        }),
      usageAssets: (state, getters) =>
        state.assets.filter(asset => {
          if (asset["Group"] === "Usage") {
            if (state.selectedPlatforms.includes("All")) {
              return true
            } else {
              return asset["Platforms"].includes(getters.selectedPlatformRef)
            }
          }
        }),
      creativeAssets: (state, getters) =>
        state.assets.filter(asset => {
          if (asset["Group"] === "Assets") {
            if (state.selectedPlatforms.includes("All")) {
              return true
            } else {
              return asset["Platforms"].includes(getters.selectedPlatformRef)
            }
          }
        }),
      platforms: state => state.platforms,
      selectedPlatforms: state => state.selectedPlatforms,
      selectedPlatformRef: state => {
        if (state.selectedPlatforms.includes("All")) {
          return
        } else {
          const selectedPlatform = state.platforms.find(platform => {
            return platform["Name"] === state.selectedPlatforms[0]
          })
          return selectedPlatform["ID"]
        }
      }
    },
    mutations: {
      setCategories(state, categories) {
        state.categories = categories
      },
      setAssetTypes(state, assetTypes) {
        state.assetTypes = assetTypes
      },
      setAssets(state, assets) {
        state.assets = assets
      },
      appendAssets(state, assets) {
        state.assets = state.assets.concat(assets)
      },
      setPlatforms(state, platforms) {
        state.platforms = platforms
      },
      selectPlatform(state, platform) {
        state.selectedPlatforms = [platform]
      }
    },
    actions: {
      async fetchCategories({ commit }) {
        const categories = []
        await airtable("Categories")
          .select({
            view: "Grid view"
          })
          .eachPage((records, fetchNextPage) => {
            records.forEach(record => {
              categories.push(Object.assign({ ID: record.id }, record.fields))
            })
            fetchNextPage()
          })
          .catch(error => {
            console.error(error)
          })

        commit("setCategories", categories)
      },
      async fetchAssetTypes({ commit }) {
        const assetTypes = []
        await airtable("Asset Types")
          .select({
            view: "Grid view"
          })
          .eachPage((records, fetchNextPage) => {
            records.forEach(record => {
              assetTypes.push(Object.assign({ ID: record.id }, record.fields))
            })
            fetchNextPage()
          })
          .catch(error => {
            console.error(error)
          })

        commit("setAssetTypes", assetTypes)
      },
      async fetchAssets({ commit }) {
        const assets = []
        await airtable("Assets")
          .select({
            view: "Grid view"
          })
          .eachPage((records, fetchNextPage) => {
            records.forEach(record => {
              assets.push(Object.assign({ ID: record.id }, record.fields))
            })
            fetchNextPage()
          })
          .catch(error => {
            console.error(error)
          })

        commit("setAssets", assets)
      },
      async fetchPlatforms({ commit }) {
        const platforms = []
        await airtable("Platforms")
          .select({
            view: "Grid view"
          })
          .eachPage((records, fetchNextPage) => {
            records.forEach(record => {
              platforms.push(Object.assign({ ID: record.id }, record.fields))
            })
            fetchNextPage()
          })
          .catch(error => {
            console.error(error)
          })

        commit("setPlatforms", platforms)
      },
      async fetchApiAssets({ getters, commit }) {
        const apiAssetTypes = getters["apiAssetTypes"]

        apiAssetTypes.forEach(async assetType => {
          const endpoint = assetType["Endpoint"]
          const containingField = assetType["Containing Field"]
          let response
          if (assetType["Params"]) {
            const pelotonParam = JSON.parse(assetType["Params"])
            response = await this.$axios.$get(endpoint, {
              params: pelotonParam
            })
          } else {
            response = await this.$axios.$get(endpoint)
          }
          const assets = response[containingField].map(asset => {
            return {
              ID: asset[assetType["ID Field"]],
              "Asset Type": [assetType["ID"]],
              Format: "Image",
              Group: "Assets",
              Name: asset[assetType["Name Field"]],
              Platforms: assetType["Platforms"],
              Source: "API",
              URL: asset[assetType["URL Field"]]
            }
          })
          commit("appendAssets", assets)
        })
      }
    }
  })
}

export default createStore
