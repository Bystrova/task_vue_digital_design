<template>
	<div class="user-photo">
		<img
			class="user-photo-pic"
			:src="userPhoto"
			v-bind="$attrs"
			alt="Фото пользователя"
		/>
	</div>
</template>

<script>
export default {
	inheritAttrs: false,
	data() {
		return {
			src: 'https://i.ibb.co/kxY45GS/trololo.png',
		};
	},

	props: {
		photoUrl: String,
	},

	computed: {
		userPhoto() {
			return this.photoUrl ? this.photoUrl : this.src;
		},
	},
};
</script>

<style lang="scss" scoped>
.user-photo {
	width: 186px;
	height: 186px;
	border-radius: 50%;
	background: conic-gradient(
		at 50% 50%,
		$primary,
		$error,
		$primary,
		$error,
		$primary,
		$error,
		$primary
	);
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 0 20px 0;

	&-header {
		width: 44px;
		height: 44px;
		margin: 0;
	}

	&-pic {
		border-radius: 50%;
		object-fit: cover;
	}
}
</style>
