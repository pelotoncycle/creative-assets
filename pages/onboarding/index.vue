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
		<section class="section" v-for="imageType in imageTypes" :key="imageType.propertyName" v-show="getPlatforms(imageType.usage)">
			<div class="container">
				<div class="section-heading">
          <h2 class="is-size-3">{{ imageType.name }}</h2>
          <p class="subtitle is-size-6">{{ imageType.description }}</p>
				</div>
        <div class="specs">
          <h3 class="subtitle is-size-4">Specs</h3>
          <p>Name in CMS: {{ imageType.nameInCMS }}</p>
          <p>Dimensions: {{ `${imageType.width} x ${imageType.height}` }}</p>
          <p>Format: {{ imageType.format }}</p>
          <p>Max File Size: {{ imageType.maxFileSize }}</p>
        </div>
        <div class="usage">
          <h3 class="subtitle is-size-4">Usage</h3>
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
          <h3 class="subtitle is-size-4">Assets</h3>
          <div class="columns is-multiline">
            <div class="column is-half" v-for="asset in imageType.assets" :key="asset.name" v-if="includesPlatform(asset.platforms)">
              <video class="image-asset" :width="imageType.width" :height="imageType.height" controls>
								<source :src="getVideo(asset.video)" type="video/mp4">
							</video>
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
	async asyncData({ app }) {

		const imageTypes = [
			{
				name: "iOS Splash",
				nameInCMS: 'This asset is not editable in CMS',
				description: '',						
				width: '1024',
				height: '768',
				format: 'mp4',						
				maxFileSize: '',
				usage: [
					{
						location: 'iOS - Splash Screen',
						image: 'ios/splash.png',
						platforms: ['ios']
					}                                                                        
        ],
				assets: [
					{
						name: 'iOS Splash Video',
						video: 'ios_splash.mp4',
						platforms: ['ios']
					}
				]
      },
			// {
			// 	name: "Commercial Splash",
			// 	nameInCMS: 'This asset is not editable in CMS',
			//	description: '',						
			// 	width: '',
			// 	height: '',
			// 	format: '',						
			// 	maxFileSize: '',
			// 	usage: [
			// 		{
			// 			location: '',
			// 			image: '',
					// platforms: []
			// 		}                                                                            
      //   ],
			// 	assets: []
      // },
			// {
			// 	name: "Peloton 101",
			// 	nameInCMS: 'This asset is not editable in CMS',
			//	description: '',						
			// 	width: '',
			// 	height: '',
			// 	format: '',						
			// 	maxFileSize: '',
			// 	usage: [
			// 		{
			// 			location: '',
			// 			image: '',
					// platforms: []
			// 		}                                                                            
      //   ],
			// 	assets: []
      // }						                																						
		]

		return {
			imageTypes,
		}
	},
  data() {
    return {
      platforms: 'all'
    }
  },
	methods: {
    getImage(url) {
      return require(`~/assets/images/${url}`)
		},		
    getVideo(url) {
      return require(`~/assets/video/${url}`)
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