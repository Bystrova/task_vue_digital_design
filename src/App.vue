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
		<Dropdown></Dropdown>
	</div>
</template>

<script>

export default {
	data() {
		return {
		}
	},

	
	computed: {

	},
	methods: {
	
	},
}
</script>

<style lang='scss' scoped>
	.app{
		padding: 30px;
		width: 580px;
		background-color: $basic-white;
		margin: 30px auto;
	}

	.wrap {
		margin-bottom: 20px;
	}
</style>
