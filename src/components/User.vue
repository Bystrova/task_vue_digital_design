<template>
	<router-link :to="linkToUser" class="row-link row-link-user">
		<div class="user-item">{{ user.username }}</div>
	</router-link>
</template>

<script>
export default {
	data() {
		return {
			linkToUser: {
				name: 'User',
				params: {
					id: this.user.id,
				},
			},
		};
	},

	props: {
		user: Object,
	},
};
</script>

<style lang="scss" scoped></style>
