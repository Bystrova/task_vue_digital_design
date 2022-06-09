export default api => {
	api.Data = {

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
		}
	}
}