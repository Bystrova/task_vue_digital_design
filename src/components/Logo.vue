<template>
	<a class='logo'>
		<svg class='logo-pic' width="120" height="20">
			<use :xlink:href="'#logo'"></use>
		</svg>
	</a>
</template>

<style lang='scss' scoped>
	.logo {
		display: block;

		&-pic {
			display: inherit;
		}
	}
</style>