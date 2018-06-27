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
            <option value="email">Email</option>
          </select>
        </div>
      </div>
    </section>
		<section class="section"
      v-for="assetType in assetTypes"
      :key="assetType.propertyName"
      v-show="getPlatforms(assetType.usage)"
      :id="assetType.linkId">
			<div class="container">
				<div class="section-heading">
          <h2 class="is-size-3">{{ assetType.name }}</h2>
          <p class="subtitle is-size-6">{{ assetType.description }}</p>
				</div>
        <div class="specs">
          <h3 class="subtitle is-size-4">Specs</h3>
          <p>Name in CMS: {{ assetType.nameInCMS }}</p>
          <p>Dimensions: {{ `${assetType.width} x ${assetType.height}` }}</p>
          <p>Format: {{ assetType.format }}</p>
          <p>Max File Size: {{ assetType.maxFileSize }}</p>
          <p v-if="assetType.guestInstructorNotes">Guest Instructor Notes: {{ assetType.guestInstructorNotes }}</p>
        </div>
        <div class="usage">
          <h3 class="subtitle is-size-4">Usage</h3>
          <div class="columns is-multiline">
            <div class="column is-4" v-for="asset in assetType.usage" :key="asset.location" v-if="includesPlatform(asset.platforms)">
              <img v-img="{ group: `${assetType.name}-usage` }" :src="getImage(asset.image)"
                :alt="asset.location"
                class="image-asset">
              <p class="is-size-7">{{ asset.location }}</p>
            </div>
          </div>
        </div>
        <div class="assets">
          <h3 class="subtitle is-size-4">Assets</h3>
          <div class="columns is-multiline">
            <div class="column is-3" v-for="asset in assetType.assets" :key="asset.name" v-if="includesPlatform(asset.platforms)">
              <div v-if="assetType.type == 'image'">
                <img 
                  v-if="asset.image != null"
                  v-img="{ group: `${assetType.name}-assets` }"
                  :src="asset.image"
                  :alt="asset.name"
                  class="image-asset">
                <img v-else :src="`http://via.placeholder.com/${ assetType.width }x${ assetType.height }?text=No+Image+Found`" class="image-asset">
              </div>
              <div v-else>
                <video class="image-asset" :width="assetType.width" :height="assetType.height" controls>
                  <source :src="getVideo(asset.video)" type="video/mp4">
                </video>
              </div>
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
    'assetTypes'
  ],
	methods: {
    getImage(url) {
      return require(`~/assets/images${url}`)
		},
    getVideo(url) {
      return require(`~/assets/video${url}`)
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