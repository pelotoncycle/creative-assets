<template>
  <div>
		<TheNavbar :platforms="platforms" @updatePlatforms="filterPlatforms"/>
    <div class="main-wrapper">
      <div class="container">
        <div class="columns">
          <div class="column is-4-tablet is-3-desktop is-one-fifth is-hidden-mobile sidebar">
            <AppSideNav :assetTypes="story.content.body" :platforms="platforms" :assets="assets"/>
          </div>
          <div class="column is-8-tablet is-9-desktop is-four-fifths assets">
						<component v-if="story.content.component" :key="story.content._uid" :blok="story.content" :platforms="platforms" :assets="assets" :is="story.content.component"></component>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import storyblokLivePreview from '@/mixins/storyblokLivePreview'

import TheNavbar from '@/components/TheNavbar'
import AppSideNav from '@/components/AppSideNav'
import { commercial_splash } from '@/constants/commercial_splash'
import { email_share_image } from '@/constants/email_share_image'
import { fb_share_bootcamp } from '@/constants/fb_share_bootcamp'
import { fb_share_cycling } from '@/constants/fb_share_cycling'
import { fb_share_floor } from '@/constants/fb_share_floor'
import { fb_share_running } from '@/constants/fb_share_running'
import { outdoor } from '@/constants/outdoor'

export default {
  mounted () {
    this.$storyblok.init()
    this.$storyblok.on('change', function () {
      window.location.reload()
    })
  },
  async asyncData ({ app, error }) {
		let assets = {
			'cover-image': [],
			'instructor-list': [],
			'instructor-list-ios': [],
			'headshot': [],
			'about': [],
			'lifestyle': [],
			'hero': []
		}
		
		let instructorResponse = await app.$axios.$get('instructor')
		const instructors = instructorResponse.data
		instructors.forEach((instructor) => {
			const instructor_name = instructor.name
			assets['cover-image'].push({ name: instructor_name, image: instructor.jumbotron_url_ios, platforms: ['bike-tread', 'ios'], source: 'api' })
			assets['instructor-list'].push({ name: instructor_name, image: instructor.web_instructor_list_display_image_url, platforms: ['bike-tread', 'web'], source: 'api' })
			assets['instructor-list-ios'].push({ name: instructor_name, image: instructor.ios_instructor_list_display_image_url, platforms: ['ios'], source: 'api' })
			assets['headshot'].push({ name: instructor_name, image: instructor.image_url, platforms: ['bike-tread', 'ios', 'web'], source: 'api' })
			assets['about'].push({ name: instructor_name, image: instructor.about_image_url, platforms: ['web'], source: 'api' })
			assets['lifestyle'].push({ name: instructor_name, image: instructor.life_style_image_url, platforms: ['web'], source: 'api' })
			assets['hero'].push({ name: instructor_name, image: instructor.instructor_hero_image_url, platforms: ['web'], source: 'api' })
		})				

		let browseCategoriesResponse = await app.$axios.$get('browse_categories', {
			params: { library_type: 'on_demand' }
		})
		const browseCategories = browseCategoriesResponse.browse_categories.map(cat => {
			return {
				name: cat.name,
				image: cat.portal_image_url,
				source: 'api',
				platforms: ['ios']
			}
		})
		assets['browse-category'] = browseCategories

		// Local
		assets['just-ride'] = [{
			name: 'Just Ride background',
			// Source: https://github.com/pelotoncycle/android/tree/master/ui/src/main/res/drawable-hdpi
			image: '/bike-tread/freestyle_ride_bg.png',
			platforms: ['bike-tread']
		}]

		assets['just-run'] = [{
			name: 'Just Run background',
			// Source: https://github.com/pelotoncycle/android/tree/master/ui/src/main/res/drawable-hdpi					
			image: '/bike-tread/freestyle_ride_bg.png',
			platforms: ['bike-tread']
		}]

		assets['scenic'] = [{
			name: 'Scenic Ride / Run background',
			// Source: https://github.com/pelotoncycle/android/tree/master/ui/src/main/res/drawable-hdpi					
			image: '/bike-tread/scenic_bg.png',
			platforms: ['bike-tread']
		}]

		assets['ios-splash'] = [{
			name: 'iOS Splash Video',
			video: '/ios_splash.mp4',
			platforms: ['ios']
		}]

		assets['commercial-splash'] = commercial_splash

		assets['commercial-video'] = [{
			name: 'Commercial Splash Video',
			video: '/commercial_splash.mp4',
			platforms: ['bike-tread']
		}]

    let storiesResponse = await app.$storyapi.get('cdn/stories/home', {
      version: 'draft'
		})
		
		return {
			assets,
			story: storiesResponse.data.story,
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
		AppSideNav
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
