<template>
	<div>
		<Header></Header>
		<main class="center">
			<form @submit.prevent="sendTaskData">
				<Board isActive>
					<template v-slot:top-content>
						<h1 class="board-heading">
							{{ id ? 'Редактирование' : 'Создание' }}
						</h1>
						<div class="buttons-wrap">
							<Button
								class="btn-primary"
								:text="id ? 'Сохранить' : 'Добавить'"
								type="submit"
							></Button>
							<Button
								class="btn-default"
								text="Отмена"
								type="button"
								@click="redirect"
							></Button>
						</div>
					</template>
					<template v-slot:main-content>
						<TaskCardAddOrEdit
							v-bind="taskObj"
							@change="setTaskData"
						></TaskCardAddOrEdit>
					</template>
				</Board>
			</form>
		</main>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { trackPath } from '../mixins/trackPath';

export default {
	mixins: [trackPath],
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

	beforeRouteLeave(to, from, next) {
		localStorage.removeItem('currentUser');
		next();
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
			this.isSaved = false;
			this.taskData = obj;
		},

		sendTaskData() {
			this.isSaved = true;
			if (!!Object.keys(this.taskData).length) {
				this.editTask(this.taskData);
			}
			// this.$router.push(this.goToTasks);
			this.$router.go(-1);
		},

		redirect() {
			this.$router.go(-1);
		},
	},
};
</script>
;

<style lang="scss" scoped>
.buttons-wrap {
	display: flex;
	align-items: center;
	gap: 10px;
	flex-wrap: wrap;
}
</style>
