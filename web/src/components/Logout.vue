<script>
// TODO: Routerでやるようにして削除したい
import axios from 'axios'

export default {
  name: 'Logout',
  created: function () {
    axios
      .delete(`/api/v1/auth/sign_out`, {
        headers: this.$store.getters.token
      })
      .then(() => {
        this.$store.dispatch('destroyToken')
        this.$router.push('/login')
      })
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
