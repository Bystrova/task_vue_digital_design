<template>
	<div class="comment">
		<div class="label-text">
			{{ getUsername }} ({{ dateAndTime(dateOfUpdate) }})
			<Button
				class="btn btn-delete-comment"
				type="button"
				text="Удалить"
				@click="deleteTaskComment"
			></Button>
		</div>
		<p class="text">{{ text }}</p>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
	props: {
		text: String,
		dateOfUpdate: String,
		userId: String,
		id: String,
		taskId: String,
	},

	computed: {
		...mapGetters(['allUsers']),
		getUsername() {
			let username = '';
			const user = this.allUsers.find((user) => user.id === this.userId);
			if (!!user) {
				username = user.username;
			}
			return username;
		},
	},

	methods: {
		...mapActions(['deleteComment', 'fetchComments']),

		dateAndTime(val) {
			let dateAndTime = '';
			if (!!val) {
				const date = val.slice(0, 10).split('-').reverse().join('.');
				const time = val.slice(11, 16);
				dateAndTime = `${date} ${time}`;
			}
			return dateAndTime;
		},

		deleteTaskComment() {
			this.deleteComment(this.id, this.taskId);
		},
	},
};
</script>

<style lang="scss" scoped>
.label-text {
	color: $label-text;
	margin-bottom: 5px;
	display: flex;
	justify-content: space-between;
}
.text {
	display: block;
	margin: 0 0 20px 0;
	padding: 0;
}

.comment:last-child .text {
	&:last-child {
		margin: 0;
	}
}
</style>
