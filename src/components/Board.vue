<template>
	<section class="board">
		<section class="board-top">
			<slot name="top-content"></slot>
		</section>
		<section class="board-wrapper">
			<slot name="filters"></slot>
			<div class="board-inner" :class="{ 'board-inner-off': isActive }">
				<slot name="main-content"></slot>
			</div>
			<slot name="paging"></slot>
		</section>
	</section>
</template>

<script>
export default {
	props: {
		isActive: {
			type: Boolean,
		},
	},
};
</script>

<style lang="scss" scoped>
.board {
	width: 1280px;
	margin-bottom: 30px;

	&-heading {
		font-family: $board-heading-font;
		font-size: 24px;
		line-height: 28px;
		font-weight: 300;
		margin: 0 10px 0 0;
		padding: 0;
		display: inline;
		vertical-align: middle;

		&-wrapper {
			display: flex;
			gap: 10px;
		}
	}

	&-wrapper {
		background-color: $basic-white;
		border-radius: 5px;
		padding: 20px;
		box-shadow: 0px 0px 5px 3px $inner-shadow;
		height: 642px;

		display: flex;
		flex-direction: column;
	}

	&-top {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 20px;

		&-wrapper {
			align-items: center;
			gap: 10px;
			margin-right: 10px;
		}
	}

	&-inner {
		box-shadow: inset 0px 0px 2px 1px $disabled;
		border-radius: 5px;
		flex-grow: 1;
		margin-bottom: 20px;

		&-off {
			box-shadow: none;
			border-radius: none;
			margin-bottom: 0;
		}
	}
}
</style>
