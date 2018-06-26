<template>
  <div>
		<navbar />		
		<subNav />		
    <nuxt/>
  </div>
</template>

<script>
import navbar from '@/components/navbar'
import subNav from '@/components/subNav'

export default {
	components: {
		navbar,
		subNav
	}
}
</script>
