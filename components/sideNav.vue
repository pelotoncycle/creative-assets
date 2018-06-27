<template>
  <aside class="menu">
    <scrollactive class="menu-list">  
      <a :href="`#${ assetType.linkId }`"
        class="menu-item scrollactive-item"
        v-for="assetType in assetTypes"
        :key="assetType.name"
        v-show="getPlatforms(assetType.usage)">
        {{ assetType.name }}
      </a>
    </scrollactive>
  </aside>
</template>

<script>
export default {
  props: [
    'assetTypes',
    'platforms'
  ],
  methods: {
		getPlatforms(usage) {
			let arrays = usage.map(asset => {
					return asset.platforms
			})

			let platforms = [].concat.apply([], arrays)

			return this.includesPlatform(platforms)
		},
		includesPlatform(platforms) {
			if (this.platforms == 'all') {
				return true
			} else if (platforms.includes(this.platforms)) {
				return true
			}
    } 
  } 
}
</script>

<style lang="scss" scoped>
  .menu-item {
    font-size: .9rem;
  }
</style>


