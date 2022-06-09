<template>
	<span class="task-status">{{ statusText }}</span>
</template>

<script>
export default {
	props: {
		statusText: String,
	},
};
</script>

<style lang="scss" scoped>
.task-status {
	border-radius: 5px;
	padding: 2px 10px;
	font-size: 14px;
	line-height: 16px;

	&-opened {
		background-color: $label-text;
		border: 1px solid $text-color;
		color: $text-color;
	}

	&-inProgress,
	&-testing {
		background-color: $bg-inProgress;
		border: 1px solid $color-inProgress;
		color: $color-inProgress;
	}

	&-complete {
		background-color: $bg-complete;
		border: 1px solid $color-complete;
		color: $color-complete;
	}
}
</style>
