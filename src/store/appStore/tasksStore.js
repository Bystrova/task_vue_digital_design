import api from '@/api';

export const mutation = {
	GET_TASKS: 'GET_TASKS',
	GET_TASK: 'GET_TASK',
	GET_TOTAL: 'GET_TOTAL',
	GET_COMMENTS: 'GET_COMMENTS',
	GET_TASKS_FILTER: 'GET_TASKS_FILTER'
}

export default {
	// namespaced: true,
	state: {
		tasks: [],
		task: {},
		total: null,
		comments: [],
		activePage: 0,
		tasksFilter: {
			filter: {
				query: '',
				assignedUsers: [],
				userIds: [],
				type: [],
				status: [],
				rank: [],
			},
			page: 0,
			limit: 8,
		},
	},

	getters: {
		tasks: state => state.tasks,
		task: state => state.task,
		total: state => state.total,
		comments: state => state.comments,
		tasksFilter: state => state.tasksFilter,
		activePage: state => state.activePage
	},

	mutations: {
		[mutation.GET_TASKS]: (state, data) => {
			state.tasks = data || []
		},

		[mutation.GET_TASK]: (state, data) => {
			state.task = data || {}
		},

		[mutation.GET_TOTAL]: (state, value) => {
			state.total = value || null
		},

		[mutation.GET_COMMENTS]: (state, data) => {
			state.comments = data || []
		},

		[mutation.GET_TASKS_FILTER]: (state, obj) => {
			state.tasksFilter = obj
		},
	},

	actions: {
		fetchTasks: ({ commit, getters }) => {
			api.Data.getTasks(getters.tasksFilter)
			.then((res) => {
				commit(mutation.GET_TASKS, res.data.data);
				commit(mutation.GET_TOTAL, res.data.total)
			})
		},

		fetchTask: ({commit, dispatch}, id) => {
			api.Data.getTask(id)
			.then((res) => {
				commit(mutation.GET_TASK, res.data)
			})
			.then(() => {
				dispatch('fetchComments')
			})
		},

		editTask: ({dispatch}, data) => {
			api.Data.editTask(data)
			.then(() => {
				dispatch('fetchTasks')
			})
		},

		deleteTask: ({dispatch}, id) => {
			api.Data.deleteTask(id)
			.then(() => {
				dispatch('fetchTasks')
			})
		},

		changeStatus: ({dispatch}, {id, val}) => {
			api.Data.changeStatus(id, val)
			.then(() => {
				dispatch('fetchTasks');
				dispatch('fetchTask', id)
			})
		},

		fetchComments: ({ commit, getters }) => {
			api.Data.getComments(getters.task.id)
			.then((res) => {
				commit(mutation.GET_COMMENTS, res.data);
			})
		},

		addComment: ({ dispatch }, data) => {
			api.Data.addComment(data)
			.then(() => {
				dispatch('fetchComments')
			})
		},

		deleteComment: ({ dispatch }, id) => {
			api.Data.deleteComment(id)
			.then(() => {
				dispatch('fetchComments')
			})
		}
	}
}