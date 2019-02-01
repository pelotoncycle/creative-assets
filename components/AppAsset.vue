<template>
  <div>
    <img
      v-if="assetFormat === 'Image'"
      v-img="{ group: `${assetType['Name']}-${assetGroup.toLowerCase()}` }"
      :src="assetUrl"
      :alt="assetName"
      class="image-asset"
    >
    <video v-else-if="assetFormat === 'Video'" class="image-asset" controls>
      <source :src="assetUrl" type="video/mp4">
    </video>
    <p class="is-size-7">{{ assetName }}</p>
  </div>
</template>

<script>
export default {
  props: {
    assetType: {
      type: Object,
      required: true
    },
    assetGroup: {
      type: String,
      required: true
    },
    assetName: {
      type: String,
      required: true
    },
    assetFormat: {
      type: String,
      required: true
    },
    assetUrl: {
      type: String,
      required: true
    }
  }
};
</script>