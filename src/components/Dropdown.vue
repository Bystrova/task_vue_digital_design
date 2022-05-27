<template>
	<div class='dropdown' :class="{'dropdown-active': isActive}">
		<Input 
			class='form-input-heading' 
			:class="{'form-input-heading-active': isActive}"
			placeholder='placeholder' 
			readonly
			@toggle='classToggle'
			v-click-outside='closeSelect'
		/>
		<Select :class="{'dropdown-wrapper-show': isActive}">
			<Checkbox 
				v-for='item in arr' 
				:text='item' 
				:key='arr.indexOf(item)' 
				:id='item'
			></Checkbox>
		</Select>
	</div>
</template>

<script>
import vClickOutside from 'v-click-outside'
export default {
	data() {
		return {
			isActive: false,
		}
	},

	props: {
		'arr': {
			type: Array
		}
	},

	methods: {
		classToggle() {
			this.isActive = !this.isActive
		},

		closeSelect(evt) {
			if(evt.target.tagName !== 'LABEL' && evt.target.tagName !== 'INPUT'){
				this.isActive = false
			}
		}
	},

	directives: {
		clickOutside: vClickOutside.directive
	}
}
</script>


<style lang='scss'>
	.dropdown {
		position: relative;
		height: 24px;
		width: 100%;

		&::before {
			position: absolute;
			content: '';
			top: 9px;
			right: 12px;
			width: 2px;
			height: 6px;
			background-color: $inner-shadow;
			transform: skew(28deg);
			z-index: 1;
		}

		&::after {
			position: absolute;
			content: '';
			top: 9px;
			right: 8px;
			width: 2px;
			height: 6px;
			background-color: $inner-shadow;
			transform: skew(-28deg);
		}

		&-active {
			&::before {
				transform: skew(-28deg);
				top: 9px;
				right: 12px;
				z-index: 4;
			}

			&::after {
				transform: skew(28deg);
				top: 9px;
				right: 8px;
				z-index: 3;
			}
		}


		// &-heading {
		// 	position: absolute;
		// 	top: 0;
		// 	left: 0;
		// 	cursor: pointer;

		// 	&:focus {
		// 		box-shadow: none;
		// 	}

		// 	&-active {
		// 		border: 1px solid $primary;
		// 		box-shadow: none;
		// 		z-index: 3;
		// 		padding: 2px 9px;
		// 	}
		// }
	}
</style>