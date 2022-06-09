<template>
	<div>
		<Header></Header>
		<main class="center">
			<Board isActive>
				<template v-slot:top-content>
					<h1 class="board-heading">
						{{ id ? 'Редактирование' : 'Создание' }}
					</h1>
					<Button
						class="btn-primary"
						:text="id ? 'Сохранить' : 'Добавить'"
						@click="sendTaskData"
					></Button>
				</template>
				<template v-slot:main-content>
					<TaskCardAddOrEdit
						v-bind="taskObj"
						@change="setTaskData"
					></TaskCardAddOrEdit>
				</template>
			</Board>
		</main>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
	data() {
		return {
			taskData: {},
			goToTasks: {
				name: 'Tasks',
			},
		};
	},

	props: {
		id: String,
	},

	mounted() {
		if (!!this.id) {
			this.fetchTask(this.id);
		}
	},

	computed: {
		...mapGetters(['task']),

		taskObj() {
			return this.id ? { ...this.task } : {};
		},
	},

	methods: {
		...mapActions(['fetchTask', 'editTask']),

		setTaskData(obj) {
			this.taskData = obj;
		},

		sendTaskData() {
			this.editTask(this.taskData);
			this.$router.push(this.goToTasks);
		},
	},
};
</script>
;

<style></style>
