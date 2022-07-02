<template>
	<div class="pagination">
		<div class="pagination-wrap">
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
		<p class="pagination-shown">
			Показано {{ elementsFrom }} - {{ elementsTo }} из {{ total }}
		</p>
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

		elementsFrom() {
			return this.limit * this.activePage + 1;
		},

		elementsTo() {
			return this.limit * this.activePage + this.limit <= this.total
				? this.limit * this.activePage + this.limit
				: this.total;
		},
	},
};
</script>

<style lang="scss" scoped>
.pagination {
	display: flex;
	align-items: center;
	justify-content: space-between;

	&-wrap {
		display: flex;
		align-items: center;
		gap: 5px;
	}

	&-shown {
		margin: 0;
		padding: 0;
		color: $inner-shadow;
	}
}
</style>
