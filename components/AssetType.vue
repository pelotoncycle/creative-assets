<template>
  <div class="asset-type">
    <div class="section-heading">
      <h3 class="is-size-4">{{ assetType['Name'] }}</h3>
      <p class="subtitle is-size-6">{{ assetType['Description'] }}</p>
    </div>
    <div class="specs">
      <p>Name in CMS: {{ assetType['Name in CMS'] }}</p>
      <p>Design Description{{ assetType['Design Description'] }}</p>
      <p>Dimensions: {{ assetType['Dimensions'] }}</p>
      <p>Format: {{ assetType['Format'] }}</p>
      <p>Max File Size: {{ assetType['Max File Size'] }}</p>
      <p
        v-if="assetType['Guest Instructor Notes']"
      >Guest Instructor Notes: {{ assetType['Guest Instructor Notes'] }}</p>
    </div>
    <div class="usage">
      <h4 class="subtitle is-size-5">Usage</h4>
      <div class="columns is-multiline">
        <AppAsset
          class="column is-4"
          v-for="asset in usageAssetsInAssetType"
          :key="asset['ID']"
          :assetGroup="asset['Group']"
          :assetName="asset['Name']"
          :assetFormat="asset['Format']"
          :assetUrl="asset['Upload'][0].url"
          :assetType="assetType"
        />
      </div>
    </div>
    <div class="assets">
      <h4 class="subtitle is-size-5">Assets</h4>
      <div class="columns is-multiline">
        <template>
          <AppAsset
            class="column is-3"
            v-for="asset in creativeAssetsInAssetType"
            :key="asset['ID']"
            :assetGroup="asset['Group']"
            :assetName="asset['Name']"
            :assetFormat="asset['Format']"
            :assetUrl="asset['URL'] || asset['Upload'][0].url"
            :assetType="assetType"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import AppAsset from "@/components/AppAsset";
import { mapGetters } from "vuex";

export default {
  props: {
    assetType: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters(["usageAssets", "creativeAssets"]),
    usageAssetsInAssetType() {
      return this.usageAssets.filter(asset => {
        if (asset["Upload"]) {
          return asset["Asset Type"][0] === this.assetType["ID"];
        }
      });
    },
    creativeAssetsInAssetType() {
      return this.creativeAssets.filter(asset => {
        if (asset["URL"] || asset["Upload"]) {
          return asset["Asset Type"][0] === this.assetType["ID"];
        }
      });
    }
  },
  components: {
    AppAsset
  }
};
</script>