import Vuex from 'vuex'

import usersStore from './appStore/usersStore';
import tasksStore from './appStore/tasksStore'

Vue.use(Vuex)

const store = () => {
	return new Vuex.Store({
		modules: {
			usersStore,
			tasksStore
		}
	})
}

export default store