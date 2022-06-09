import api from '@/api';

export const mutation = {
	SET_LOADING: 'SET_LOADING',
	GET_ALL_USERS: 'GET_ALL_USERS',
	GET_USERS: 'GET_USERS',
	GET_USERS_TOTAL: 'GET_USERS_TOTAL',
	// SET_FILTER: 'SET_FILTER'
}

export default {
	// namespaced: true,
	state: {
		loading: true,
		allUsers: [],
		users: [],
		usersTotal: null,
		// filter: {}
	},

	getters: {
		loading: state => state.loading,
		allUsers: state => state.allUsers,
		users: state => state.users,
		usersFilter: state => state.usersFilter,
		usersTotal: state => state.usersTotal,
		// filter: state => state.filter
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

		[mutation.GET_USERS_TOTAL]: (state, value) => {
			state.usersTotal = value || null
		},

		// [mutation.SET_FILTER]: (state, value) => {
		// 	state.filter = value
		// },
	},

	actions: {
		setLoading: ({ dispatch, commit }, value) => {
			commit(mutation.SET_LOADING, value)
		},

		fetchAllUsers: ({ dispatch, commit }, value) => {
			// dispatch('setLoading', true);
			api.Data.getAllUsers()
			.then((res) => {
				commit(mutation.GET_ALL_USERS, res.data);	
				dispatch('setLoading', false);
			})
		},

		fetchUsers: ({ dispatch, commit, getters }, data) => {
			api.Data.getUsers(data)
			.then((res) => {
				commit(mutation.GET_USERS, res.data.data);
				commit(mutation.GET_USERS_TOTAL, res.data.total)
			})
		},

		// setFilter: ({commit}, value)=>{
		// 	commit(mutation.SET_FILTER, value)
		// 	console.log(value)
		// }
	}
}