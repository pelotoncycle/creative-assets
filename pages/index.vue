<template>
  <div>
    <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="/">
            <svg height="25" width="36" viewBox="0 0 25 36" class="peloton-logo"><path fill-rule="evenodd" d="M20.95 8.533l2.566-4.451a2.724 2.724 0 0 0-.994-3.717 2.715 2.715 0 0 0-3.712.996l-2.565 4.45C10.78 4.085 4.66 6.318 1.676 11.496A12.508 12.508 0 0 0 .704 21.89l4.736-8.218a8.101 8.101 0 0 1 4.948-3.804 8.086 8.086 0 0 1 6.186.816c3.891 2.251 5.23 7.253 2.983 11.151-2.248 3.899-7.242 5.239-11.133 2.988l2.716-4.713c1.3.752 2.96.305 3.711-.996a2.724 2.724 0 0 0-.994-3.717 2.715 2.715 0 0 0-3.712.996L1.48 31.428a2.723 2.723 0 0 0 .995 3.717c1.3.752 2.961.305 3.71-.996l2.567-4.45c5.465 1.725 11.584-.508 14.569-5.686 2.984-5.177 1.855-11.602-2.37-15.48"></path></svg>
            Peloton Creative Assets
          </a>
        </div>
        <div class="navbar-menu">
          <div class="navbar-end">
            <div class="navbar-item">
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
          </div>
        </div>
      </div>
    </nav>
    <div class="main-wrapper">
      <div class="container">
        <div class="columns">
          <div class="column is-4-tablet is-3-desktop is-one-fifth is-hidden-mobile sidebar">
            <AppSideNav :assetTypes="assetTypes" :platforms="platforms" />
          </div>
          <div class="column is-8-tablet is-9-desktop is-four-fifths assets">
            <AppAssets :assetTypes="assetTypes" :platforms="platforms" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppSideNav from '@/components/AppSideNav'
import AppAssets from '@/components/AppAssets'
import { categories } from '@/constants/categories'
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

		const response = await app.$axios.$get('instructor')
		const instructors = response.data

		instructors.forEach((instructor) => {
			const instructor_name = instructor.name
			jumbotron_url_ios.push({ name: instructor_name, image: instructor.jumbotron_url_ios, platforms: ['bike-tread', 'ios'] })
			web_instructor_list_display_image_url.push({ name: instructor_name, image: instructor.web_instructor_list_display_image_url, platforms: ['bike-tread', 'web'] })
			ios_instructor_list_display_image_url.push({ name: instructor_name, image: instructor.ios_instructor_list_display_image_url, platforms: ['ios'] })
			image_url.push({ name: instructor_name, image: instructor.image_url, platforms: ['bike-tread', 'ios', 'web'] })
			about_image_url.push({ name: instructor_name, image: instructor.about_image_url, platforms: ['web'] })
			life_style_image_url.push({ name: instructor_name, image: instructor.life_style_image_url, platforms: ['web'] })
			instructor_hero_image_url.push({ name: instructor_name, image: instructor.instructor_hero_image_url, platforms: ['web'] })
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
				format: 'JPG or PNG',
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
				assets: categories
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
					image: 'https://raw.githubusercontent.com/pelotoncycle/android/79da932f4dd481d7d52da3116861ada864a13975/ui/src/main/res/drawable-hdpi/freestyle_ride_bg.png?token=AETev9-v2LOaCZF02Rt5n-U5Zqzvi1EYks5bOsKowA%3D%3D',
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
					image: 'https://raw.githubusercontent.com/pelotoncycle/android/b64bfb43a44d9a58be8b33c3e31fc5effca2fd57/ui/src/main/res/drawable-hdpi/freestyle_bg.png?token=AETev3KA08QJU_NiEkA263L-Chpzz3OPks5bOsKIwA%3D%3D',
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
					image: 'https://raw.githubusercontent.com/pelotoncycle/android/7f6c8dcbf998b2275709e1fc80df9a057b70c9c3/ui/src/main/res/drawable-hdpi/scenic_bg.png?token=AETev3hjwg9QRACoQZTJQ1IWVJYLBusyks5bOsJswA%3D%3D',
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
	components: {
		AppSideNav,
    AppAssets
	}
}
</script>

<style lang="scss" scoped>
  $nav-height: 60px;

	.navbar {
		background-color: rgb(245, 247, 249);
		border-bottom: 1px solid rgb(228, 231, 235);
    height: $nav-height;
  }

	.peloton-logo {
		fill: rgb(255, 51, 71);
  }

  a.navbar-item.is-active, .navbar-link.is-active {
    color: rgb(255, 51, 71);
  }

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
