<template>
	<div>
    <section class="section">
      <div class="container">
        <div class="select is-rounded is-pulled-right">
          <select v-model="platforms">
            <option value="all">All Platforms</option>
            <option value="bike-tread">Bike / Tread</option>
            <option value="ios">iOS</option>
            <option value="web">Web</option>
          </select>
        </div>
      </div>
    </section>
		<section class="section" v-for="imageType in imageTypes" :key="imageType.propertyName" v-show="getPlatforms(imageType.usage)">
			<div class="container">
				<div class="section-heading">
          <h2 class="is-size-3">{{ imageType.name }}</h2>
          <p>Dimensions {{ `${imageType.width} x ${imageType.height}` }}</p>
          <p>Max File Size: {{ imageType.maxFileSize }}</p>
        </div>
        <div class="usage">
          <h3 class="is-size-4">Usage</h3>
          <div class="columns is-multiline">
            <div class="column is-4" v-for="asset in imageType.usage" :key="asset.location" v-if="includesPlatform(asset.platforms)">
              <img v-img="{ group: `${imageType.name}-usage` }" :src="getImage(asset.image)"
                :alt="asset.location"
                class="image-asset">
              <p class="is-size-7">{{ asset.location }}</p>
            </div>
          </div>
        </div>
        <div class="assets">
          <h3 class="is-size-4">Assets</h3>
          <div class="columns is-multiline">
            <div class="column is-one-fifth" v-for="asset in imageType.assets" :key="asset.name" v-if="includesPlatform(asset.platforms)">
              <img 
                v-if="asset.image != null"
                v-img="{ group: `${imageType.name}-assets` }"
                :src="asset.image"
                :alt="imageType.name"
                class="image-asset">
              <img v-else :src="`http://via.placeholder.com/${ imageType.width }x${ imageType.height }?text=No+Image+Found`" class="image-asset">
              <p class="is-size-7">{{ asset.name }}</p>
            </div>
          </div>
        </div>
			</div>
		</section>		
	</div>
</template>

<script>
export default {
  data() {
    return {
      platforms: 'all'
    }
  },
  props: [
    'imageTypes'
  ],
	methods: {
    getImage(url) {
      return require(`~/assets/images${url}`)
		},
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