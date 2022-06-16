<template>
	<textarea class="text-field" v-model="setInputVal" v-autoHeight></textarea>
</template>

<script>
import autoHeight from '../common/directives/autoHeight';
export default {
	directives: {
		autoHeight,
	},

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
	@include scroll-style;

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
		// height: 90px;
		height: calc(100% - 92px);
		// max-height: 510px;
		font-size: 16px;
		line-height: 19px;
	}
}
</style>
