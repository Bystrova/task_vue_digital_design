<template>
	<textarea class='text-field' v-on='$listeners'></textarea>
</template>

<script>

export default {
}
</script>

<style lang='scss' scoped>
	.text-field {
	@include input-style;

	height: 76px;
	overflow: auto;
	padding: 5px 10px;
	font-family: inherit;
	font-size: 14px;
	line-height: 17px;

	&:hover,
	&:focus,
	&:not(:placeholder-shown) {
		padding: 4px 9px;
	}

	&-description {
		height: calc(100% - 92px);
		font-size: 16px;
		line-height: 19px;
	}
}
</style>