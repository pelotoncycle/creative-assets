<template>
	<div>
		<section class="section" v-for="imageType in imageTypes" :key="imageType.propertyName">
			<div class="container">
				<div class="select is-rounded is-pulled-right">
					<select v-model="platforms">
						<option value="all">All Platforms</option>
						<option value="bike/tread">Bike / Tread</option>
						<option value="iOS">iOS</option>
						<option value="web">Web</option>
					</select>
				</div>
				<div class="section-heading">
					<h2 class="is-size-3">{{ imageType.name }}</h2>
					<p>Dimensions {{ `${imageType.width} x ${imageType.height}` }}</p>
					<p>Max File Size: {{ imageType.maxFileSize }}</p>
				</div>
				<div class="usage">
					<h3 class="is-size-4">Usage</h3>
					<div class="columns is-multiline">
						<div class="column is-4" v-for="asset in imageType.usage" :key="asset.location">
							<img :src="getImage(asset.image)"
								:alt="asset.location"
								class="image-asset">
							<p class="is-size-7">{{ asset.location }}</p>
						</div>
					</div>
				</div>
				<div class="assets">
					<h3 class="is-size-4">Assets</h3>
					<div class="columns is-multiline">
						<div class="column is-one-fifth" v-for="asset in imageType.assets" :key="asset.title">
							<img :src="asset.image"
								:alt="imageType.name"
								class="image-asset">
							<p class="is-size-7">{{ asset.title }}</p>
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
				name: "Just Ride",
				width: '380',
				height: '640',				
				maxFileSize: '',
				usage: [
					{
						location: 'Bike - More',
						image: '/bike-tread/more_bike.png'
					}                                                                            
        ],
				assets: [{
          title: 'Just Ride background',
          image: 'https://raw.githubusercontent.com/pelotoncycle/android/79da932f4dd481d7d52da3116861ada864a13975/ui/src/main/res/drawable-hdpi/freestyle_ride_bg.png?token=AETev9-v2LOaCZF02Rt5n-U5Zqzvi1EYks5bOsKowA%3D%3D'
        }]
      },
			{
				name: "Just Run",
				width: '342',
				height: '576',				
				maxFileSize: '',
				usage: [
					{
						location: 'Tread - More',
						image: '/bike-tread/more_tread.png'
					}                                                                            
        ],
				assets: [{
          title: 'Just Run background',
          image: 'https://raw.githubusercontent.com/pelotoncycle/android/b64bfb43a44d9a58be8b33c3e31fc5effca2fd57/ui/src/main/res/drawable-hdpi/freestyle_bg.png?token=AETev3KA08QJU_NiEkA263L-Chpzz3OPks5bOsKIwA%3D%3D'
        }]
      },
			{
				name: "Scenic Ride / Run",
				width: '320',
				height: '520',
				maxFileSize: '',
				usage: [
					{
						location: 'Bike - More',
						image: '/bike-tread/more_bike.png'
          },
					{
						location: 'Tread - More',
						image: '/bike-tread/more_tread.png'
					}                                                               
        ],
				assets: [{
          title: 'Scenic Ride / Run background',
          image: 'https://raw.githubusercontent.com/pelotoncycle/android/7f6c8dcbf998b2275709e1fc80df9a057b70c9c3/ui/src/main/res/drawable-hdpi/scenic_bg.png?token=AETev3hjwg9QRACoQZTJQ1IWVJYLBusyks5bOsJswA%3D%3D'
        }]
      },
			// {
			// 	name: "iOS Splash Screen",
			// 	width: '',
			// 	height: '',				
			// 	maxFileSize: '',
			// 	usage: [
			// 		{
			// 			location: '',
			// 			image: ''
			// 		}                                                                            
      //   ],
			// 	assets: []
      // }                  																						
		]

		return {
			imageTypes,
			platforms: 'all'
		}
  },
	methods: {
    getImage(url) {
      return require(`~/assets/images${url}`)
    }
	}
}
</script>