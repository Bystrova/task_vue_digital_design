<template>
	<svg width="14" height="8">
		<use :xlink:href="'#' + name"></use>
	</svg>
</template>

<script>
export default {
	props: {
		name: String,
	},
};
</script>

<style></style>
