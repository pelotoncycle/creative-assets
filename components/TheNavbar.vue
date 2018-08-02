<template>
  <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <svg height="25" width="36" viewBox="0 0 25 36" class="peloton-logo"><path fill-rule="evenodd" d="M20.95 8.533l2.566-4.451a2.724 2.724 0 0 0-.994-3.717 2.715 2.715 0 0 0-3.712.996l-2.565 4.45C10.78 4.085 4.66 6.318 1.676 11.496A12.508 12.508 0 0 0 .704 21.89l4.736-8.218a8.101 8.101 0 0 1 4.948-3.804 8.086 8.086 0 0 1 6.186.816c3.891 2.251 5.23 7.253 2.983 11.151-2.248 3.899-7.242 5.239-11.133 2.988l2.716-4.713c1.3.752 2.96.305 3.711-.996a2.724 2.724 0 0 0-.994-3.717 2.715 2.715 0 0 0-3.712.996L1.48 31.428a2.723 2.723 0 0 0 .995 3.717c1.3.752 2.961.305 3.71-.996l2.567-4.45c5.465 1.725 11.584-.508 14.569-5.686 2.984-5.177 1.855-11.602-2.37-15.48"></path></svg>
          Peloton Creative Assets
        </a>
      </div>
      <div class="navbar-menu">
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="select is-rounded is-pulled-right">
              <select v-model="selectedPlatforms">
                <option value="all">All Platforms</option>
                <option value="bike-tread">Bike / Tread</option>
                <option value="ios">iOS</option>
                <option value="web">Web</option>
                <option value="email">Email</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    platforms: {
      type: String,
      required: true
    }
  },
  computed: {
    selectedPlatforms: {
      get() {
        return this.platforms
      },
      set(newValue) {
        this.$emit('updatePlatforms', newValue)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  $nav-height: 60px;

	.navbar {
		background-color: rgb(245, 247, 249);
		border-bottom: 1px solid rgb(228, 231, 235);
    height: $nav-height;
  }

	.peloton-logo {
		fill: rgb(255, 51, 71);
  }

  a.navbar-item.is-active, .navbar-link.is-active {
    color: rgb(255, 51, 71);
  }
</style>


