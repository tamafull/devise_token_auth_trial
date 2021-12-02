<template>
  <form @submit.prevent="login">
    <dl>
      <dt>メールアドレス</dt>
      <dd><input v-model="email"></dd>
    </dl>
    <dl>
      <dt>パスワード</dt>
      <dd><input v-model="password"></dd>
    </dl>
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
dl {
  display: flex;
  justify-content: center;
  margin: 0;
}

dt {
  width: 110px;
  padding: 5px;
}

dd {
  width: 110px;
  padding: 5px;
}
</style>
