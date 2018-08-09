<template>
  <div>
    <img v-img="{ group: `${blok.name}-usage` }" :src="blok.image"
      :alt="blok.location"
      class="image-asset">
    <p class="is-size-7">{{ blok.location }}</p>
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>