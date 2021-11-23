<template>
  <form @submit.prevent="login">
    <span>メールアドレス:</span>
    <input v-model="email.data"><br>
    <span>パスワード:</span>
    <input v-model="password.data"><br>
    <button type="submit">ログイン</button><br>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Login',
  data: function () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login: function () {
      axios
        .post(`/api/v1/auth/sign_in`, {
          email: this.email.data,
          password: this.password.data
        })
        .catch(function (error) {
          console.log(error);
        })
    }
  }
}
</script>

<style scoped>

</style>
