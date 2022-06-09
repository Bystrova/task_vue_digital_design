<template>
	<div class="dropdown">
		<button class="dropdown-btn">
			<span class="visually-hidden">Посмотреть возможные действия</span>
		</button>
		<div class="dropdown-list">
			<!-- <div class='dropdown-item'>
				<button class='dropdown-link'>Редактировать</button>
			</div>
			<div class='dropdown-item'>
				<button class='dropdown-link dropdown-link-marked'>Удалить</button>
			</div> -->
			<slot></slot>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {};
	},
};
</script>

<style lang="scss" scoped>
.dropdown {
	position: relative;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: flex-end;

	&:hover &-btn {
		background-color: $primary;

		&::before {
			background-color: $default;
			box-shadow: 0 5px 0 0 $default, 0 -5px 0 0 $default;
		}
	}

	&-btn {
		width: 20px;
		height: 20px;
		border: none;
		cursor: pointer;
		position: relative;
		background-color: transparent;
		border-radius: 5px;

		&::before {
			position: absolute;
			content: '';
			width: 10px;
			height: 2px;
			background-color: $primary;
			top: 9px;
			left: 5px;
			box-shadow: 0 5px 0 0 $primary, 0 -5px 0 0 $primary;
			border-radius: 3px;
		}
	}

	&-list {
		position: absolute;
		right: 0;
		display: none;
		list-style: none;
		margin: 0;
		background-color: $basic-white;
		padding: 4px 5px;
		box-shadow: 0px 0px 2px 2px rgba($primary, 0.5);
		border-radius: 5px;
		z-index: 1;
		top: 20px;
		text-align: start;

		&-header {
			top: 42px;
		}
	}

	&-item {
		margin: 0 0 4px 0;

		&:last-child {
			margin: 0;
		}
	}

	&:hover &-list {
		display: block;
	}
}
</style>
