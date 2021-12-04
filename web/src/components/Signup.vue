<template>
  <form @submit.prevent="signup">
    <pre>{{ message }}</pre>
    <dl>
      <dt>メールアドレス</dt>
      <dd><input v-model="email"></dd>
    </dl>
    <dl>
      <dt>パスワード</dt>
      <dd><input v-model="password"></dd>
    </dl>
    <dl>
      <dt>パスワード確認</dt>
      <dd><input v-model="passwordConfirmation"></dd>
    </dl>
    <button type="submit">登録</button><br>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Signup',
  data: function () {
    return {
      email: '',
      password: '',
      passwordConfirmation: '',
      message: ' ',
    }
  },
  methods: {
    signup: function () {
      axios
        .post(`/api/v1/auth`, {
          email: this.email,
          password: this.password,
          password_confirmation: this.passwordConfirmation
        }).then(response => {
          this.$store.dispatch('setToken', {
            'Content-Type': 'application/json',
            'access-token': response.headers['access-token'],
            'client': response.headers['client'],
            'uid': response.headers['uid']
          })
          this.$router.push('/')
        }).catch((error) => {
          if (error.response.status == 422) this.message = '入力に誤りがあります'
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
  width: 120px;
  padding: 5px;
}
dd {
  width: 110px;
  padding: 5px;
}
</style>
