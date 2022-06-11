<template>
	<textarea class="text-field" v-model="setInputVal"></textarea>
</template>

<script>
export default {
	props: {
		text: String,
	},

	computed: {
		setInputVal: {
			get() {
				return this.text;
			},
			set(newVal) {
				this.$emit('input', newVal);
			},
		},
	},
};
</script>

<style lang="scss" scoped>
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
