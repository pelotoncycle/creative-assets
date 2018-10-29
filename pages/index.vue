<template>
  <div>
		<TheNavbar :platforms="platforms" @updatePlatforms="filterPlatforms"/>
    <div class="main-wrapper">
      <div class="container">
        <div class="columns">
          <div class="column is-4-tablet is-3-desktop is-one-fifth is-hidden-mobile sidebar">
            <AppSideNav :assetTypes="assetTypes" :platforms="platforms"/>
          </div>
          <div class="column is-8-tablet is-9-desktop is-four-fifths assets">
            <AppAssets :assetTypes="assetTypes" :platforms="platforms"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar'
import AppSideNav from '@/components/AppSideNav'
import AppAssets from '@/components/AppAssets'
import { commercial_splash } from '@/constants/commercial_splash'
import { email_share_image } from '@/constants/email_share_image'
import { fb_share_bootcamp } from '@/constants/fb_share_bootcamp'
import { fb_share_cycling } from '@/constants/fb_share_cycling'
import { fb_share_floor } from '@/constants/fb_share_floor'
import { fb_share_running } from '@/constants/fb_share_running'
import { outdoor } from '@/constants/outdoor'

export default {
	async asyncData({ app }) {

		let jumbotron_url_ios = []
		let web_instructor_list_display_image_url = []
		let ios_instructor_list_display_image_url = []
		let image_url = []
    let about_image_url = []
    let life_style_image_url = []
    let instructor_hero_image_url = []

		const instructorResponse = await app.$axios.$get('instructor')
		const instructors = instructorResponse.data

		instructors.forEach((instructor) => {
			const instructor_name = instructor.name
			jumbotron_url_ios.push({ name: instructor_name, image: instructor.jumbotron_url_ios, platforms: ['bike-tread', 'ios'], source: 'api' })
			web_instructor_list_display_image_url.push({ name: instructor_name, image: instructor.web_instructor_list_display_image_url, platforms: ['bike-tread', 'web'], source: 'api' })
			ios_instructor_list_display_image_url.push({ name: instructor_name, image: instructor.ios_instructor_list_display_image_url, platforms: ['ios'], source: 'api' })
			image_url.push({ name: instructor_name, image: instructor.image_url, platforms: ['bike-tread', 'ios', 'web'], source: 'api' })
			about_image_url.push({ name: instructor_name, image: instructor.about_image_url, platforms: ['web'], source: 'api' })
			life_style_image_url.push({ name: instructor_name, image: instructor.life_style_image_url, platforms: ['web'], source: 'api' })
			instructor_hero_image_url.push({ name: instructor_name, image: instructor.instructor_hero_image_url, platforms: ['web'], source: 'api' })
		})

		const browseCategoriesResponse = await app.$axios.$get('browse_categories', {
			params: {
				library_type: 'on_demand'
			}
		})
		const browseCategories = browseCategoriesResponse.browse_categories.map(cat => {
			return {
				name: cat.name,
				image: cat.portal_image_url,
				source: 'api',
				platforms: ['ios']
			}
		})

		const assetTypes = [
			{
				name: 'Headshot',
				nameInCMS: 'Profile Image',
				description: 'Primary photo for instructors throughout the platform, including on the studio bike / tread app.',
        type: 'image',
        linkId: 'headshot',
				propertyName: 'image_url',
        designDescription: 'Square format (auto-crops to circle in apps) with Off-White (#F5F7F9) background.',
				width: '400',
				height: '400',
				format: 'JPG or PNG',		
				maxFileSize: '500 kb',
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
						location: 'Bike and Tread - Count Me In Modal',
						image: '/bike-tread/count_me_in_modal.png',
						platforms: ['bike-tread']
          },                    
					{
						location: 'Bike and Tread - Class Start Modal',
						image: '/bike-tread/class_start_modal.png',
						platforms: ['bike-tread']
          },                    
					{
						location: 'Bike and Tread - Class Resume Modal',
						image: '/bike-tread/class_resume_modal.png',
						platforms: ['bike-tread']
          },                    
					{
						location: 'Bike and Tread - Post Class Rating Modal',
						image: '/bike-tread/post_class_rating_modal.png',
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
						location: 'iOS - Instructor Detail',
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
				name: "Headshot (Email)",
				nameInCMS: 'Email Share Image',
				description: 'Instructor photo in the Month in Review emails.',
        type: 'image',
        linkId: 'headshot-email',
				propertyName: '',
        designDescription: 'Headshot image with top of head pop out.',
				width: '390',
				height: '444',
				format: 'JPG or PNG',
				maxFileSize: '500 kb',
				usage: [
          {
						location: 'Email - Month in Review',
						image: '/email/month_in_review.png',
						platforms: ['email']
          }
        ],
				assets: email_share_image
			},
			{
				name: "Instructor List",
				nameInCMS: 'Instructor List Display (Web)',
				description: 'Instructor photo on Bike / Tread and Web instructor list.',
        type: 'image',
        linkId: 'instructor-list',
				propertyName: 'web_instructor_list_display_image_url',
        designDescription: 'Silo’ed ⅓ crop of instructor on Off-White (#F5F7F9) background. Right side should leave room for instructor name.',
				width: '1040',
				height: '508',
				format: 'JPG or PNG',
				maxFileSize: '500 kb',
        guestInstructorNotes: 'Silo’ed head and shoulders crop of instructor on Off-White (#F5F7F9) background. Right side should leave room for instructor name. 920 x 240.',
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
				name: "Instructor List - iOS",
				nameInCMS: 'Instructor List Display (iOS)',
				description: 'Instructor photo on iOS instructor list.',	
        type: 'image',
        linkId: 'instructor-list-ios',
				propertyName: 'ios_instructor_list_display_image_url',
        designDescription: 'Silo’ed ⅓ crop of instructor on White background. Right side should leave room for instructor name.',
				width: '1524',
				height: '508',
				format: 'JPG or PNG',
				maxFileSize: '500 kb',
        guestInstructorNotes: 'Silo’ed head and shoulders crop of instructor on Off-White (#F5F7F9) background. Right side should leave room for instructor name. 1524 x 508.',
				usage: [
          {
						location: 'iOS - Peloton Instructors',
						image: '/ios/peloton_instructors.png',
						platforms: ['ios']
          }                    
        ],
				assets: ios_instructor_list_display_image_url
			},
			{
				name: "Cover Image",
				nameInCMS: 'Cover Image (iOS)',
				description: 'Cover image on iOS Featured and Live Class Details screens, as well as the Bike / Tread Instructor Detail screen.',				
        type: 'image',
        linkId: 'cover-image',
				propertyName: 'jumbotron_url_ios',
				width: '1536',
				height: '900',
				format: 'JPG or PNG',
				maxFileSize: '500 kb',
				usage: [
					{
						location: 'Bike and Tread - Instructor Detail',
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
				name: "Hero",
				nameInCMS: 'Instructor Hero Image',
				description: 'Hero image on the Instructor Detail screen on web.',
        type: 'image',
        linkId: 'hero',
				propertyName: 'instructor_hero_image_url',
        designDescription: 'Full body on hardware.',
				width: '1020',
				height: '1240',
				format: 'Transparent PNG',
				maxFileSize: '500 kb',
        guestInstructorNotes: 'Headshot. 960 x 960.',
				usage: [
          {
						location: 'Web - Instructor Detail Screen',
						image: '/web/about_instructor.png',
						platforms: ['web']
          }                    
        ],
				assets: instructor_hero_image_url
			},          
			{
				name: "About",
				nameInCMS: 'About Image',
				description: 'Image in the questionnaire section of the Instructor Detail screen on web',	
        type: 'image',
        linkId: 'about',
				propertyName: 'about_image_url',
        designDescription: '¾ body silo with white background.',
				width: '600',
				height: '786',
				format: 'Transparent PNG',
				maxFileSize: '500 kb',
				usage: [
          {
						location: 'Web - Instructor Questionnaire on Instructor Detail Screen',
						image: '/web/about_instructor_questionnaire.png',
						platforms: ['web']
          }                    
        ],
				assets: about_image_url
			},
			{
				name: "Lifestyle",
				nameInCMS: 'Life Style Image',
				description: 'Quote background on the Instructor Detail screen',
        type: 'image',
        linkId: 'lifestyle',
				propertyName: 'life_style_image_url',
        designDescription: 'Lifestyle moment imagery.',
				width: '3500',
				height: '2050',
				format: 'JPG or PNG',
				maxFileSize: '500 kb',
				usage: [
          {
						location: 'Web - Instructor Quote on Instructor Detail Screen',
						image: '/web/about_instructor_quote.png',
						platforms: ['web']
          }                    
        ],
				assets: life_style_image_url
			},
			{
				name: "Facebook Share (Cycling)",
				nameInCMS: 'Workout Base Images',
				description: 'Background image on metrics shared to Facebook.',				
        type: 'image',
        linkId: 'fb-share-cycling',
				propertyName: '',
        designDescription: 'B&W image on black background depicting corresponding discipline. Left side should leave room for metrics overlay. Right side should be branded with logomark. CMS can accept multiple images.',
				width: '1200',
				height: '630',
				format: 'JPG or PNG',
				maxFileSize: '500 kb',
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
				assets: fb_share_cycling
			},
			{
				name: "Facebook Share (Running)",
				nameInCMS: 'Workout Base Images',
				description: 'Background image on metrics shared to Facebook.',				
        type: 'image',
        linkId: 'fb-share-running',
				propertyName: '',
        designDescription: 'B&W image on black background depicting corresponding discipline. Left side should leave room for metrics overlay. Right side should be branded with logomark. CMS can accept multiple images.',        
				width: '1200',
				height: '630',
				format: 'JPG or PNG',
				maxFileSize: '500 kb',
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
				assets: fb_share_running
			},
			{
				name: "Facebook Share (Bootcamp)",
				nameInCMS: 'Workout Base Images',
				description: 'Background image on metrics shared to Facebook.',				
        type: 'image',
        linkId: 'fb-share-bootcamp',
				propertyName: '',
        designDescription: 'B&W image on black background depicting corresponding discipline. Left side should leave room for metrics overlay. Right side should be branded with logomark. CMS can accept multiple images.',
				width: '1200',
				height: '630',
				format: 'JPG or PNG',
				maxFileSize: '500 kb',
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
				assets: fb_share_bootcamp
			},
			{
				name: "Facebook Share (Floor)",
				nameInCMS: 'Workout Base Images',
				description: 'Background image on metrics shared to Facebook.',				
        type: 'image',
        linkId: 'fb-share-floor',
				propertyName: '',
        designDescription: 'B&W image on black background depicting corresponding discipline. Left side should leave room for metrics overlay. Right side should be branded with logomark. CMS can accept multiple images.',        
				width: '1200',
				height: '630',
				format: 'JPG or PNG',
				maxFileSize: '500 kb',
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
				assets: fb_share_floor
			},                  
			{
				name: "Outdoor Run Thumbnail",
				nameInCMS: 'This asset is not editable in CMS',
        description: 'Background for outdoor run workouts throughout the iOS app.',
        type: 'image',
        linkId: 'outdoor-run',
        designDescription: 'Outdoor lifestyle image.',
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
				description: 'Image used for iOS class category cards.',                
        type: 'image',
        linkId: 'browse-category',
				designDescription: 'Black room studio color image. Left side should leave room browse category.',
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
				assets: browseCategories
      },
			{
				name: "Just Ride",
				nameInCMS: 'This asset is not editable in CMS',
				description: 'Background for Just Ride option on the bike\'s More tab.',				
        type: 'image',
        linkId: 'just-ride',
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
					// Source: https://github.com/pelotoncycle/android/tree/master/ui/src/main/res/drawable-hdpi
					image: '/bike-tread/freestyle_ride_bg.png',
					platforms: ['bike-tread']
        }]
      },
			{
				name: "Just Run",
				nameInCMS: 'This asset is not editable in CMS',
				description: 'Background for Just Run on the tread\'s More tab.',								
        type: 'image',
        linkId: 'just-run',
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
					// Source: https://github.com/pelotoncycle/android/tree/master/ui/src/main/res/drawable-hdpi					
					image: '/bike-tread/freestyle_ride_bg.png',
					platforms: ['bike-tread']
        }]
      },
			{
				name: "Scenic Ride / Run",
				nameInCMS: 'This asset is not editable in CMS',
				description: 'Background for Scenic Ride option on bike and tread More tab.',								
        type: 'image',
        linkId: 'scenic',
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
					// Source: https://github.com/pelotoncycle/android/tree/master/ui/src/main/res/drawable-hdpi					
					image: '/bike-tread/scenic_bg.png',
					platforms: ['bike-tread']
        }]
      },
			{
				name: "iOS Splash",
				nameInCMS: 'This asset is not editable in CMS',
				description: 'Background video seen when you first open the iOS app.',						
        type: 'video',
        linkId: 'ios-splash',
				width: '1024',
				height: '768',
				format: 'mp4',
				maxFileSize: 'Unknown',
				usage: [
					{
						location: 'iOS - Splash Screen',
						image: '/ios/splash.png',
						platforms: ['ios']
					}                                                                        
        ],
				assets: [
					{
						name: 'iOS Splash Video',
						video: '/ios_splash.mp4',
						platforms: ['ios']
					}
				]
      },
			{
				name: "Commercial Splash",
				nameInCMS: 'This asset is not editable in CMS',
				description: 'Background image on the splash screen for the commercial bike.',						
        type: 'image',
        linkId: 'commercial-splash',
				width: '1920',
				height: '1080',
				format: 'JPG or PNG',						
				maxFileSize: '',
				usage: [
					{
						location: 'Commercial Bike - Splash Screen',
						image: '/bike-tread/commercial_splash.png',
						platforms: ['bike-tread']
					}                                                                        
        ],
				assets: commercial_splash
      },
			{
				name: "Commercial Video",
				nameInCMS: 'This asset is not editable in CMS',
				description: 'Video users can open from the commercial bike splash screen.',						
        type: 'video',
        linkId: 'commercial-video',
				width: '960',
				height: '540',
				format: 'JPG or PNG',						
				maxFileSize: '',
				usage: [
					{
						location: 'Commercial Bike - Video Linked From Splash Screen',
						image: '/bike-tread/commercial_video.png',
						platforms: ['bike-tread']
					}                                                                        
        ],
				assets: [
					{
						name: 'Commercial Splash Video',
						video: '/commercial_splash.mp4',
						platforms: ['bike-tread']
					}
				]
      }                 
		]

		return {
      assetTypes,
      platforms: 'all'
		}
	},
	methods: {
		filterPlatforms(val) {
			this.platforms = val
		}
	},
	components: {
		TheNavbar,
		AppSideNav,
    AppAssets
	}
}
</script>

<style lang="scss" scoped>
  $nav-height: 60px;

  .select:not(.is-multiple):not(.is-loading)::after {
    border-color: rgb(255, 51, 71);
  }

  .main-wrapper {
    height: calc(100vh - 71px);
    margin-top: $nav-height;
    .assets {
      margin-top: -3rem;
      padding-top: 3rem;
    }
    .sidebar {
      height: calc(100vh - 71px);
      overflow-y: scroll;
      padding-top: 3rem;
      padding-bottom: 2rem;
      position: sticky;
      top: $nav-height;
    }
  }  
</style>
