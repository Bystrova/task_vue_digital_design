export default api => {
	api.Data = {

		getLogin(data){
			return api.instance.request({
				method: 'post',
				url: 'users/login',
				data
			})
		},

		getTasks(data) {
			return api.instance.request({
				method: 'post',
				url: 'tasks',
				data
			})
		},

		getTask(id) {
			return api.instance.request({
				method: 'get',
				url: `tasks/${id}`,
			})
		},
		
		editTask(data){
			return api.instance.request({
				method: 'put',
				url: 'tasks/createOrEdit',
				data
			})
		},

		deleteTask(id){
			return api.instance.request({
				method: 'delete',
				url: `tasks/${id}`
			})
		},

		changeStatus(id, val){
			return api.instance.request({
				method: 'patch',
				url: `tasks/${id}/status/${val}`
			})
		},

		addWorktime(id, data){
			return api.instance.request({
				method: 'patch',
				url: `tasks/${id}/worktime`,
				data
			})
		},

		getAllUsers() {
			return api.instance.request({
				method: 'get',
				url: 'users/all',
			})
		},

		getUsers(data) {
			return api.instance.request({
				method: 'post',
				url: 'users',
				data
			})
		},

		getUser(id){
			return api.instance.request({
				method: 'get',
				url: `users/${id}`
			})
		},

		editUser(data){
			return api.instance.request({
				method: 'put',
				url: 'users/edit',
				data
			})
		},

		getComments(id) {
			return api.instance.request({
				method: 'get',
				url: `comments/${id}`,
			})
		},

		addComment(data) {
			return api.instance.request({
				method: 'put',
				url: 'comments/createOrEdit',
				data
			})
		},

		deleteComment(id) {
			return api.instance.request({
				method: 'delete',
				url: `comments/${id}`,
			})
		},

		deleteMe(id) {
			return api.instance.request({
				method: 'delete',
				url: `users/${id}`,
			})
		}
	}
};
