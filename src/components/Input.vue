<template>
	<input
		class="form-input"
		v-model="setInputVal"
		@change="change"
		@click="click"
	/>
</template>

<script>
export default {
	data() {
		return {
			// inputText: '',
		};
	},

	props: {
		text: String,
	},

	computed: {
		setInputVal: {
			get() {
				return (this.inputText = this.text);
			},
			set(newVal) {
				this.inputText = newVal;
			},
		},
	},

	methods: {
		change() {
			this.$emit('change', this.inputText);
		},

		click() {
			this.$emit('click');
		},
	},
};
</script>

<style lang="scss" scoped>
.form-input {
	@include input-style;
	padding: 3px 10px;
	margin: 0 0 20px 0;
	height: 24px;
	-moz-appearance: textfield;

	&::-webkit-outer-spin-button,
	&::-webkit-inner-spin-button {
		-webkit-appearance: none;
	}

	&:hover,
	&:focus,
	&:not(:placeholder-shown) {
		padding: 2px 9px;
	}

	&-heading {
		position: absolute;
		top: 0;
		left: 0;
		cursor: pointer;

		&:focus {
			box-shadow: none;
		}

		&-active {
			border: 1px solid $primary;
			box-shadow: none;
			z-index: 3;
			padding: 2px 9px;
		}
	}
}
</style>
