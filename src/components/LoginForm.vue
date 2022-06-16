<template>
	<section class="center center-login">
		<form class="login-form" @submit.prevent="login">
			<h1 class="login-form-heading">Авторизация</h1>
			<div class="login-form-inputs">
				<label>
					<span class="label-text">Логин</span>
					<Input
						placeholder="Введите логин"
						required
						@input="setUserLogin"
						:class="{ 'form-input-error': error }"
					></Input>
				</label>
				<label>
					<span class="label-text">Пароль</span>
					<Input
						placeholder="********"
						type="password"
						required
						@input="setPassword"
						:class="{ 'form-input-error': error }"
					></Input>
				</label>
				<span class="label-text-error">{{ errorMessage }}</span>
			</div>
			<Button class="btn-success" text="Вход"></Button>
		</form>
	</section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
	data() {
		return {
			userLogin: '',
			password: '',
			goToTasks: {
				name: 'Tasks',
			},
		};
	},

	watch: {
		error() {
			if (!this.error) {
				this.$router.push(this.goToTasks);
				localStorage.password = this.password;
			}
		},
	},

	computed: {
		...mapGetters(['errorMessage', 'error']),
	},

	methods: {
		...mapActions(['getLogin']),

		setUserLogin(val) {
			this.userLogin = val;
		},

		setPassword(val) {
			this.password = val;
		},

		login() {
			this.getLogin({
				login: this.userLogin,
				password: this.password,
			});
		},
	},
};
</script>

<style lang="scss" scoped>
.login-form {
	width: 300px;
	display: flex;
	flex-direction: column;
	background-color: $basic-white;
	padding: 30px;
	border-radius: 5px;
	box-shadow: 0px 0px 5px 3px $inner-shadow;

	&-heading {
		margin: 0 0 30px 0;
		padding: 0;
		text-align: center;
		font-weight: 400;
		font-size: 24px;
		line-height: 28px;
	}

	&-inputs {
		margin-bottom: 30px;
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	.label-text {
		color: $label-text;
		margin-bottom: 5px;
		display: block;

		&-error {
			color: $error;
			font-size: 14px;
			text-align: center;
		}
	}
}
</style>
