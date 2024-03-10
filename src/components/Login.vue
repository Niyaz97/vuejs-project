<!-- <script lang="ts">
import { defineComponent } from 'vue'
import { Authenticator } from '@aws-amplify/ui-vue'
import { useRouter } from 'vue-router'
import '@aws-amplify/ui-vue/styles.css'

export default defineComponent({
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async login() {
      try {
        await Authenticator.signIn(this.username, this.password)
        const router = useRouter()
        router.push('/welcome')
      } catch (error: any) {
        alert(error.message)
      }
    }
  }
})
</script> -->
