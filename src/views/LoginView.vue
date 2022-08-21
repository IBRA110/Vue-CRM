/* eslint-disable */
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
    </div>
    <div class="card-action">
      <div>
        <button
            class="btn waves-effect auth-submit"
            type="submit"
        >
          Войти
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Нет аккаунта?
        <router-link to="/register">Зарегистрироваться</router-link>
      </p>
    </div>
  </form>
</template>
<script>
import useVuelidate from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'
import messages from '../utils/messages'

export default {
  setup () {
    return { v$: useVuelidate() }
  },
  data () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  validations () {
    return {
      form: {
        email: {
           required, email
        },
        password: {
            required,
            min: minLength(8)
        }
      }
    }
  },
  methods: {
    onSubmit () {
      if (this.v$.$invalid) {
        this.v$.$touch()
        return
      }
      const formData = {
        email: this.form.email,
        password: this.form.password
      }
      console.log(formData)
      this.$router.push('/')
    }
  },
	mounted () {
		if (messages[this.$route.query.message]) {
			this.$message('mess', messages[this.$route.query.message])
		}
	}
}
</script>
