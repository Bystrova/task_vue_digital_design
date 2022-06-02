<template>
	<section class='card'>
		<div class='card-info'>
			<dl class='card-info-list'>
				<dt class='label-text'>Исполнитель</dt>
				<dd class='text'>
					<Select :arr='assignedUsers' placeholder='Имя исполнителя'></Select>
				</dd>
				<dt class='label-text'>Тип запроса</dt>
				<dd class='text'>
					<Select :arr='types' placeholder='Тип'></Select>
				</dd>
				<dt class='label-text'>Приоритет</dt>
				<dd class='text'>
					<Select :arr='ranks' placeholder='Приоритет'></Select>
				</dd>
			</dl>
		</div>
		<div class='card-description'>
			<label>
				<span class='label-text'>Название</span>
				<Input placeholder='Название задачи'/>
			</label>
			<label >
				<span class='label-text'>Описание</span>
				<Textarea class='text-field-description' placeholder='Описание задачи'></Textarea>
			</label>
		</div>
	</section>
</template>

<script>
	export default {
		data(){
			return {
				assignedUsers: ['Item 1', 'Item 2', 'Item 3'],
				types: ['Type 1', 'Type 2', 'Type 3'],
				ranks: ['Rank 1', 'Rank 2', 'Rank 3']
			}
		}
	}

</script>

<style lang='scss' scoped>
.card {
	display: flex;
	height: 100%;

	&-info {
		width: 26%;
		padding: 0 20px 0 0;

		&-list {
			margin: 0;
		}
	}

	&-description {
		width: 35%;
		border-left: 1px solid $disabled;
		padding: 0 0 0 20px;

		&-text {
			max-height: calc(100% - 25px);
			padding: 0 20px 0 0;
			margin: 0;

			overflow: auto;
			@include scroll-style;
		}
	}

	&-text {
		text-indent: 20px;
		margin: 0;
	}
}

.label-text {
	color: $label-text;
	margin-bottom: 5px;
	display: block;
	// display: flex;
	// justify-content: space-between;
}

.text {
	margin: 0 0 20px 0;
	padding: 0;

	&:last-child {
		margin: 0;
	}
}
</style>