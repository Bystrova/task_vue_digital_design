<template>
	<div class="task-row">
		<span class="task-type" :class="'task-type-' + task.type">
			<span class="visually-hidden">Ошибка</span>
		</span>
		<router-link :to="linkToTaskView" class="task-name">{{
			task.title
		}}</router-link>
		<span class="task-user" v-if="!userPage">{{ assignedUsername }}</span>
		<div class="task-wrap">
			<Status
				:class="'task-status-' + task.status"
				:statusText="statuses[task.status]"
			>
			</Status>
		</div>
		<div class="task-priority" :class="'task-priority-' + task.rank">
			<Icon width="14" height="8" :name="task.rank"></Icon>
			<span>{{ ranks[task.rank] }}</span>
		</div>
		<div class="task-actions" v-if="!userPage">
			<Dropdown>
				<template v-slot:dropdown-btn>
					<button class="dropdown-btn">
						<span class="visually-hidden">Посмотреть возможные действия</span>
					</button>
				</template>
				<template v-slot:dropdown-items>
					<Button
						class="btn-dropdown"
						text="Редактировать"
						@click.prevent="redirect"
					></Button>
					<Button
						class="btn-dropdown btn-dropdown-marked"
						text="Удалить"
						@click.prevent="remove"
					></Button>
					<Button
						v-if="isInProgress"
						class="btn-dropdown"
						:text="StatusActions.toTesting"
						@click.prevent="newStatus(appStatuses.testing)"
					></Button>
					<Button
						v-if="!isOpened"
						class="btn-dropdown"
						:text="StatusActions.reopen"
						@click.prevent="newStatus(appStatuses.opened)"
					></Button>
					<Button
						v-if="isOpened"
						class="btn-dropdown"
						:text="StatusActions.toWork"
						@click.prevent="newStatus(appStatuses.inProgress)"
					></Button>
					<Button
						v-if="!isComplete"
						class="btn-dropdown"
						:text="StatusActions.done"
						@click.prevent="newStatus(appStatuses.complete)"
					></Button>
				</template>
			</Dropdown>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import {
	Statuses,
	Ranks,
	Types,
	appStatuses,
	StatusActions,
} from '../common/const';
export default {
	data() {
		return {
			linkToTaskView: {
				name: 'TaskView',
				params: {
					id: this.task.id,
				},
			},

			addOrEdit: {
				name: 'TaskEdit',
				params: {
					id: this.task.id,
				},
			},

			statuses: Statuses,
			ranks: Ranks,
			types: Types,
			appStatuses: appStatuses,
			StatusActions: StatusActions,
		};
	},

	props: {
		task: Object,
		userPage: Boolean,
	},

	computed: {
		...mapGetters(['allUsers']),

		assignedUsername() {
			let assignedUsername = '';
			const assignedUser = this.allUsers.find(
				(user) => user.id === this.task.assignedId
			);
			if (!!assignedUser) {
				assignedUsername = assignedUser.username;
			}
			return assignedUsername;
		},

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
		...mapActions(['deleteTask', 'changeStatus']),

		redirect() {
			this.$router.push(this.addOrEdit);
		},

		remove() {
			this.deleteTask(this.task.id);
		},

		newStatus(newVal) {
			this.changeStatus({ id: this.task.id, val: this.appStatuses[newVal] });
		},
	},
};
</script>

<style lang="scss" scoped>
.task-row {
	// color: inherit;
	display: block;
	margin: 0;
	padding: 20px 30px;
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

.task {
	&-type {
		position: relative;
		display: block;
		height: 24px;
		width: 92px;

		&::before {
			position: absolute;
			content: '';
			width: 24px;
			height: 100%;
			border-radius: 5px;
			top: 0;
			left: 0;
		}

		&::after {
			position: absolute;
			content: '';
			width: 12px;
			height: 12px;
			background-color: $basic-white;
			border-radius: 50%;
			top: 6px;
			left: 6px;
		}

		&-task {
			&::before {
				background-color: $type-task;
			}
		}

		&-bug {
			&::before {
				background-color: $type-bug;
			}
		}
	}

	&-name {
		// width: 44%;
		width: 501px;
		display: block;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		color: inherit;
	}

	&-user {
		// width: 14%;
		width: 180px;
		display: block;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	&-wrap {
		// width: 10%;
		width: 120px;
		display: block;
	}

	&-actions {
		display: block;
		width: 95px;
	}

	&-priority {
		font-size: 14px;
		line-height: 16px;
		position: relative;
		width: 120px;
		display: flex;
		align-items: center;

		& svg {
			margin-right: 4px;
		}

		&-low {
			color: $priority-low;
		}

		&-medium {
			color: $priority-medium;
		}

		&-high {
			color: $priority-high;
		}
	}

	&-button {
		width: 20px;
		height: 20px;
		border: none;
		cursor: pointer;
		position: relative;
		background-color: transparent;
		// display: block;
		border-radius: 5px;

		&::before {
			position: absolute;
			content: '';
			width: 10px;
			height: 2px;
			background-color: $primary;
			top: 9px;
			left: 5px;
			box-shadow: 0 5px 0 0 $primary, 0 -5px 0 0 $primary;
			border-radius: 3px;
		}
	}
}

.dropdown:hover .task-button {
	background-color: $primary;

	&::before {
		background-color: $default;
		box-shadow: 0 5px 0 0 $default, 0 -5px 0 0 $default;
	}
}
</style>
