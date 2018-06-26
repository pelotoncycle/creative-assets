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
            <div class="column is-one-fifth" v-for="asset in imageType.assets" :key="asset.name">
              <img v-if="asset.image != null"
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
	async asyncData({ app }) {

		let jumbotron_url_dark = []
		let jumbotron_url = []
		let life_style_image_url = []
		let instructor_hero_image_url = []
		let jumbotron_url_ios = []
		let web_instructor_list_display_image_url = []
		let about_image_url = []
		let ios_instructor_list_display_image_url = []
		let image_url = []

		const response = await app.$axios.$get('instructor')
		const instructors = response.data

		instructors.forEach((instructor) => {
			const instructor_name = instructor.name
			jumbotron_url_dark.push({ name: instructor_name, image: instructor.jumbotron_url_dark, })
			jumbotron_url.push({ name: instructor_name, image: instructor.jumbotron_url, })
			life_style_image_url.push({ name: instructor_name, image: instructor.life_style_image_url, })
			instructor_hero_image_url.push({ name: instructor_name, image: instructor.instructor_hero_image_url, })
			jumbotron_url_ios.push({ name: instructor_name, image: instructor.jumbotron_url_ios, })
			web_instructor_list_display_image_url.push({ name: instructor_name, image: instructor.web_instructor_list_display_image_url, })
			about_image_url.push({ name: instructor_name, image: instructor.about_image_url, })
			ios_instructor_list_display_image_url.push({ name: instructor_name, image: instructor.ios_instructor_list_display_image_url, })
			image_url.push({ name: instructor_name, image: instructor.image_url })
		})

		const imageTypes = [
			{
				name: "Profile Image",
				propertyName: 'image_url',
				width: '394',
				height: '394',				
				maxFileSize: '',
				usage: [
					{
						location: 'Bike and Tread - Class in Progress Modal',
						image: '/bike-tread/class_in_progress.png'
					},
					{
						location: 'Bike and Tread - Featured',
						image: '/bike-tread/featured.png'
          },
					{
						location: 'Bike and Tread - Profile Workout History',
						image: '/bike-tread/profile_workout_history.png'
          },          
					{
						location: 'Bike and Tread - On-demand Instructor Filter',
						image: '/bike-tread/on_demand_instructor_filter.png'
          },
					{
						location: 'Bike and Tread - Live Schedule',
						image: '/bike-tread/live_schedule.png'
          },          
					{
						location: 'Bike and Tread - Peloton Instructors',
						image: '/bike-tread/peloton_instructors_2.png'
          },
					{
						location: 'iOS - All Workouts',
						image: '/ios/all_workouts.png'
          },          
					{
						location: 'iOS - Class Filter',
						image: '/ios/class_filter.png'
          },
					{
						location: 'iOS - Outdoor Workout',
						image: '/ios/outdoor_workout.png'
          },
					{
						location: 'iOS - About Instructor',
						image: '/ios/about_instructor.png'
          },
					{
						location: 'Web - Workouts',
						image: '/web/workouts.png'
          },
					{
						location: 'Web - Workout Detail',
						image: '/web/workout_detail.png'
					},                    
					{
						location: 'Web - Live Schedule',
						image: '/web/live_schedule.png'
					},                                                                             
        ],
				assets: image_url
			},      
			{
				name: "Workout Base",
				propertyName: 'jumbotron_url_dark',
				width: '2048',
				height: '1536',
				maxFileSize: '',
				usage: [
					{
						location: 'Bike and Tread - Facebook share',
						image: '/bike-tread/facebook_share.png'
					},
					{
						location: 'Web - Facebook share',
						image: '/web/facebook_share.png'
					}				
				],
				assets: jumbotron_url_dark
			},
			{
				name: "Cover",
				propertyName: 'jumbotron_url_ios',
				width: '1536',
				height: '900',				
				maxFileSize: '',
				usage: [
					{
						location: 'Bike and Tread - About Instructor',
						image: '/bike-tread/about_instructor.png'
          },
					{
						location: 'iOS - Featured',
						image: '/ios/featured_1.png'
          },
					{
						location: 'iOS - Live Class Detail',
						image: '/ios/live_class_detail.png'
					}                            
        ],
				assets: jumbotron_url_ios
			},
			{
				name: "Instructor List Display (Web)",
				propertyName: 'web_instructor_list_display_image_url',
				width: '806',
				height: '394',				
				maxFileSize: '',
				usage: [
          {
						location: 'Bike and Tread - Peloton Instructors',
						image: '/bike-tread/peloton_instructors_1.png'
          },
          {
						location: 'Web - Peloton Instructors',
						image: '/web/peloton_instructors.png'
					}                
        ],
				assets: web_instructor_list_display_image_url
      },
			{
				name: "Instructor List Display (iOS)",
				propertyName: 'ios_instructor_list_display_image_url',
				width: '1524',
				height: '508',				
				maxFileSize: '',
				usage: [
          {
						location: 'iOS - Peloton Instructors',
						image: '/ios/peloton_instructors.png'
          }                    
        ],
				assets: ios_instructor_list_display_image_url
			},      
			// {
			// 	name: "About",
			// 	propertyName: 'about_image_url',
			// 	width: '600',
			// 	height: '786',				
			// 	maxFileSize: '',
			// 	usage: [],
			// 	assets: about_image_url
      // },
			// {
			// 	name: "Jumbotron",
			// 	propertyName: 'jumbotron_url',
			// 	width: '3555',
			// 	height: '2000',				
			// 	maxFileSize: '',
			// 	usage: [],
			// 	assets: jumbotron_url
			// },
			// {
			// 	name: "Life Style",
			// 	propertyName: 'life_style_image_url',
			// 	width: '3500',
			// 	height: '2050',					
			// 	maxFileSize: '',
			// 	usage: [],
			// 	assets: life_style_image_url
			// },
			// {
			// 	name: "Instructor Hero",
			// 	propertyName: 'instructor_hero_image_url',
			// 	width: '1020',
			// 	height: '1240',				
			// 	maxFileSize: '',
			// 	usage: [],
			// 	assets: instructor_hero_image_url
			// },      																															
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
