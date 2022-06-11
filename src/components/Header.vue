<template>
	<header class="header">
		<Logo class="logo-header"></Logo>
		<div class="header-tabs" v-if="!isLogin">
			<router-link
				:to="tasks"
				class="header-tabs-link"
				active-class="link-active"
				>Задачи
			</router-link>
			<router-link
				:to="users"
				class="header-tabs-link"
				active-class="link-active"
				>Пользователи
			</router-link>
		</div>
		<div class="header-dropdown">
			<Dropdown isHeader width="40" height="40" :authUser="authUser">
				<Button
					class="btn-dropdown"
					text="Посмотреть профиль"
					@click.prevent="redirect"
				></Button>
				<Button
					class="btn-dropdown btn-dropdown-marked"
					text="Выйти из системы"
					@click.prevent="exit"
				></Button>
			</Dropdown>
		</div>
	</header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
	data() {
		return {
			users: {
				name: 'Users',
			},
			tasks: {
				name: 'Tasks',
			},

			goToUser: {
				name: 'UserView',
				params: {
					id: localStorage.id,
				},
			},

			goToLogin: {
				name: 'Login',
			},
		};
	},
	props: {
		isLogin: Boolean,
	},

	mounted() {
		this.fetchAuthUser(localStorage.id);
	},

	methods: {
		...mapActions(['fetchAuthUser']),

		redirect() {
			this.$router.push(this.goToUser);
		},

		exit() {
			localStorage.removeItem('id');
			localStorage.removeItem('password');
			this.$router.push(this.goToLogin);
		},
	},

	computed: {
		...mapGetters(['authUser']),
	},
};
</script>

<style lang="scss" scoped>
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
	// align-content: stretch;
	justify-content: center;
	height: 100%;
	width: 33%;

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

.header-dropdown {
	width: 33%;
}

.link-active {
	border-bottom: 2px solid $primary;
}
</style>
