<template>
	<div>
		<Header></Header>
		<main class='center'>
			<Board isActive>
				<template v-slot:top-content>
					<h1 class='board-heading'>{{$route.params.id ? 'Редактирование' : 'Создание'}}</h1>
				</template>
				<template v-slot:main-content>
					<TaskCardAddOrEdit></TaskCardAddOrEdit>
				</template>
			</Board>
		</main>
	</div>
</template>

<script>
export default {
	data(){
		return {}
	}
}
</script>;

<style>

</style>