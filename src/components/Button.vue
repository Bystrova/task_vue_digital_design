<template>
	<button class="btn" v-on="$listeners">{{ text }}</button>
</template>

<script>
export default {
	props: {
		text: {
			type: [String, Number],
		},
	},
};
</script>

<style lang="scss" scoped>
.btn {
	padding: 2px 20px 1px;
	border: 1px solid transparent;
	border-radius: 5px;
	font-family: $main-font;
	font-size: 16px;
	cursor: pointer;
	background-color: $default;

	&:hover {
		background-color: $default-hover;
	}

	&:active {
		background-color: $default-active;
	}

	&-pagination {
		padding: 2px 10px 1px;
	}

	&-default {
		background-color: $default;
		color: $basic-black;
		border-color: $text-color;

		&:hover {
			background-color: $default-hover;
		}

		&:active {
			background-color: $default-active;
		}
	}

	&-primary {
		border-color: $primary;
		background-color: $primary;
		color: $default;

		&:hover {
			border-color: $primary-hover;
			background-color: $primary-hover;
		}

		&:active {
			border-color: $primary-active;
			background-color: $primary-active;
		}
	}

	&-error {
		border-color: $error;
		background-color: $error;
		color: $default;

		&:hover {
			border-color: $error-hover;
			background-color: $error-hover;
		}

		&:active {
			border-color: $error-active;
			background-color: $error-active;
		}
	}

	&-success {
		border-color: $success;
		background-color: $success;
		color: $default;

		&:hover {
			border-color: $success-hover;
			background-color: $success-hover;
		}

		&:active {
			border-color: $success-active;
			background-color: $success-active;
		}
	}

	&-delete-comment {
		background-color: transparent;
		border: none;
		color: $error;
		padding: 0;

		&:hover {
			background-color: transparent;
			color: $error-hover;
		}

		&:active {
			color: $error-active;
		}
	}

	&:disabled {
		border-color: $inner-shadow;
		background-color: $inner-shadow;
		color: $label-text;
		border: 1px solid $inner-shadow;
		cursor: default;
	}

	&-dropdown {
		font-family: $input-font;
		font-size: 12px;
		line-height: 14px;
		text-decoration: none;
		display: block;
		border: none;
		background-color: transparent;
		text-align: left;
		margin: 0 0 4px 0;
		padding: 0;
		cursor: pointer;
		width: 100%;
		white-space: nowrap;

		&:last-child {
			margin: 0;
		}

		&:hover {
			color: $primary;
			background-color: transparent;
		}

		&-marked {
			color: $error;
		}
	}
}
</style>
