<template>
	<label>
		<input class='input-checkbox visually-hidden' type='checkbox' :value='value' v-on='$listeners'>
		<span class='input-label'>{{text}}</span>
	</label>
</template>

<script>
	export default {
		data(){
			return {
			}
		},

		props: {
			'text': {
				type: String
			},

			'value': {
				type: String
			}
		},

		methods: {
			change(){
				this.$emit('change')
			}
		}
	}
</script>

<style lang='scss' scoped>
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

		&-checkbox:checked+&-label {
			background-color: $primary;
			color: $default;

			&::before {
				background-color: $primary;
				border-color: $default;
			}

			&::after {
				position: absolute;
				// content: '\2169';
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

		&-checkbox:disabled+&-label {
			color: $label-text;
			background-color: $inner-shadow;

			&::before {
				background-color: $inner-shadow;
				border-color: $label-text;
			}
		}
	}
</style>