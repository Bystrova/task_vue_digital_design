<template>
	<form class="modal">
		<div class="modal-wrapper">
			<h2 class="modal-heading">{modalHeading}</h2>
			<div class="modal-inner"></div>
			<div class="modal-buttons">
				<button class="button button-primary" type="submit">
					{buttonText}
				</button>
				<button class="button button-default" type="button">Отмена</button>
			</div>
		</div>
	</form>
</template>

<script>
export default {};
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
	display: none;

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
	}

	&-buttons {
		padding: 20px 30px;

		.button:first-child {
			margin-right: 10px;
		}
	}

	&-dropdown {
		margin-bottom: 20px;
	}
}
</style>
