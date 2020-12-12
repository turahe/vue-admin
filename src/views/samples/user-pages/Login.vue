<template>

  <div class="container-scroller">
    <div class="container-fluid page-body-wrapper full-page-wrapper">
      <div class="content-wrapper d-flex align-items-center auth auth-bg-1 theme-one">
        <div class="row w-100">
          <div class="col-lg-4 mx-auto">
            <div class="auto-form-wrapper">
              <form @submit.prevent="userLogin">
                <div class="form-group">
                  <label for="username" class="label">Username</label>
                  <div class="input-group">
                    <input id="username" type="text" class="form-control form-control-lg" placeholder="Username">
                    <div class="input-group-append">
                        <span class="input-group-text">
                          <i class="fa fa-check-circle"></i>
                        </span>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label for="password" class="label">Password</label>
                  <div class="input-group">
                    <input id="password" type="password" class="form-control form-control-lg" placeholder="*********">
                    <div class="input-group-append">
                        <span class="input-group-text">
                          <i class="fa fa-check-circle"></i>
                        </span>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <button class="btn btn-primary submit-btn btn-block">Login</button>
                </div>
                <div class="form-group d-flex justify-content-between">
                  <div class="form-check form-check-flat mt-0">
                    <label class="form-check-label">
                      <input type="checkbox" class="form-check-input" checked> Keep me signed in </label>
                  </div>
                  <a href="#" class="text-small forgot-password text-black">Forgot Password</a>
                </div>
                <div class="form-group">
                  <button class="btn btn-block g-login">
                    <img class="mr-3" src="~@/assets/images/file-icons/icon-google.svg" alt="">Log in with Google</button>
                </div>
                <div class="text-block text-center my-3">
                  <span class="text-small font-weight-semibold">Not a member ?</span>
                  <router-link to="register" class="text-black text-small">Create new account</router-link>
                </div>
              </form>
            </div>
            <ul class="auth-footer">
              <li>
                <a href="#">Conditions</a>
              </li>
              <li>
                <a href="#">Help</a>
              </li>
              <li>
                <a href="#">Terms</a>
              </li>
            </ul>
            <p class="footer-text text-center">copyright &copy; {{ year }} turahe.id. All rights reserved.</p>
          </div>
        </div>
      </div>
      <!-- content-wrapper ends -->
    </div>
    <!-- page-body-wrapper ends -->
  </div>

</template>

<script lang="js">
// import axios from 'axios'

export default {
  name: 'Login',
  data () {
    return {
      form: {
        email: '',
        password: ''
      },
      errors: null,
      year: new Date().getFullYear()
    }
  },
  methods: {
    userLogin () {
      // axios.get()
      this.$router.push({ name: 'dashboard' })
      // this.$store.dispatch('https://api.github.com/users/turahe', this.form)
      //   .then(response => {
      //     console.log(response)
      //     this.$router.push({ name: 'dashboard' })
      //   }).catch(error => {
      //     this.errors = error.response.data.errors
      //   })
    }
  }
}
</script>

<style scoped lang="scss">
.login {

}
</style>
