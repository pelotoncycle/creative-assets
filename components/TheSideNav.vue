<template>
  <aside class="menu">
    <scrollactive :offset="100">
      <div v-for="category in selectedCategories" :key="category['ID']" class="menu-category">
        <p class="menu-label">{{ category['Name'] }}</p>
        <div class="menu-list">
          <a
            class="menu-item scrollactive-item"
            v-for="assetType in assetTypesInCategory(category)"
            :key="assetType['ID']"
            :href="`#${ assetType['ID'] }`"
          >{{ assetType['Name'] }}</a>
        </div>
      </div>
    </scrollactive>
  </aside>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["selectedCategories", "selectedAssetTypes"])
  },
  methods: {
    assetTypesInCategory(category) {
      if (category["Asset Types"]) {
        return this.selectedAssetTypes.filter(assetType => {
          return category["Asset Types"].includes(assetType["ID"]);
        });
      } else {
        return [];
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.menu-category {
  margin-bottom: 1rem;
}

.menu-item {
  font-size: 0.9rem;
}
</style>


