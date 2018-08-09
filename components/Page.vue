<template>
  <div v-editable="blok">
    <component :key="blok._uid" v-for="blok in blok.body" :blok="blok" :platforms="platforms" :assets="assets[blok.linkId]" :is="blok.component"></component>
  </div>
</template>

<script>
export default {
  props: ['blok', 'platforms', 'assets']
}
</script>