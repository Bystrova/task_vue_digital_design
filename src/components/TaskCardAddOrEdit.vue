<template>
	<section class="card">
		<div class="card-info">
			<dl class="card-info-list">
				<dt class="label-text">Исполнитель</dt>
				<dd class="text">
					<Select
						:obj="usersObj"
						placeholder="Имя исполнителя"
						type="radio"
						name="user"
						:checkedVal="assignedUserId"
						@change="setAssignedId"
						required
					></Select>
				</dd>
				<dt class="label-text">Тип запроса</dt>
				<dd class="text">
					<Select
						:obj="Types"
						placeholder="Тип"
						type="radio"
						name="type"
						:checkedVal="type"
						@change="setType"
						required
					></Select>
				</dd>
				<dt class="label-text">Приоритет</dt>
				<dd class="text">
					<Select
						:obj="Ranks"
						placeholder="Приоритет"
						type="radio"
						name="rank"
						:checkedVal="rank"
						@change="setRank"
						required
					></Select>
				</dd>
			</dl>
		</div>
		<div class="card-description">
			<label>
				<span class="label-text">Название</span>
				<Input
					placeholder="Название задачи"
					:text="title"
					class="form-input-indent"
					@input="setTitle"
					required
				/>
			</label>
			<label>
				<span class="label-text">Описание</span>
				<Textarea
					class="text-field-description"
					placeholder="Описание задачи"
					:text="description"
					@input="setDescription"
					required
				></Textarea>
			</label>
		</div>
	</section>
</template>

<script>
import { Ranks, Types } from '../common/const';
import { mapActions, mapGetters } from 'vuex';
export default {
	data() {
		return {
			Ranks: Ranks,
			Types: Types,
			taskData: {
				id: this.id,
				userId: localStorage.id,
				title: this.title,
				description: this.description,
				type: this.type,
				rank: this.rank,
				assignedId: this.assignedId,
				// assignedId: localStorage.currentUser,
			},
		};
	},

	props: {
		id: String,
		title: String,
		description: String,
		type: String,
		rank: String,
		assignedId: String,
	},

	mounted() {
		this.fetchAllUsers();
	},

	watch: {
		id() {
			this.taskData.id = this.id;
		},

		title() {
			this.taskData.title = this.title;
		},

		description() {
			this.taskData.description = this.description;
		},

		type() {
			this.taskData.type = this.type;
		},

		rank() {
			this.taskData.rank = this.rank;
		},

		assignedId() {
			this.taskData.assignedId = this.assignedId;
		},
	},

	computed: {
		...mapGetters(['allUsers', 'user']),
		usersObj() {
			let usersObj = {};
			this.allUsers.map((user) => (usersObj[user.id] = user.username));
			return usersObj;
		},

		assignedUserId() {
			let assignedUser = '';
			if (!!this.assignedId) {
				assignedUser = Object.keys(this.usersObj).find(
					(key) => key === this.assignedId
				);
			} else if (!!localStorage.currentUser) {
				assignedUser = Object.keys(this.usersObj).find(
					(key) => key === localStorage.currentUser
				);
				this.taskData.assignedId = assignedUser;
			}
			return assignedUser;
		},
	},

	methods: {
		...mapActions(['fetchAllUsers']),

		setAssignedId(val) {
			this.taskData.assignedId = val;
			this.$emit('change', this.taskData);
		},

		setType(val) {
			this.taskData.type = val;
			this.$emit('change', this.taskData);
		},

		setRank(val) {
			this.taskData.rank = val;
			this.$emit('change', this.taskData);
		},

		setTitle(val) {
			this.taskData.title = val;
			this.$emit('change', this.taskData);
		},

		setDescription(val) {
			this.taskData.description = val;
			this.$emit('change', this.taskData);
		},
	},
};
</script>

<style lang="scss" scoped>
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
