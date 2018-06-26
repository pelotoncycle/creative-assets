<template>
	<assets :imageTypes="imageTypes" />
</template>

<script>
import assets from '@/components/assets'

export default {
	async asyncData({ app }) {

		const imageTypes = [
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