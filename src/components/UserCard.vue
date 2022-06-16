<template>
	<div class="user-wrapper">
		<div class="user-profile">
			<div class="user-photo">
				<UserImg
					class="user-photo"
					:photoUrl="userPhoto"
					width="182"
					height="182"
				></UserImg>
			</div>
			<span class="label-text">О себе</span>
			<p class="user-about">{{ about }}</p>
		</div>
		<div class="user-tasks">
			<span class="label-text">Задачи</span>
			<div class="board-inner">
				<Task v-for="task in tasks" :key="task.id" :task="task" userPage></Task>
			</div>
			<Paging
				:total="total"
				:limit="tasksFilter.limit"
				:activePage="tasksFilter.page"
				@click="setPage"
			></Paging>
		</div>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
	data() {
		return {
			src: 'https://i.ibb.co/kxY45GS/trololo.png',
		};
	},

	props: {
		id: String,
		about: String,
		photoUrl: String,
	},

	beforeMount() {
		this.tasksFilter.filter.assignedUsers.push(this.$route.params.id);
		this.tasksFilter.page = 0;
	},

	mounted() {
		this.fetchTasks();
	},

	watch: {
		id() {
			this.tasksFilter.filter.assignedUsers = [this.id];
			this.fetchTasks();
		},
	},

	computed: {
		...mapGetters(['tasks', 'tasksFilter', 'total', 'limit']),

		userPhoto() {
			return this.photoUrl ? this.photoUrl : this.src;
		},
	},

	methods: {
		...mapActions(['fetchTasks']),

		setPage(val) {
			this.activePage = val;
			this.tasksFilter.page = this.activePage;
			this.fetchTasks();
		},
	},
};
</script>

<style lang="scss" scoped>
.user {
	&-wrapper {
		display: flex;
		height: 100%;
	}

	&-profile {
		width: 26%;
		padding: 0 20px 0 0;
		border-right: 1px solid $inner-shadow;
	}

	&-about {
		margin: 0;
		padding: 0;
		max-height: 370px;
		overflow: auto;
		@include scroll-style;
	}

	&-tasks {
		height: 100%;
		width: 74%;
		padding: 0 0 0 20px;
		display: flex;
		flex-direction: column;
	}
}

.label-text {
	color: $label-text;
	margin-bottom: 5px;
	display: flex;
	justify-content: space-between;
}

.board-inner {
	box-shadow: inset 0px 0px 2px 1px $disabled;
	border-radius: 5px;
	flex-grow: 1;
	margin-bottom: 20px;
}
</style>
