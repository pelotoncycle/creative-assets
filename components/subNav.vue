<template>
	<nav class="navbar-wrapper">
		<div class="container">
			<div class="columns is-centered">
				<div class="column is-4 is-paddingless">
					<div class="navbar" role="navigation" aria-label="sub navigation">
						<div class="navbar-menu">
							<nuxt-link to="/instructors" class="navbar-item is-expanded">
								Instructors
							</nuxt-link>
							<nuxt-link to="/workouts" class="navbar-item is-expanded">
								Workouts
							</nuxt-link>
							<nuxt-link to="/other" class="navbar-item is-expanded">
								Other
							</nuxt-link>							
						</div>
					</div>
				</div>
			</div>
		</div>
	</nav>
</template>

<style lang="scss" scoped>
	.navbar-wrapper {
		background-color: rgb(255, 255, 255);
		box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 5px 0px;
		height: 70px;
		margin-top: .75rem;
	}

	.navbar {
		height: 70px;
	}

	.navbar-item {
		display: inline-block;
		line-height: 52px;
		text-align: center;
		width: 100%;
	}
</style>

