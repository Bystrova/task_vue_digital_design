<template>
	<header class='header'>
			<Logo></Logo>
			<div class='header-tabs'>
				<router-link 
					:to='tasks' 
					class='header-tabs-link' 
					:class="{'link-active': isTasks}"
					>Задачи
				</router-link>
				<router-link 
					:to='users' 
					class='header-tabs-link' 
					:class="{'link-active': isUsers}"
					>Пользователи
				</router-link>
			</div>
			<div></div>
	</header>
</template>

<script>

export default {
	data(){
		return {
			users: {
				name: 'Users',
			},

			tasks: {
				name: 'Tasks',
			},
		}
	},

	computed: {
		pageName(){
			// return this.$route.name;
			return this.$route.path;
		},

		isTasks(){
			return this.pageName.includes('/task')
		},

		isUsers(){
			return this.pageName.includes('/user')
		}
	}
}
</script>


<style lang='scss' scoped>
	.header {
		background-color: $basic-white;
		padding: 0 20px;
		box-shadow: 0px 4px 4px rgba($basic-black, 0.25);
		display: flex;
		justify-content: space-between;
		align-items: center;
		min-height: 60px;
		position: relative;
	}

	.header-tabs {
		font-family: $tabs-font;
		font-size: 24px;
		line-height: 33px;
		display: flex;
		align-content: stretch;
		height: 100%;

		&-link {
			margin-right: 10px;
			color: inherit;
			text-decoration: none;
			padding: 12px 0;
			border-bottom: 2px solid transparent;

			&:last-child {
				margin-right: 0;
			}

			&:hover {
				color: $primary;
			}
		}
	}

	.link-active {
		border-bottom: 2px solid $primary;
	}
</style>