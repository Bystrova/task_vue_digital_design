<template>
	<textarea class='text-field' :placeholder='placeholder' :disabled='disabled'></textarea>
</template>

<script>

export default {
	props: {
			'placeholder': {
				type: String
			},

			'disabled': {
				type: Boolean
			}
		}
}
</script>

<style lang='scss'>
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