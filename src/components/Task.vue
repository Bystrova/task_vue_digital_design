<template>
	<router-link :to='linkToTaskView' class='row-link'>
		<span class='task-type task-type-task'><span class='visually-hidden'>Ошибка</span></span>
		<span class='task-name'>{{task.title}}</span>
		<span class='task-user'>User name</span>
		<div class='task-wrap'>
			<span class='task-status'>Task status</span>
		</div>
		<div class='task-priority'>Task priority</div>
		<Dropdown>
			<div class='dropdown-item'>
				<router-link :to='addOrEdit' class='dropdown-link'>Редактировать</router-link>
			</div>
		</Dropdown>
	</router-link>
</template>

<script>
	export default {
		data() {
				return {
						linkToTaskView: {
								name: "TaskView",
								params: {
										id: this.task.id
								}
						},

						addOrEdit: {
							name: 'TaskEdit',
							params: {
								id: this.task.id
							}
						}	
				};
		},

		props: {
				task: Object
		},

	}
</script>


<style lang='scss' scoped>
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
			text-align: right;
			display: block;
			width: 95px;
		}

		&-status {
			border-radius: 5px;
			padding: 2px 10px;
			font-size: 14px;
			line-height: 16px;

			&-opened {
				background-color: $label-text;
				border: 1px solid $text-color;
				color: $text-color;
			}

			&-inProgress,
			&-testing {
				background-color: $bg-inProgress;
				border: 1px solid $color-inProgress;
				color: $color-inProgress;
			}

			&-complete {
				background-color: $bg-complete;
				border: 1px solid $color-complete;
				color: $color-complete;
			}
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
				box-shadow: 0 5px 0 0 $primary,
					0 -5px 0 0 $primary;
				border-radius: 3px;
			}
		}
	}

	.dropdown:hover .task-button {
		background-color: $primary;

		&::before {
			background-color: $default;
			box-shadow: 0 5px 0 0 $default,
				0 -5px 0 0 $default;
		}
	}
</style>