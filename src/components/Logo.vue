<template>
	<a class="logo">
		<!-- <svg class='logo-pic' width="120" height="20">
			<use :xlink:href="'#logo'"></use>
		</svg> -->
		<Icon class="logo-pic" width="120" height="20" :name="'logo'"></Icon>
	</a>
</template>

<style lang="scss" scoped>
.logo {
	display: block;

	&-header {
		width: 33%;
	}

	&-pic {
		display: inherit;
	}
}
</style>
