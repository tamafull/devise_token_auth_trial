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
  created: function(){
    const token = JSON.parse(localStorage.getItem(process.env.VUE_APP_TOKEN_NAME))
    console.log(token) // TODO: 認証済みならHomeに遷移したい
  },
  methods: {
    login: function () {
      axios
        .post(`/api/v1/auth/sign_in`, {
          email: this.email,
          password: this.password
        }).then(response => {
          const token = JSON.stringify({
            'Content-Type': 'application/json',
            'access-token': response.headers['access-token'],
            'client': response.headers['client'],
            'uid': response.headers['uid']
          })

          localStorage.setItem(process.env.VUE_APP_TOKEN_NAME, token)
        }).catch(function (error) {
          console.log(error) // TODO: ログイン失敗時のメッセージを画面に表示する
        })
    }
  }
}
</script>

<style scoped>

</style>
