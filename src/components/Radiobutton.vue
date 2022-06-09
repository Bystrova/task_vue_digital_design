<template>
	<label>
		<input
			class="input-radio visually-hidden"
			type="radio"
			v-model="change"
			v-bind="$attrs"
			:value="value"
			@click="toggle"
		/>
		<span class="input-label">{{ text }}</span>
	</label>
</template>

<script>
export default {
	inheritAttrs: false,

	props: {
		text: String,
		value: String,
		checkedVal: String,
	},

	computed: {
		change: {
			get() {
				return this.checkedVal;
			},

			set(newVal) {
				this.$emit('change', newVal);
			},
		},
	},

	methods: {
		toggle() {
			this.$emit('click');
		},
	},
};
</script>

<style lang="scss" scoped>
.input {
	&-label {
		position: relative;
		font-family: $input-font;
		font-size: 14px;
		line-height: 14px;
		padding: 7px 5px 7px 32px;
		display: block;
		cursor: pointer;

		&:hover {
			background-color: $input-item-hover;
		}

		&::before {
			position: absolute;
			content: '';
			width: 24px;
			height: 24px;
			border: 1px solid $text-color;
			border-radius: 5px;
			top: 50%;
			transform: translateY(-50%);
			left: 5px;
			background-color: $basic-white;
		}

		&:hover::before {
			border-color: $primary;
		}
	}

	&-radio:checked + &-label {
		background-color: $primary;
		color: $default;

		&::before {
			background-color: $primary;
			border-color: $default;
		}

		&::after {
			position: absolute;
			content: '';
			width: 12px;
			height: 13px;
			font-weight: bold;
			top: 50%;
			left: 11px;
			transform: translateY(-50%);
			background: url('../assets/images/x.svg') no-repeat;
		}
	}

	&-radio:disabled + &-label {
		color: $label-text;
		background-color: $inner-shadow;

		&::before {
			background-color: $inner-shadow;
			border-color: $label-text;
		}
	}
}
</style>
