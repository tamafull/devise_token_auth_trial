<template>
  <form @submit.prevent="signup">
    <pre>{{ message }}</pre>
    <dl>
      <dt>メールアドレス</dt>
      <dd><input v-model="email"></dd>
      <dd v-if="isInValidEmail"><p class='error'>※メールアドレスを入力してください</p></dd>
      <dd v-if="!isInValidEmail"><p class='error'>OK</p></dd>
    </dl>
    <dl>
      <dt>パスワード</dt>
      <dd><input v-model="password"></dd>
      <dd v-if="isInValidPasswordLength"><p class='error'>※パスワードは6桁以上で入力してください</p></dd>
      <dd v-if="!isInValidPasswordLength"><p class='error'>OK</p></dd>
    </dl>
    <dl>
      <dt>パスワード確認</dt>
      <dd><input v-model="passwordConfirmation"></dd>
      <dd v-if="isInValidPasswordConfirmation"><p class='error'>※パスワードをもう一度入力してください</p></dd>
      <dd v-if="!isInValidPasswordConfirmation"><p class='error'>OK</p></dd>
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
  computed: {
    isInValidEmail () {
      const email_reg = /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/i
      return !email_reg.test(this.email)
    },
    isInValidPasswordLength () {
      return this.password.length < 6
    },
    isInValidPasswordConfirmation () {
      return this.passwordConfirmation == '' || this.passwordConfirmation !== this.password;
    },
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
  padding: 5px;
}
.error {
  text-align: left;
  width: 320px;
  margin: 0;
}
</style>
