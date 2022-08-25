<template>
  <form class="card auth-card" @submit.prevent="onSubmit">
    <div class="card-content">
      <span class="card-title">Домашняя бухгалтерия</span>
      <div class="input-field">
        <input
            id="email"
            type="text"
            v-model="v$.form.email.$model"
            :class="{ invalid: (v$.form.email.$dirty && v$.form.email.$errors.length) }"
            >
        <label for="email">Email</label>
        <div v-for="(error, index) of v$.form.email.$errors" :key="index">
          <small class="helper-text invalid">{{ error.$message }}</small>
        </div>
      </div>
      <div class="input-field">
        <input
            id="password"
            type="password"
            v-model="v$.form.password.$model"
            :class="{ invalid: (v$.form.password.$dirty && v$.form.email.$errors.length) }"
        >
        <label for="password">Пароль</label>
        <div v-for="(error, index) of v$.form.password.$errors" :key="index">
          <small class="helper-text invalid">{{ error.$message }}</small>
        </div>
      </div>
      <div class="input-field">
        <input
            id="name"
            type="text"
            v-model="v$.form.name.$model"
            :class="{ invalid: (v$.form.password.$dirty && v$.form.email.$errors.length) }"
        >
        <label for="name">Имя</label>
        <div v-for="(error, index) of v$.form.name.$errors" :key="index">
          <small class="helper-text invalid">{{ error.$message }}</small>
        </div>
      </div>
      <p>
        <label>
          <input type="checkbox" v-model="v$.form.agree.$model" />
          <span>С правилами согласен</span>
        </label>
      </p>
    </div>
    <div class="card-action">
      <div>
        <button
            class="btn waves-effect waves-light auth-submit"
            type="submit"
        >
          Зарегистрироваться
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Уже есть аккаунт?
        <router-link to="/login">Войти!</router-link>
      </p>
    </div>
  </form>

</template>
<script>
import useVuelidate from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'
import axios from 'axios'

export default {
  name: 'register-view',
  setup () {
    return { v$: useVuelidate() }
  },
  data () {
    return {
      form: {
        email: '',
        password: '',
        name: '',
        agree: false
      }
    }
  },
  validations () {
    return {
      form: {
        email: {
          required,
          email
        },
        password: {
            required,
            min: minLength(8)
        },
        name: { required },
        agree: { checked: v => v }
      }
    }
  },
  methods: {
    async onSubmit () {
      if (this.v$.$invalid) {
        this.v$.$touch()
        return
      }
			const requestOptions = {
				name: this.form.name,
				email: this.form.email,
				password: this.form.password
			}
			await axios.post('http://localhost:5000/users/register', requestOptions)
				.then(res => {
					this.$message('mess', res.data.message)
					this.$router.push('/login')
				})
				.catch(err => {
					this.$message('err', err.response.data.message)
				})
    }
  }
}
</script>
