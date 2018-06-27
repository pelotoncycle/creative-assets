<template>
  <aside class="menu">
    <scrollactive class="menu-list">  
      <a :href="`#${ assetType.linkId }`" class="menu-item scrollactive-item" v-for="assetType in assetTypes" :key="assetType.name">{{ assetType.name }}</a>
    </scrollactive>
  </aside>
</template>

<script>
export default {
  props: [
    'assetTypes'
  ]
}
</script>

<style lang="scss" scoped>
  .menu-item {
    font-size: .9rem;
  }
</style>


