<template>
	<div>
		<Header></Header>
		<main class='center'>
			<Board>
				<template v-slot:top-content>
					<h1 class='board-heading'>Пользователи</h1>
				</template>
				<template v-slot:main-content>
					<User v-for='user in users' :key='user.username' :user='user'></User>
				</template>
				<template v-slot:paging>
					<Paging :total='total' :limit='limit'></Paging>
				</template>
			</Board>
		</main>
		<router-view></router-view>
	</div>
</template>

<script>

export default {
		data() {
			return {
				total: 25,
				limit: 8,
				users: [{username: 'User 1', id: '1'}, {username: 'User 2', id: '2'}, {username: 'User 3', id: '3'}, {username: 'User 4', id: '4'}],
			};
		},
}
</script>


<style lang='scss'>
	.row-link{
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