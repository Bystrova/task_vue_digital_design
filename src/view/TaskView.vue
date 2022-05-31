<template>
	<div>
		<Header></Header>
		<main class='center'>
			<Board isActive>
				<template v-slot:top-content>
					<h1 class='board-heading'>Task title</h1>
					<router-link :to='addOrEdit'>
						<Button class='btn-primary' text='Редактировать'></Button>
					</router-link>
				</template>
				<template v-slot:main-content>
					<TaskCard></TaskCard>
				</template>
			</Board>
		</main>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				addOrEdit: {
					name: 'TaskEdit',
					params: {
						id: this.$route.params.id
					}
				}
			}
		}
	}
</script>

<style>

</style>