<template>
  <form @submit.prevent="login">
    <pre>{{ message }}</pre>
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
      password: '',
      message: ' ',
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
        }).catch((error) => {
          if (error.response.status == 401) this.message = 'メールアドレスかパスワードが間違っています'
          else console.log(error)
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
  margin: 0;
}

dd {
  width: 110px;
  padding: 5px;
  margin: 0;
}
</style>
