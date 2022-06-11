import api from '@/api';

export const mutation = {
	SET_LOADING: 'SET_LOADING',
	GET_ALL_USERS: 'GET_ALL_USERS',
	GET_USERS: 'GET_USERS',
	GET_USER: 'GET_USER',
	GET_AUTH_USER: 'GET_AUTH_USER',
	GET_USERS_TOTAL: 'GET_USERS_TOTAL',
	SET_ERROR: 'SET_ERROR',
	SET_ERROR_MESSAGE: 'SET_ERROR_MESSAGE',
	SET_USERS_FILTER: 'SET_USERS_FILTER'
}

export default {
	// namespaced: true,
	state: {
		loading: true,
		allUsers: [],
		users: [],
		user: {},
		authUser: {},
		usersTotal: null,
		error: null,
		errorMessage: '',
		usersFilter: {
			filter: {
				query: '',
			},
			page: 0,
			limit: 9,
		},
	},

	getters: {
		loading: state => state.loading,
		allUsers: state => state.allUsers,
		users: state => state.users,
		user: state => state.user,
		authUser: state => state.authUser,
		usersFilter: state => state.usersFilter,
		usersTotal: state => state.usersTotal,
		error: state => state.error,
		errorMessage: state => state.errorMessage,
		usersFilter: state => state.usersFilter,
	},

	mutations: {
		[mutation.SET_LOADING]: (state, isLoading) => {
			state.loading = isLoading
		},

		[mutation.GET_ALL_USERS]: (state, data) => {
			state.allUsers = data || []
		},

		[mutation.GET_USERS]: (state, data) => {
			state.users = data || []
		},

		[mutation.GET_USER]: (state, data) => {
			state.user = data || {}
		},

		[mutation.GET_AUTH_USER]: (state, data) => {
			state.authUser = data || {}
		},

		[mutation.GET_USERS_TOTAL]: (state, value) => {
			state.usersTotal = value || null
		},

		[mutation.SET_ERROR_MESSAGE]: (state, value) => {
			state.errorMessage = value
		},

		[mutation.SET_ERROR]: (state, value) => {
			state.error = value
		},

		[mutation.SET_USERS_FILTER]: (state, value) => {
			state.usersFilter = value
		},
	},

	actions: {

		getLogin: ({commit, dispatch}, data) => {
			api.Data.getLogin(data)
			.then((res) => {
				if(res.status === 200){
					localStorage.id = res.data.id;
					commit(mutation.SET_ERROR, false)
				}
			})
			.catch((error) => {
				commit(mutation.SET_ERROR_MESSAGE, error.data.message);
				commit(mutation.SET_ERROR, true)
			})
		},

		// setLoading: ({ dispatch, commit }, value) => {
		// 	commit(mutation.SET_LOADING, value)
		// },

		fetchAllUsers: ({ dispatch, commit }, value) => {
			// dispatch('setLoading', true);
			api.Data.getAllUsers()
			.then((res) => {
				commit(mutation.GET_ALL_USERS, res.data);	
				// dispatch('setLoading', false);
			})
		},

		fetchUsers: ({ dispatch, commit, getters }, data) => {
			api.Data.getUsers(data)
			.then((res) => {
				commit(mutation.GET_USERS, res.data.data);
				commit(mutation.GET_USERS_TOTAL, res.data.total)
			})
		},

		fetchUser: ({ commit }, id) => {
			api.Data.getUser(id)
			.then((res) => {
				commit(mutation.GET_USER, res.data);
			})
		},

		fetchAuthUser: ({ commit }, id) => {
			api.Data.getUser(id)
			.then((res) => {
				commit(mutation.GET_AUTH_USER, res.data);
			})
		},

		editUser: ({ dispatch }, {data, id}) => {
			api.Data.editUser(data)
			.then(() => {
				dispatch('fetchUser', id)
				dispatch('fetchAuthUser', id)
			})
		},

		// deleteMe: ({ }, id) => {
		// 	api.Data.deleteMe(id)
		// },
	}
}