<template>
	<div class="error">
		<span class="error-text">Error 404. Not found</span>
		<Icon width="100" height="100" :name="'error'"></Icon>
		<router-link :to="linkToMain">
			<Button text="На главную" class="btn-primary"></Button>
		</router-link>
	</div>
</template>

<script>
export default {
	data() {
		return {
			linkToMain: {
				name: 'Tasks',
			},
		};
	},
};
</script>

<style lang="scss">
.error {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
	font-size: 40px;
	gap: 30px;
}
</style>
