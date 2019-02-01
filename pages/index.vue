<template>
  <div>
    <TheNavbar @selectPlatform="filterByPlatform"/>
    <div class="main-wrapper">
      <div class="container">
        <div class="columns">
          <div class="column is-4-tablet is-3-desktop is-one-fifth is-hidden-mobile sidebar">
            <TheSideNav/>
          </div>
          <div class="column is-8-tablet is-9-desktop is-four-fifths assets">
            <TheAssetsContainer/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheNavbar from "@/components/TheNavbar";
import TheSideNav from "@/components/TheSideNav";
import TheAssetsContainer from "@/components/TheAssetsContainer";
import { mapGetters } from "vuex";

export default {
  methods: {
    filterByPlatform(value) {
      this.selectedPlatforms.includes([value]);
    }
  },
  components: {
    TheNavbar,
    TheSideNav,
    TheAssetsContainer
  },
  async fetch({ store }) {
    await store.dispatch("fetchPlatforms");
    await store.dispatch("fetchCategories");
    await store.dispatch("fetchAssetTypes");
    await store.dispatch("fetchAssets");
    await store.dispatch("fetchApiAssets");
  }
};
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
