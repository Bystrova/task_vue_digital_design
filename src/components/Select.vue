<template>
	<div class='select' :class="{'select-active': isActive}" v-click-outside='closeSelect'>
		<Input 
			class='form-input-heading' 
			:class="{'form-input-heading-active': isActive}" 
			readonly
			:value='getInputValue'
			@click='classToggle'
			v-bind='$attrs'
		/>
		<div class='select-wrapper' :class="{'select-wrapper-show': isActive}">
			<div class='input-list'>
				<Checkbox 
				v-for='item in arr' 
				:text='item' 
				:value='item'
				:key='arr.indexOf(item)' 
				@change='setArrOfValues'
			></Checkbox>
			</div>
		</div>
	</div>
</template>

<script>
import vClickOutside from 'v-click-outside';

export default {
	inheritAttrs: false,
	data() {
		return {
			isActive: false,
			arrOfValues: [],
			inputValue: ''
		}
	},

	props: {
		'arr': {
			type: Array
		}
	},

	methods: {
		classToggle() {
			this.isActive = !this.isActive;
			console.log(this.isActive)
		},

		closeSelect() {
			this.isActive = false
		},

		setArrOfValues(evt){
			console.log(evt.target.value)
			if(this.arrOfValues.indexOf(evt.target.value) === -1) {
				this.arrOfValues.push(evt.target.value)
			} else {
				this.arrOfValues.splice(this.arrOfValues.indexOf(evt.target.value), 1)
			}
		}
	},

	computed: {
		getInputValue(){
			if(this.arrOfValues.length > 0 && this.arrOfValues.length < this.arr.length){
				this.inputValue = 'Выбрано: ' + this.arrOfValues.length;
			} else if (this.arrOfValues.length === this.arr.length) {
				this.inputValue = 'Выбраны все';
			}	else {
				this.inputValue = ''
			}
			return this.inputValue
		}
	},

	directives: {
		clickOutside: vClickOutside.directive
	}
}
</script>


<style lang='scss' scoped>
	.select {
		position: relative;
		height: 24px;
		width: 100%;

		&-wrapper {
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

.input {
	&-list {
		max-height: 200px;
		overflow: auto;
		@include scroll-style;
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
	}
</style>