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
					<Task
						v-for="task in tasks"
						:key="task.id"
						v-bind="{ ...task }"
					></Task>
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
		...mapGetters(['tasks', 'total', 'tasksFilter']),
	},

	methods: {
		...mapActions(['fetchTasks', 'fetchAllUsers']),

		setPage(val) {
			this.activePage = val;
			this.tasksFilter.page = this.activePage;
			this.fetchTasks();
		},

		// setFilter(obj) {
		// 	this.tasksFilter.filter = obj;
		// 	this.fetchTasks();
		// },
	},
};
</script>

<style lang="scss"></style>
