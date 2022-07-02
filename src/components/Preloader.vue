<template>
	<div class="preloader">
		<span class="visually-hidden">Loading...</span>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@keyframes rotate {
	100% {
		transform: rotate(360deg);
	}
}
.preloader {
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;

	position: relative;

	&::before {
		position: absolute;
		content: '';
		width: 100px;
		height: 100px;
		border-radius: 50%;
		border: 1px solid $primary;
		background: conic-gradient($primary 225deg, transparent 225deg 360deg);
		animation: rotate 1s infinite linear;
	}

	&::after {
		position: absolute;
		content: '';
		width: 80px;
		height: 80px;
		border-radius: 50%;
		background: $basic-white;
		border: 1px solid $primary;
	}
}
</style>
