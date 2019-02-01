<template>
  <div>
    <h2 class="is-size-3">{{ category['Name'] }}</h2>
    <AssetType
      v-for="assetType in assetTypesInCategory"
      :key="assetType['ID']"
      :id="assetType['ID']"
      :assetType="assetType"
    />
  </div>
</template>

<script>
import AssetType from "@/components/AssetType";
import { mapGetters } from "vuex";

export default {
  props: {
    category: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters(["selectedAssetTypes"]),
    assetTypesInCategory() {
      return this.selectedAssetTypes.filter(assetType => {
        if (this.category["Asset Types"]) {
          return this.category["Asset Types"].includes(assetType["ID"]);
        } else {
          return [];
        }
      });
    }
  },
  components: {
    AssetType
  }
};
</script>