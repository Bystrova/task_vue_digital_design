<template>
	<div>
		<Header></Header>
		<main class="center">
			<Board isActive>
				<template v-slot:top-content>
					<div>
						<h1 class="board-heading">{{ task.title }}</h1>
						<Status
							:class="'task-status-' + task.status"
							:statusText="Statuses[task.status]"
						></Status>
					</div>
					<div>
						<Button
							v-if="isOpened"
							class="btn-default"
							:text="StatusActions.toWork"
							@click="newStatus(appStatuses.inProgress)"
						></Button>
						<Button
							v-if="isInProgress"
							class="btn-default"
							:text="StatusActions.toTesting"
							@click="newStatus(appStatuses.testing)"
						></Button>
						<Button
							v-if="!isOpened"
							class="btn-default"
							:text="StatusActions.reopen"
							@click="newStatus(appStatuses.opened)"
						></Button>
						<Button
							v-if="!isComplete"
							class="btn-success"
							:text="StatusActions.done"
							@click="newStatus(appStatuses.complete)"
						></Button>
						<router-link :to="addOrEdit">
							<Button class="btn-primary" text="Редактировать"></Button>
						</router-link>
						<Button class="btn-error" text="Удалить" @click="remove"></Button>
					</div>
				</template>
				<template v-slot:main-content>
					<TaskCard v-bind="{ ...task }"></TaskCard>
				</template>
			</Board>
		</main>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { Statuses, StatusActions, appStatuses } from '../common/const';
export default {
	data() {
		return {
			addOrEdit: {
				name: 'TaskEdit',
				params: {
					id: this.$route.params.id,
				},
			},

			goToTasks: {
				name: 'Tasks',
			},

			Statuses: Statuses,
			StatusActions: StatusActions,
			appStatuses: appStatuses,
		};
	},

	mounted() {
		this.fetchTask(this.$route.params.id);
		this.fetchAllUsers();
	},

	computed: {
		...mapGetters(['task']),

		isInProgress() {
			return this.task.status === this.appStatuses.inProgress;
		},

		isOpened() {
			return this.task.status === this.appStatuses.opened;
		},

		isComplete() {
			return this.task.status === this.appStatuses.complete;
		},
	},

	methods: {
		...mapActions(['fetchTask', 'fetchAllUsers', 'deleteTask', 'changeStatus']),

		remove() {
			this.deleteTask(this.task.id);
			this.$router.push(this.goToTasks);
		},

		newStatus(newVal) {
			this.changeStatus({
				id: this.addOrEdit.params.id,
				val: this.appStatuses[newVal],
			});
		},
	},
};
</script>

<style lang="scss" scoped></style>
