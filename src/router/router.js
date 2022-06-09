import VueRouter from 'vue-router';
import Tasks from '../view/Tasks';
import Users from '../view/Users';
import Error from '../view/Error';
import TaskView from '../view/TaskView';
import TaskAddOrEdit from '../view/TaskAddOrEdit';

Vue.use(VueRouter);

const router = () => {
	return new VueRouter({
		mode: 'hash',
		routes: [
			{
				path: '/tasks',
				name: 'Tasks',
				component: Tasks,
				props: true,
			},

			{
				path: '/users',
				name: 'Users',
				component: Users,
				props: true,
			},

			{
				path: '/tasks/task/:id',
				name: 'TaskView',
				component: TaskView,
				props: true,
			},

			{
				path: '/tasks/edit/:id?',
				name: 'TaskEdit',
				component: TaskAddOrEdit,
				props: true,
				// children: [
				// 	{
				// 		path: ':id',
				// 		name: 'TaskEdit',
				// 		component: TaskAddOrEdit,
				// 		props: true,
				// 	}
				// ]
			},
			
			{
				path: '/user/:id',
				name: 'User',
				component: Error, //временно, пока нет User
				props: true,
			},

			{
				path: '/', redirect: {name: 'Tasks'}
				// name: 'Tasks',
				// component: Tasks,
				// props: true,
			},

			{
				path: '*',
				name: 'Error',
				component: Error,
				props: true,
			}
		]
	})
}

export default router;