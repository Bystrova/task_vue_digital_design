<template>
	<div
		class="select"
		:class="{ 'select-active': isActive }"
		v-click-outside="closeSelect"
	>
		<Input
			class="form-input-heading"
			:class="{ 'form-input-heading-active': isActive }"
			readonly
			:text="getInputValue"
			@click="classToggle"
			v-bind="$attrs"
		/>
		<div class="select-wrapper" :class="{ 'select-wrapper-show': isActive }">
			<div class="input-list">
				<div v-if="isCheckbox">
					<Checkbox
						v-for="item in Object.keys(obj)"
						:text="obj[item]"
						:key="item"
						:value="item"
						:checkedItems="arrOfValues"
						@change="setArrOfValues"
					></Checkbox>
				</div>
				<div v-else>
					<Radiobutton
						v-for="item in Object.keys(obj)"
						:text="obj[item]"
						:key="item"
						:value="item"
						:checkedVal="checkedVal"
						:name="name"
						@change="setValue"
						@click="classToggle"
						v-bind="$attrs"
					></Radiobutton>
				</div>
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
			arrOfValues: this.checkedItems,
			val: this.checkedVal,
		};
	},

	props: {
		obj: Object,
		checkedVal: String,
		type: String,
		name: String,
		checkedItems: Array,
	},

	watch: {
		checkedVal() {
			this.val = this.checkedVal;
		},

		checkedItems() {
			this.arrOfValues = this.checkedItems;
		},
	},

	methods: {
		classToggle() {
			this.isActive = !this.isActive;
		},

		closeSelect() {
			this.isActive = false;
		},

		setArrOfValues(arr) {
			this.arrOfValues = arr;
			this.$emit('change', this.arrOfValues);
		},

		setValue(val) {
			this.val = val;
			this.$emit('change', this.val);
		},
	},

	computed: {
		isCheckbox() {
			const checkbox = true;
			return this.type === 'checkbox' ? checkbox : !checkbox;
		},

		getInputValue() {
			let inputValue = '';
			if (this.isCheckbox) {
				if (
					this.arrOfValues.length > 0 &&
					this.arrOfValues.length < Object.keys(this.obj).length
				) {
					inputValue = 'Выбрано: ' + this.arrOfValues.length;
				} else if (
					this.arrOfValues.length === Object.keys(this.obj).length &&
					this.arrOfValues.length !== 0
				) {
					inputValue = 'Выбраны все';
				} else {
					inputValue = '';
				}
			} else {
				inputValue = this.obj[this.val];
			}
			return inputValue;
		},
	},

	directives: {
		clickOutside: vClickOutside.directive,
	},
};
</script>

<style lang="scss" scoped>
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
