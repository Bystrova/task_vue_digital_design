<template>
	<svg>
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
