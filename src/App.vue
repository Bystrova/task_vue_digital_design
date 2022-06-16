<template>
	<div class='app'>
		<router-view></router-view>
	</div>
</template>

<script>

export default {

}
</script>

<style lang='scss' scoped>
	@import '@/scss/_fonts';
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
