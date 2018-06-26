<template>
	<assets :imageTypes="imageTypes" />
</template>

<script>
import assets from '@/components/assets'

export default {
	async asyncData({ app }) {

		let jumbotron_url_ios = []
		let web_instructor_list_display_image_url = []
		let ios_instructor_list_display_image_url = []
		let image_url = []

		const response = await app.$axios.$get('instructor')
		const instructors = response.data

		instructors.forEach((instructor) => {
			const instructor_name = instructor.name
			jumbotron_url_ios.push({ name: instructor_name, image: instructor.jumbotron_url_ios, platforms: ['bike-tread', 'ios'] })
			web_instructor_list_display_image_url.push({ name: instructor_name, image: instructor.web_instructor_list_display_image_url, platforms: ['bike-tread', 'web'] })
			ios_instructor_list_display_image_url.push({ name: instructor_name, image: instructor.ios_instructor_list_display_image_url, platforms: ['ios'] })
			image_url.push({ name: instructor_name, image: instructor.image_url, platforms: ['bike-tread', 'ios', 'web'] })
		})

		const imageTypes = [
			{
				name: "Profile Image",
				propertyName: 'image_url',
				width: '400',
				height: '400',				
				maxFileSize: '',
				usage: [
					{
						location: 'Bike and Tread - Class in Progress Modal',
						image: '/bike-tread/class_in_progress.png',
						platforms: ['bike-tread']
					},
					{
						location: 'Bike and Tread - Featured',
						image: '/bike-tread/featured.png',
						platforms: ['bike-tread']
          },
					{
						location: 'Bike and Tread - Profile Workout History',
						image: '/bike-tread/profile_workout_history.png',
						platforms: ['bike-tread']
          },          
					{
						location: 'Bike and Tread - On-demand Instructor Filter',
						image: '/bike-tread/on_demand_instructor_filter.png',
						platforms: ['bike-tread']
          },
					{
						location: 'Bike and Tread - Live Schedule',
						image: '/bike-tread/live_schedule.png',
						platforms: ['bike-tread']
          },          
					{
						location: 'Bike and Tread - Peloton Instructors',
						image: '/bike-tread/peloton_instructors_2.png',
						platforms: ['bike-tread']
          },
					{
						location: 'iOS - All Workouts',
						image: '/ios/all_workouts.png',
						platforms: ['ios']
          },          
					{
						location: 'iOS - Class Filter',
						image: '/ios/class_filter.png',
						platforms: ['ios']
          },
					{
						location: 'iOS - Outdoor Workout',
						image: '/ios/outdoor_workout.png',
						platforms: ['ios']
          },
					{
						location: 'iOS - About Instructor',
						image: '/ios/about_instructor.png',
						platforms: ['ios']
          },
					{
						location: 'Web - Workouts',
						image: '/web/workouts.png',
						platforms: ['web']
          },
					{
						location: 'Web - Workout Detail',
						image: '/web/workout_detail.png',
						platforms: ['web']
					},                    
					{
						location: 'Web - Live Schedule',
						image: '/web/live_schedule.png',
						platforms: ['web']
					},                                                                             
        ],
				assets: image_url
			},      
			{
				name: "Workout Base",
				propertyName: 'jumbotron_url_dark',
				width: '',
				height: '',
				maxFileSize: '',
				usage: [
					{
						location: 'Bike and Tread - Facebook share',
						image: '/bike-tread/facebook_share.png',
						platforms: ['bike-tread']
					},
					{
						location: 'Web - Facebook share',
						image: '/web/facebook_share.png',
						platforms: ['web']
					}				
				],
				assets: []
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
						image: '/bike-tread/about_instructor.png',
						platforms: ['bike-tread']
          },
					{
						location: 'iOS - Featured',
						image: '/ios/featured_1.png',
						platforms: ['ios']
          },
					{
						location: 'iOS - Live Class Detail',
						image: '/ios/live_class_detail.png',
						platforms: ['ios']
					}                            
        ],
				assets: jumbotron_url_ios
			},
			{
				name: "Instructor List Display (Bike / Tread & Web)",
				propertyName: 'web_instructor_list_display_image_url',
				width: '1040',
				height: '508',				
				maxFileSize: '',
				usage: [
          {
						location: 'Bike and Tread - Peloton Instructors',
						image: '/bike-tread/peloton_instructors_1.png',
						platforms: ['bike-tread']
          },
          {
						location: 'Web - Peloton Instructors',
						image: '/web/peloton_instructors.png',
						platforms: ['web']
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
						image: '/ios/peloton_instructors.png',
						platforms: ['ios']
          }                    
        ],
				assets: ios_instructor_list_display_image_url
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
