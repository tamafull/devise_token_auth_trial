<template>
  <form @submit.prevent="login">
    <span>メールアドレス:</span>
    <input v-model="email"><br>
    <span>パスワード:</span>
    <input v-model="password"><br>
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
          email: this.email,
          password: this.password
        }).then(response => {
          this.$store.dispatch('setToken', {
            'Content-Type': 'application/json',
            'access-token': response.headers['access-token'],
            'client': response.headers['client'],
            'uid': response.headers['uid']
          })
          this.$router.push('/')
        }).catch(function (error) {
          console.log(error) // TODO: ログイン失敗時のメッセージを画面に表示する
        })
    }
  }
}
</script>

<style scoped>

</style>
