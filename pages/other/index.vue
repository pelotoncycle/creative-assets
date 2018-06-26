<template>
	<assets :imageTypes="imageTypes" />
</template>

<script>
import assets from '@/components/assets'

export default {
	async asyncData({ app }) {

		const imageTypes = [
			{
				name: "Just Ride",
				nameInCMS: 'This asset is not editable in CMS',
				description: '',				
				width: '380',
				height: '640',
				format: 'JPG or PNG',
				maxFileSize: '500 kb',
				usage: [
					{
						location: 'Bike - More',
						image: '/bike-tread/more_bike.png',
						platforms: ['bike-tread']
					}                                                                            
        ],
				assets: [{
          name: 'Just Ride background',
					image: 'https://raw.githubusercontent.com/pelotoncycle/android/79da932f4dd481d7d52da3116861ada864a13975/ui/src/main/res/drawable-hdpi/freestyle_ride_bg.png?token=AETev9-v2LOaCZF02Rt5n-U5Zqzvi1EYks5bOsKowA%3D%3D',
					platforms: ['bike-tread']
        }]
      },
			{
				name: "Just Run",
				nameInCMS: 'This asset is not editable in CMS',
				description: '',								
				width: '342',
				height: '576',
				format: 'JPG or PNG',								
				maxFileSize: '500 kb',
				usage: [
					{
						location: 'Tread - More',
						image: '/bike-tread/more_tread.png',
						platforms: ['bike-tread']
					}                                                                            
        ],
				assets: [{
          name: 'Just Run background',
					image: 'https://raw.githubusercontent.com/pelotoncycle/android/b64bfb43a44d9a58be8b33c3e31fc5effca2fd57/ui/src/main/res/drawable-hdpi/freestyle_bg.png?token=AETev3KA08QJU_NiEkA263L-Chpzz3OPks5bOsKIwA%3D%3D',
					platforms: ['bike-tread']
        }]
      },
			{
				name: "Scenic Ride / Run",
				nameInCMS: 'This asset is not editable in CMS',
				description: '',								
				width: '320',
				height: '520',
				format: 'JPG or PNG',				
				maxFileSize: '500 kb',
				usage: [
					{
						location: 'Bike - More',
						image: '/bike-tread/more_bike.png',
						platforms: ['bike-tread']
          },
					{
						location: 'Tread - More',
						image: '/bike-tread/more_tread.png',
						platforms: ['bike-tread']
					}                                                               
        ],
				assets: [{
          name: 'Scenic Ride / Run background',
					image: 'https://raw.githubusercontent.com/pelotoncycle/android/7f6c8dcbf998b2275709e1fc80df9a057b70c9c3/ui/src/main/res/drawable-hdpi/scenic_bg.png?token=AETev3hjwg9QRACoQZTJQ1IWVJYLBusyks5bOsJswA%3D%3D',
					platforms: ['bike-tread']
        }]
      },
			// {
			// 	name: "iOS Splash",
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
	components: {
		assets
	}
}
</script>