<template>
	<div class="pagination">
		<Button
			class="btn-pagination"
			:disabled="isFirstBtn"
			text="Назад"
			@click="getBack"
		></Button>
		<Button
			class="btn-pagination"
			:class="{ 'btn-primary': activePage === item }"
			:text="item + 1"
			:key="item"
			v-for="item in getArr"
			@click="setActivePage(item)"
		></Button>
		<Button
			class="btn-pagination"
			:disabled="isLastBtn"
			text="Вперед"
			@click="getForward"
		></Button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			activeBtn: this.activePage,
		};
	},

	watch: {
		activePage() {
			this.activeBtn = this.activePage;
		},
	},

	props: {
		total: Number,
		limit: Number,
		activePage: Number,
	},

	methods: {
		setActivePage(val) {
			this.activeBtn = val;
			this.$emit('click', this.activeBtn);
		},

		getBack() {
			this.activeBtn -= 1;
			this.$emit('click', this.activeBtn);
		},

		getForward() {
			this.activeBtn += 1;
			this.$emit('click', this.activeBtn);
		},
	},

	computed: {
		isFirstBtn() {
			return this.activeBtn === 0;
		},

		isLastBtn() {
			return this.activeBtn === this.getArr.length - 1;
		},

		getArr() {
			let totalTasks = this.total;
			if (!this.total) {
				totalTasks = 1;
			}
			const btnQuantity = Math.ceil(totalTasks / this.limit);
			const emptyArr = new Array(btnQuantity);
			return (this.arr = [...emptyArr.keys()]);
		},
	},
};
</script>

<style lang="scss" scoped>
.pagination {
	display: flex;
	align-items: center;
	gap: 5px;
}
</style>
