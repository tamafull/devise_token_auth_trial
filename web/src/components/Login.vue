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
    axios
      .get(`/api/v1/home`, {
        headers: this.$store.getters.token
      }).then(response => {
        if (response.status == 200){
          window.location.href = '/'
        }
      }) // TODO: 認証が通ることを確認するため、遷移後を含めHomeAPIを2回叩く。他の方法を探したい。
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
        }).catch(function (error) {
          console.log(error) // TODO: ログイン失敗時のメッセージを画面に表示する
        })
    }
  }
}
</script>

<style scoped>

</style>
