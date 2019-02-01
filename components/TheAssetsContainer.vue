<template>
  <section class="section asset-section">
    <AssetCategory
      v-for="category in selectedCategories"
      :key="category['ID']"
      :category="category"
    />
  </section>
</template>

<script>
import AssetCategory from "@/components/AssetCategory";
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["selectedCategories"])
  },
  components: {
    AssetCategory
  }
};
</script>