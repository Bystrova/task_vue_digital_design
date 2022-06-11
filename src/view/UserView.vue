<template>
	<div>
		<Header></Header>
		<main class="center">
			<Board isActive>
				<template v-slot:top-content>
					<div>
						<h1 class="board-heading">{{ user.username }}</h1>
					</div>
					<div class="buttons-wrap">
						<Button
							class="btn-default"
							text="Добавить задачу"
							@click="goToAddTask"
						></Button>
						<Button
							v-if="isAssignedUser"
							class="btn-primary"
							text="Редактировать"
							@click="modalToggle"
						></Button>
					</div>
				</template>
				<template v-slot:main-content>
					<UserCard v-bind="{ ...user }"></UserCard>
					<Modal
						v-if="isModalActive"
						title="Редактирование пользователя"
						@submit="editUserData"
					>
						<template v-slot:inputs>
							<label>
								<span class="label-text">Имя пользователя</span>
								<Input
									placeholder="Введите имя"
									:text="user.username"
									@input="setName"
									required
								></Input>
							</label>
							<label>
								<span class="label-text">URL фотографии</span>
								<Input placeholder="Введите URL" @input="setUrl"></Input>
							</label>
							<label>
								<span class="label-text">Комментарий</span>
								<Textarea
									placeholder="Введите текст"
									@input="setAbout"
									:text="user.about"
								></Textarea>
							</label>
						</template>
						<template v-slot:buttons>
							<Button
								class="btn-primary"
								text="Сохранить"
								type="submit"
							></Button>
							<Button
								class="btn-default"
								text="Отмена"
								@click="modalToggle"
							></Button>
						</template>
					</Modal>
				</template>
			</Board>
		</main>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
	data() {
		return {
			addTask: {
				name: 'TaskEdit',
			},
			isModalActive: false,
			test: '',
			modalData: {
				id: this.id,
				login: '',
				username: '',
				about: '',
				photoUrl: '',
				password: localStorage.password,
			},
		};
	},

	props: {
		id: String,
	},

	mounted() {
		this.fetchUser(this.id);
		this.test = this.user.username;
	},

	beforeRouteLeave(to, from, next) {
		this.tasksFilter.filter.assignedUsers = [];
		next();
	},

	computed: {
		...mapGetters(['user', 'tasksFilter']),

		isAssignedUser() {
			return this.id === localStorage.id;
		},
	},

	methods: {
		...mapActions(['fetchUser', 'editUser']),

		goToAddTask() {
			localStorage.currentUser = this.user.id;
			this.$router.push(this.addTask);
		},

		modalToggle() {
			this.isModalActive = !this.isModalActive;
		},

		setName(val) {
			this.modalData.username = val;
		},

		setUrl(val) {
			this.modalData.photoUrl = val;
		},

		setAbout(val) {
			this.modalData.about = val;
		},

		editUserData() {
			this.modalData.login = this.user.login;
			if (!this.modalData.username) {
				this.modalData.username = this.user.username;
			}
			if (!this.modalData.photoUrl) {
				this.modalData.photoUrl = this.user.photoUrl;
			}
			if (!this.modalData.about) {
				this.modalData.about = this.user.about;
			}
			this.editUser({ data: this.modalData, id: localStorage.id });
			this.isModalActive = false;
		},
	},
};
</script>

<style lang="scss" scoped>
.buttons-wrap {
	display: flex;
	align-items: center;
	gap: 10px;
	flex-wrap: wrap;
}
</style>
