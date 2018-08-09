<template>
  <div v-editable="blok">
		<section class="section asset-section"
      v-show="getPlatforms(blok.usage)"
      :id="blok.linkId">    
      <div class="section-heading">
        <h2 class="is-size-3">{{ blok.name }}</h2>
        <p class="subtitle is-size-6">{{ blok.description }}</p>
      </div>
      <div class="specs">
        <h3 class="subtitle is-size-4">Specs</h3>
        <p>Name in CMS: {{ blok.nameInCMS }}</p>
        <p v-if="blok.designDescription">Description: {{ blok.designDescription }}</p>
        <p>Dimensions: {{ `${blok.width} x ${blok.height}` }}</p>
        <p>Format: {{ blok.format }}</p>
        <p v-if="blok.maxFileSize">Max File Size: {{ blok.maxFileSize }} kb</p>
        <p v-if="blok.guestInstructorNotes">Guest Instructor Notes: {{ blok.guestInstructorNotes }}</p>
      </div>
      <div class="usage">
        <h3 class="subtitle is-size-4">Usage</h3>
        <div class="columns is-multiline">
          <component class="column is-4" :key="blok._uid" v-for="blok in blok.usage" :blok="blok" :is="blok.component" v-if="includesPlatform(blok.platforms)"></component>
        </div>
      </div>
      <div class="assets">
        <h3 class="subtitle is-size-4">Assets</h3>
        <div class="columns is-multiline">
          <div class="column is-3" v-for="asset in assets" :key="asset.name" v-if="includesPlatform(asset.platforms)">
            <div v-if="blok.type == 'image'">
              <img
                v-if="asset.image != null && (asset.source == 'api' || asset.source == 's3')"
                v-img="{ group: `${blok.name}-assets` }"
                :src="asset.image"
                :alt="asset.name"
                class="image-asset">
              <img
                v-else-if="asset.image != null"
                v-img="{ group: `${blok.name}-assets` }"
                :src="getImage(asset.image)"
                :alt="asset.name"
                class="image-asset">                
              <img v-else :src="`http://via.placeholder.com/${ blok.width }x${ blok.height }?text=No+Image+Found`" class="image-asset">
            </div>
            <div v-else>
              <video class="image-asset" :width="blok.width" :height="blok.height" controls>
                <source :src="getVideo(asset.video)" type="video/mp4">
              </video>
            </div>
            <p class="is-size-7">{{ asset.name }}</p>
          </div>
        </div>
      </div>      
		</section>
  </div>
</template>

<script>
export default {
  props: ['blok', 'platforms', 'assets'],
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