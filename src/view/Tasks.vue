<template>
	<div>
		<Header></Header>
		<main class="center">
			<Board>
				<template v-slot:top-content>
					<h1 class="board-heading">Задачи</h1>
					<router-link :to="addOrEdit">
						<Button class="btn-primary" text="Добавить задачу"></Button>
					</router-link>
				</template>
				<template v-slot:filters>
					<Filters></Filters>
				</template>
				<template v-slot:main-content>
					<Preloader v-if="isLoading"></Preloader>
					<Task v-for="task in tasks" :key="task.id" :task="task" v-else></Task>
				</template>
				<template v-slot:paging>
					<Paging
						:total="total"
						:limit="tasksFilter.limit"
						:activePage="tasksFilter.page"
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
			addOrEdit: {
				name: 'TaskEdit',
			},
		};
	},
	mounted() {
		this.fetchTasks();
		this.fetchAllUsers();
	},
	computed: {
		...mapGetters(['tasks', 'total', 'tasksFilter', 'isLoading']),
	},
	methods: {
		...mapActions(['fetchTasks', 'fetchAllUsers']),
		setPage(val) {
			this.tasksFilter.page = val;
			this.fetchTasks();
		},
	},
};
</script>

<style lang="scss"></style>
