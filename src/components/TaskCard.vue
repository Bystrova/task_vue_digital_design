<template>
	<section class='card'>
		<div class='card-info'>
			<dl class='card-info-list'>
				<dt class='label-text'>Исполнитель</dt>
				<dd class='text'>Assigned user name</dd>
				<dt class='label-text'>Автор задачи</dt>
				<dd class='text'>User name</dd>
				<dt class='label-text'>Тип запроса</dt>
				<dd class='text'>Type</dd>
				<dt class='label-text'>Приоритет</dt>
				<dd class='text'>Rank</dd>
				<dt class='label-text'>Дата создания</dt>
				<dd class='text'>dd.mm.yy hh.mm</dd>
				<dt class='label-text'>Дата изменения</dt>
				<dd class='text'>dd.mm.yy hh.mm</dd>
				<dt class='label-text'>Затрачено времени</dt>
				<dd class='text'>0 hours 0 minutes</dd>
			</dl>
			<Button class='btn-primary' text='Сделать запись о работе'></Button>
		</div>
		<div class='card-description'>
			<span class='label-text'>Описание</span>
			<p class='card-description-text'>Task description</p>
		</div>
		<div class='card-comment'>
			<form>
				<span class='label-text'>Комментарии (0)</span>
				<Textarea placeholder='Текст комментария'></Textarea>
				<Button class='btn-success' text='Добавить комментарий'></Button>
			</form>
			<dl class='comment-list'>
				<dt>User name</dt>
				<dd>User comment</dd>
				<dt>User name</dt>
				<dd>User comment</dd>
			</dl>
		</div>
	</section>
</template>

<script>

export default {

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

	&-comment {
		width: 39%;
		padding: 0 0 0 20px;
		border-left: 1px solid $disabled;

		.text-field {
			margin-bottom: 10px;
		}
	}
}

.label-text {
	color: $label-text;
	margin-bottom: 5px;
	display: flex;
	justify-content: space-between;
}

.text {
	margin: 0 0 20px 0;
	padding: 0;

	&:last-child {
		margin: 0;
	}
}
</style>