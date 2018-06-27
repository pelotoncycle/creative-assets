<template>
	<assets :imageTypes="imageTypes" />
</template>

<script>
import assets from '@/components/assets'

export default {
	async asyncData({ app }) {

    let outdoor = [
      {
        name: "30 min Beginner HIIT Run",
        image: "https://s3.amazonaws.com/peloton-ride-images/9962947a7ad778192a385a0f231862367ad7c7cb/img_1528943682452.jpg",
        platforms: ['bike-tread']
      },
      {
        name: "45 min Beg. Marathon Race Prep",
        image: "https://s3.amazonaws.com/peloton-ride-images/1efe114f6f378b52e2a539798388661f573ec6fc/img_1528903541525.jpg",
        platforms: ['bike-tread']
      },
      {
        name: "45 min Marathon Race Prep",
        image: "https://s3.amazonaws.com/peloton-ride-images/aa8e7bc2509d876868dce1b0e159bb395a28d4b6/img_1528943415710.jpg",
        platforms: ['bike-tread']
      },
      {
        name: "20 min HIIT Run",
        image: "https://s3.amazonaws.com/peloton-ride-images/576542a267230d1e8183bd206efcf12a8a9adc6c/img_1528918354031.jpg",
        platforms: ['bike-tread']
      },
      {
        name: "30 min 5K Race Prep",
        image: "https://s3.amazonaws.com/peloton-ride-images/48b6dfc90f45540894fb8a087c82818324be41af/img_1528943465224.jpg",
        platforms: ['bike-tread']
      },
      {
        name: "20 min Beginner Intervals Run",
        image: "https://s3.amazonaws.com/peloton-ride-images/faa56257e3551e4f57e91dd9a80e40cc7f74e835/img_1528917960388.jpg",
        platforms: ['bike-tread']
      },
      {
        name: "45 min Hip Hop Fun Run",
        image: "https://s3.amazonaws.com/peloton-ride-images/3389365853c9ceb3b707934c1e2ac5d6f4533859/img_1528943925767.jpg",
        platforms: ['bike-tread']
      },
      {
        name: "60 min Rock Fun Run",
        image: "https://s3.amazonaws.com/peloton-ride-images/fe2486f018196566410f3fb3afd3f515807026d8/img_1528943278048.jpg",
        platforms: ['bike-tread']
      },
      {
        name: "45 min 80s Fun Run",
        image: "https://s3.amazonaws.com/peloton-ride-images/492447a3368902e3e21a47cb3ef9fd45e6438dd5/img_1528918280063.jpg",
        platforms: ['bike-tread']
      },
      {
        name: "30 min Walk + Run",
        image: "https://s3.amazonaws.com/peloton-ride-images/74b1cb7d124bad8535a87a1943ca731b18f177dd/img_1528943808038.jpg",
        platforms: ['bike-tread']
      },
      {
        name: "20 min Intervals Run",
        image: "https://s3.amazonaws.com/peloton-ride-images/a9f9f309359bcc4e922f0022423a790bf13df06c/img_1528917991181.jpg",
        platforms: ['bike-tread']
      },
      {
        name: "30 min Beginner 5K Race Prep",
        image: "https://s3.amazonaws.com/peloton-ride-images/c0a46dd9ed79bdb3b55e9bb4934ad00d181f58ea/img_1528943883817.jpg",
        platforms: ['bike-tread']
      },
      {
        name: "30 min Pop Fun Run",
        image: "https://s3.amazonaws.com/peloton-ride-images/1630b2a7ace4e40e111a22e79fdc2892d7157996/img_1528903323557.jpg",
        platforms: ['bike-tread']
      },
      {
        name: "20 min Pop Fun Walk",
        image: "https://s3.amazonaws.com/peloton-ride-images/54dde46be5ee4ae38fe778f1ce16ee9f48172e3c/img_1528918314036.jpg",
        platforms: ['bike-tread']
      },
      {
        name: "30 min Power Walking",
        image: "https://s3.amazonaws.com/peloton-ride-images/5e4a25db34a083330679a61388f0b6442f90aa23/img_1528943365959.jpg",
        platforms: ['bike-tread']
      }
    ]

    let categories = [
      {
        image: "https://browse-categories-images-prod.s3.amazonaws.com/8a96055d5928467dab3cae3403f94190",
        name: "Cycling",
        platforms: ['ios']
      },
      {
        image: "https://browse-categories-images-prod.s3.amazonaws.com/2eaf057fdc74455fa491283439bffdf8",
        name: "Running",
        platforms: ['ios']
      },
      {
        image: "https://browse-categories-images-prod.s3.amazonaws.com/e5ab31b7f29c496dbedc4c96256f7654",
        name: "Bootcamp",
        platforms: ['ios']
      },
      {
        image: "https://browse-categories-images-prod.s3.amazonaws.com/89f79d6f58424035854e9dc0a8c79008",
        name: "Outdoor",
        platforms: ['ios']
      },
      {
        image: "https://browse-categories-images-prod.s3.amazonaws.com/498dbaa0cafd4fed94c4e193574a6539",
        name: "Stretching",
        platforms: ['ios']
      },
      {
        image: "https://browse-categories-images-prod.s3.amazonaws.com/63e7b61454cf476ea9ee1421595ff402",
        name: "Strength",
        platforms: ['ios']
      },
      {
        image: "https://browse-categories-images-prod.s3.amazonaws.com/836c45c76d45406698e37d1022e13ac5",
        name: "Yoga",
        platforms: ['ios']
      },
      {
        image: "https://browse-categories-images-prod.s3.amazonaws.com/207965f33f114c669ad9161bd7c891eb",
        name: "Cardio",
        platforms: ['ios']
      }
    ]

    const imageTypes = [
			{
				name: "Outdoor Run Thumbnail",
				nameInCMS: 'This asset is not editable in CMS',
				description: 'Outdoor lifestyle image.',              
				width: '1920',
				height: '1080',
				format: 'JPG or PNG',        			
				maxFileSize: '500 kb',
				usage: [
					{
						location: 'iOS - Classes Outdoor',
            image: '/ios/classes_outdoor.png',
            platforms: ['ios']
          },
					{
						location: 'iOS - Featured Outdoor Running',
            image: '/ios/featured_2.png',
            platforms: ['ios']
          },
					{
						location: 'iOS - Outdoor Class Detail',
            image: '/ios/outdoor_class_detail.png',
            platforms: ['ios']
          },
					{
						location: 'iOS - Outdoor Workout',
            image: '/ios/outdoor_workout.png',
            platforms: ['ios']
					}                                                                                      
        ],
				assets: outdoor
      },
			{
				name: "Browse Category",
				nameInCMS: 'This asset is not editable in CMS',
				description: 'Black room studio color image. Left side should leave room browse category.',                
				width: '975',
				height: '540',
				format: 'JPG or PNG',
				maxFileSize: '500 kb',
				usage: [
					{
						location: 'iOS - Classes',
            image: '/ios/classes.png',
            platforms: ['ios']
					}                                                                            
        ],
				assets: categories
      },
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
      }																						
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