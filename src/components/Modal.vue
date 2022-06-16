<template>
	<form class="modal" @submit.prevent="submit">
		<div class="modal-wrapper">
			<h2 class="modal-heading">{{ title }}</h2>
			<div class="modal-inner">
				<slot name="inputs"></slot>
			</div>
			<div class="modal-buttons">
				<slot name="buttons"></slot>
			</div>
		</div>
	</form>
</template>

<script>
export default {
	props: {
		title: String,
	},

	methods: {
		submit() {
			this.$emit('submit');
		},
	},
};
</script>

<style lang="scss" scoped>
.modal {
	position: fixed;
	top: 0;
	left: 0;
	background-color: rgba($inner-shadow, 0.35);
	width: 100vw;
	height: 100vh;
	justify-content: center;
	align-items: center;
	display: flex;

	&-active {
		display: flex;
	}

	&-wrapper {
		background-color: $basic-white;
		width: 430px;
		border-radius: 5px;
	}

	&-heading {
		font-size: 20px;
		line-height: 23px;
		font-weight: normal;
		margin: 0;
		padding: 20px 30px;
	}

	&-inner {
		padding: 20px 30px;
		border-top: 1px solid $inner-shadow;
		border-bottom: 1px solid $inner-shadow;
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	&-buttons {
		padding: 20px 30px;
		display: flex;
		align-items: center;
		gap: 10px;
		flex-wrap: wrap;
	}

	&-dropdown {
		margin-bottom: 20px;
	}
}
</style>
