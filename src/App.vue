<template>
	<div class='app'>
		<div class='wrap'>
			<Button text='Default'></Button>
			<Button text='Primary' additionalClass='btn-primary'></Button>
			<Button text='Success' additionalClass='btn-success'></Button>
			<Button text='Error' additionalClass='btn-error'></Button>
			<Button text='Disabled' disabled></Button>
		</div>
		<Input placeholder='placeholder'/>
		<Input placeholder='placeholder' disabled/>
		<div class='wrap'>
			<Textarea placeholder='placeholder'></Textarea>
		</div>
		<div class='wrap'>
			<Textarea placeholder='placeholder' disabled></Textarea>
		</div>
		<div class='wrap'>
			<Paging></Paging>
		</div>
		<div class='wrap-flex'>
			<Dropdown :arr='arr'>
			</Dropdown>
			<Dropdown :arr='arr2'>
			</Dropdown>
		</div>
	</div>
</template>

<script>

export default {
	data() {
		return {
			arr: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8'],
			arr2: ['Item 9', 'Item 10', 'Item 11', 'Item 12']
		}
	},

	
	computed: {

	},
	methods: {
	
	},
}
</script>

<style lang='scss'>
	@import '@/scss/_fonts';
	.app{
		font-family: 'Roboto', Arial, sans-serif;
		padding: 30px;
		width: 580px;
		background-color: $basic-white;
		margin: 30px auto;
	}

	.wrap {
		margin-bottom: 20px;
	}

	.wrap-flex {
		display: flex;
		gap: 20px;
	}
</style>
