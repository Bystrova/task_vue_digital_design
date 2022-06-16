export const trackPath = {
	data(){
		return {
			isSaved: true,
		}
	},

	beforeRouteLeave(to, from, next) {
		if(!this.isSaved) {
			const answer = window.confirm('Изменения будут потеряны. Перейти?')			
			if (answer) {
				next()
			} else {
				next(false)
			}
		} else {
			next()
		}
		
	}
}