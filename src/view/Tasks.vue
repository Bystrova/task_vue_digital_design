<template>
	<div>
		<Header></Header>
		<main class='center'>
			<Board>
				<template v-slot:top-content>
					<h1 class='board-heading'>Задачи</h1>
					<router-link :to='addOrEdit'>
						<Button class='btn-primary' text='Добавить задачу'></Button>
					</router-link>
				</template>
				<template v-slot:main-content>
					<Task v-for='task in tasks' :key='task.id' :task='task'></Task>
				</template>
				<template v-slot:paging>
					<Paging :total='total' :limit='limit'></Paging>
				</template>
			</Board>
		</main>
		<router-view></router-view>
	</div>
</template>

<script>

export default {
		data() {
			return {
				total: 47,
				limit: 4,
				tasks: [{id: '1', title: 'Task 1'}, {id: '2', title: 'Task 2'}, {id: '3', title: 'Task 3'}, {id: '4', title: 'Task 4'}],
				addOrEdit: {
					name: 'TaskAdd',
				}
			};
		},
}
</script>

<style lang='scss'>

</style>