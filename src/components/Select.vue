<template>
	<div class='dropdown-wrapper' :class='additionalClass'>
		<div class='input-list'>
			<Checkbox 
				v-for='item in arr' 
				:text='item' 
				:key='arr.indexOf(item)' 
				:id='item'
			></Checkbox>
		</div>
	</div>
</template>

<script>

export default {
	data() {
		return {
			arr: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8']
		}
	},

	props: {
		'additionalClass': {
			type: String
		}
	},
}
</script>

<style lang='scss'>

.dropdown-wrapper {
	width: calc(100% + 10px);
	position: absolute;
	border-radius: 3px;
	background-color: $basic-white;
	top: -5px;
	left: -5px;
	z-index: 2;
	display: none;

	&-show {
		border: 1px solid $primary;
		box-shadow: 0px 0px 2px 2px rgba($primary, 0.5);
		padding: 32px 0 2px 0;
		display: block;
	}
}

.input {
	&-list {
		max-height: 200px;
		overflow: auto;
		@include scroll-style;
	}
}
</style>