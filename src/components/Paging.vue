<template>
	<div class='pagination'>
		<Button 
			class='btn-pagination' 
			:disabled='isFirstBtn'
			text='Назад'
			@click='getBack'
			></Button>
		<Button 
			class='btn-pagination' 
			:class="{'btn-primary': activePage===item}"
			v-text='item+1' 
			:value='item' 
			:key='item'
			v-for='item in getArr' 	
			@click='setActivePage'
			></Button>
		<Button 
			class='btn-pagination' 
			:disabled='isLastBtn'
			text='Вперед'
			@click='getForward'
			></Button>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				arr: [],
				activePage: 0,
			}
		},

		props: {
			'total': {
				type: Number
			},

			'limit': {
				type: Number
			}
		},

		methods: {
			setActivePage(evt){
				this.activePage = Number(evt.target.value)
			},

			getBack(){
				this.activePage -=1
			},

			getForward(){
				this.activePage +=1
			}
		},

		computed: {
			isFirstBtn(){
				return this.activePage === 0;
			},

			isLastBtn(){
				return this.activePage === this.arr.length-1
			},

			getArr(){
				const btnQuantity = Math.ceil(this.total / this.limit);
				const emptyArr = new Array(btnQuantity);
				return this.arr = [...emptyArr.keys()];
			}
		}
	}
</script>

<style lang='scss' scoped>
	.pagination {
		display: flex;
		align-items: center;
		gap: 5px;
	}

</style>
