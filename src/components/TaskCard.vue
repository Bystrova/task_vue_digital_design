<template>
	<section class="card">
		<div class="card-info">
			<dl class="card-info-list">
				<dt class="label-text">Исполнитель</dt>
				<dd class="text">
					{{ assignedUsername }}
				</dd>
				<dt class="label-text">Автор задачи</dt>
				<dd class="text">{{ authorUsername }}</dd>
				<dt class="label-text">Тип запроса</dt>
				<dd class="text">{{ Types[type] }}</dd>
				<dt class="label-text">Приоритет</dt>
				<dd class="text">{{ Ranks[rank] }}</dd>
				<dt class="label-text">Дата создания</dt>
				<dd class="text">{{ dateAndTime(dateOfCreation) }}</dd>
				<dt class="label-text">Дата изменения</dt>
				<dd class="text">{{ dateAndTime(dateOfUpdate) }}</dd>
				<dt class="label-text">Затрачено времени</dt>
				<dd class="text">{{ getHoursAndMinutes(timeInMinutes) }}</dd>
			</dl>
			<Button
				class="btn-primary"
				text="Сделать запись о работе"
				@click="modalToggle"
			></Button>
		</div>
		<div class="card-description">
			<span class="label-text">Описание</span>
			<p class="card-description-text">{{ description }}</p>
		</div>
		<div class="card-comment">
			<form @submit.prevent="submit">
				<span class="label-text">Комментарии ({{ comments.length }})</span>
				<Textarea
					placeholder="Текст комментария"
					@input="setText"
					required
				></Textarea>
				<Button class="btn-success" text="Добавить комментарий"></Button>
			</form>
			<div class="comment-list comment-indent">
				<Comment
					v-for="item in reverseComments"
					:key="item.id"
					v-bind="{ ...item }"
				></Comment>
			</div>
		</div>
		<Modal v-if="isModalActive" title="Запись о работе" @submit="sendWorktime">
			<template v-slot:inputs>
				<label>
					<span class="label-text">Затраченное время</span>
					<Input
						placeholder="Введите число"
						type="number"
						@input="setTime"
						required
					></Input>
				</label>
				<label>
					<span class="label-text">Единица измерения</span>
					<Select
						placeholder="Выберите единицы измерения"
						:obj="Units"
						name="units"
						@change="setUnit"
						required
					></Select>
				</label>
				<label>
					<span class="label-text">Комментарий</span>
					<Textarea placeholder="Введите текст" @input="setComment"></Textarea>
				</label>
			</template>
			<template v-slot:buttons>
				<Button class="btn-primary" text="Добавить"></Button>
				<Button class="btn-default" text="Отмена" @click="modalToggle"></Button>
			</template>
		</Modal>
	</section>
</template>

<script>
import { Ranks, Types, Units } from '../common/const';
import { mapActions, mapGetters } from 'vuex';

export default {
	data() {
		return {
			Ranks: Ranks,
			Types: Types,
			Units: Units,
			hoursDeclinations: ['час', 'часа', 'часов'],
			minutesDeclinations: ['минута', 'минуты', 'минут'],
			commentText: '',
			MSK: 3,
			isModalActive: false,
			modalData: {
				timeInMinutes: '',
				comment: '',
				currentUser: localStorage.id,
			},
		};
	},
	props: {
		assignedId: String,
		dateOfCreation: String,
		dateOfUpdate: String,
		description: String,
		id: String,
		rank: String,
		status: String,
		timeInMinutes: Number,
		type: String,
		userId: String,
	},
	computed: {
		...mapGetters(['allUsers', 'comments']),
		assignedUsername() {
			let assignedUsername = '';
			const assignedUser = this.allUsers.find(
				(user) => user.id === this.assignedId
			);
			if (!!assignedUser) {
				assignedUsername = assignedUser.username;
			}
			return assignedUsername;
		},
		authorUsername() {
			let authorUsername = '';
			const authorUser = this.allUsers.find((user) => user.id === this.userId);
			if (!!authorUser) {
				authorUsername = authorUser.username;
			}
			return authorUsername;
		},
		reverseComments() {
			return this.comments.reverse();
		},
	},
	methods: {
		...mapActions(['addComment', 'fetchComments', 'addWorktime']),
		dateAndTime(val) {
			let dateAndTime = '';
			if (!!val) {
				const date = val.slice(0, 10).split('-').reverse().join('.');
				const hh = Number(val.slice(11, 13)) + this.MSK;
				const mm = val.slice(13, 16);
				dateAndTime = `${date} ${hh}${mm}`;
			}
			return dateAndTime;
		},
		getDeclination(value, declinationsArr) {
			let valueDeclination = '';
			if (value % 10 === 1 && value % 100 !== 11) {
				valueDeclination = declinationsArr[0];
			} else if (
				value % 10 >= 2 &&
				value % 10 <= 4 &&
				(value % 100 > 14 || value % 100 < 12)
			) {
				valueDeclination = declinationsArr[1];
			} else {
				valueDeclination = declinationsArr[2];
			}
			return valueDeclination;
		},
		getHoursAndMinutes(mins) {
			let hours = Math.trunc(mins / 60);
			let minutes = mins % 60;
			return `${hours} ${this.getDeclination(
				hours,
				this.hoursDeclinations
			)} ${minutes} ${this.getDeclination(minutes, this.minutesDeclinations)}`;
		},
		setText(text) {
			this.commentText = text;
		},
		submit(evt) {
			this.addComment({
				taskId: this.id,
				userId: localStorage.id,
				text: this.commentText,
			});
			evt.target.reset();
		},
		modalToggle() {
			this.isModalActive = !this.isModalActive;
		},

		setTime(val) {
			this.modalData.timeInMinutes = val;
		},

		setUnit(val) {
			if (val === 'hours') {
				this.modalData.timeInMinutes = this.modalData.timeInMinutes * 60;
			}
		},

		setComment(val) {
			this.modalData.comment = val;
		},

		sendWorktime() {
			this.addWorktime({
				id: this.id,
				data: this.modalData,
			});
			this.modalData.comment = '';
			this.modalToggle();
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
			// max-height: calc(100% - 25px);
			max-height: 580px;
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

.comment-list {
	max-height: 450px;
	overflow: auto;
	@include scroll-style;
}

.comment-indent {
	margin-top: 13px;
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
