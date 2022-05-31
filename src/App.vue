<template>
	<div class='app'>
		<router-view></router-view>
	</div>
</template>

<script>

export default {
	data() {
		return {
			linkToGo: {
				name: 'Tasks',
			}
		}
	},

	
	computed: {

	},
	methods: {
	
	},
}
</script>

<style lang='scss'>
	@import '@/scss/_fonts';
	@import '@/scss/_variables';
	.app{
		font-family: $main-font;
	}

	.center {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 30px 20px 0;
	}

</style>
