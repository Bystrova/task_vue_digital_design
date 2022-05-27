<template>
	<div class='pagination'>
		<Button 
			class='btn-pagination' 
			:disabled='activePage===0'
			text='Назад'
			@toggle='getBack'
			></Button>
		<Button 
			class='btn-pagination' 
			:class="{'btn-primary': activePage===item}"
			v-text='item+1' 
			:value='item' 
			:key='item'
			v-for='item in arr' 
			@toggle='getActivePage'
			></Button>
		<Button 
			class='btn-pagination' 
			:disabled='activePage===arr.length-1'
			text='Вперед'
			@toggle='getForward'
			></Button>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				arr: [0, 1, 2, 3],
				activePage: 0,
			}
		},

		methods: {
			getActivePage(data){
				this.activePage = Number(data)
			},

			getBack(){
			this.activePage -=1
			},

			getForward(){
				this.activePage +=1
			}
		}
	}
</script>

<style lang='scss'>
	.pagination {
		display: flex;
		align-items: center;
		gap: 5px;
	}

</style>
