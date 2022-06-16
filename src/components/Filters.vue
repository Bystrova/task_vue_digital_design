<template>
	<form class="filter" @submit.prevent="submit">
		<div class="filter-list">
			<div class="filter-type">
				<Select
					placeholder="Тип"
					:obj="Types"
					type="checkbox"
					:checkedItems="tasksFilter.filter.type"
					@change="setTypes"
				></Select>
			</div>
			<div class="filter-name">
				<Input
					placeholder="Название задачи"
					@input="setTaskName"
					:text="tasksFilter.filter.query"
				></Input>
			</div>
			<div class="filter-user">
				<Select
					placeholder="Исполнитель"
					:obj="usersObj"
					type="checkbox"
					:checkedItems="tasksFilter.filter.assignedUsers"
					@change="setAssignedIds"
				></Select>
			</div>
			<div class="filter-status">
				<Select
					placeholder="Статус"
					:obj="Statuses"
					type="checkbox"
					:checkedItems="tasksFilter.filter.status"
					@change="setStatuses"
				></Select>
			</div>
			<div class="filter-priority">
				<Select
					placeholder="Приоритет"
					:obj="Ranks"
					type="checkbox"
					:checkedItems="tasksFilter.filter.rank"
					@change="setRanks"
				></Select>
			</div>
		</div>
		<Button class="btn-primary" type="submit" text="Применить"></Button>
	</form>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { Statuses, Ranks, Types } from '../common/const';
export default {
	data() {
		return {
			Ranks: Ranks,
			Statuses: Statuses,
			Types: Types,
		};
	},

	methods: {
		...mapActions(['fetchTasks']),

		setTypes(arr) {
			this.tasksFilter.filter.type = arr;
		},

		setRanks(arr) {
			this.tasksFilter.filter.rank = arr;
		},

		setStatuses(arr) {
			this.tasksFilter.filter.status = arr;
		},

		setAssignedIds(arr) {
			this.tasksFilter.filter.assignedUsers = arr;
		},

		setTaskName(val) {
			this.tasksFilter.filter.query = val;
		},

		submit() {
			this.tasksFilter.page = 0;
			this.fetchTasks();
		},
	},

	computed: {
		...mapGetters(['allUsers', 'tasksFilter']),
		usersObj() {
			let usersObj = {};
			this.allUsers.map((user) => (usersObj[user.id] = user.username));
			return usersObj;
		},
	},
};
</script>

<style lang="scss" scoped>
.filter {
	display: flex;
	justify-content: space-between;
	margin-bottom: 20px;

	&-list {
		list-style: none;
		// margin: 0 0 20px 0;
		margin: 0 14px 0 0;
		padding: 0;
		// height: 26px;
		display: flex;
		gap: 14px;
		align-items: center;
		width: 100%;
	}

	&-type {
		width: 120px;
	}

	&-name {
		width: 501px;
	}

	&-user {
		width: 180px;
	}

	&-status {
		width: 123px;
	}

	&-priority {
		width: 120px;
	}

	& .form-input {
		margin: 0;
	}
}
</style>
