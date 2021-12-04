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
}
</script>
