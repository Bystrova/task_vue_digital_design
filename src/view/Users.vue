<template>
	<div>
		<Header></Header>
		<main class="center">
			<Board>
				<template v-slot:top-content>
					<h1 class="board-heading">Пользователи</h1>
				</template>
				<template v-slot:main-content>
					<User v-for="user in users" :key="user.username" :user="user"></User>
				</template>
				<template v-slot:paging>
					<Paging
						:total="usersTotal"
						:limit="usersFilter.limit"
						:activePage="activePage"
						@click="setPage"
					></Paging>
				</template>
			</Board>
		</main>
		<router-view></router-view>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
	data() {
		return {
			activePage: 0,
			usersFilter: {
				filter: {
					query: '',
				},
				page: 0,
				limit: 9,
			},
		};
	},

	computed: {
		...mapGetters(['users', 'usersTotal']),
	},

	watch: {
		activePage() {
			this.usersFilter.page = this.activePage;
			this.fetchUsers(this.usersFilter);
		},
	},

	methods: {
		...mapActions(['fetchUsers']),

		setPage(val) {
			this.activePage = val;
		},
	},

	mounted() {
		this.fetchUsers(this.usersFilter);
	},
};
</script>

<style lang="scss">
.row-link {
	color: inherit;
	display: block;
	margin: 0;
	padding: 20px 30px 19px;
	display: flex;
	align-items: center;
	gap: 14px;

	&:nth-child(2n) {
		background-color: rgba($disabled, 0.15);
	}

	&-user {
		padding: 21px 30px 22px;
	}
}
</style>
