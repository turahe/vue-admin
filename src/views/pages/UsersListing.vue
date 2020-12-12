<template>
  <div class="row">
    <div class="col-md-12">
      <div class="card">
        <div class="card-body">
          <div class="d-flex mb-4">
            <h5 class="mr-2 font-weight-semibold border-right pr-2 mr-2">Users</h5>
            <h5 class="font-weight-semibold" v-if="users">{{  users.length }}</h5>
          </div>
          <div class="row">
            <div class="col-md-12 mb-5" v-for="user in users" :key="user.id">
              <div class="card rounded shadow-none">
                <div class="card-body">
                  <div class="row">
                    <div class="col-md-4 d-flex">
                      <div class="user-avatar mb-auto">
                        <img :src="user.avatar_url" alt="profile image" class="profile-img img-lg rounded-circle">
                        <span class="edit-avatar-icon"><i class="fa fa-camera"></i></span>
                      </div>
                      <div class="wrapper pl-4">
                        <div class="wrapper d-flex align-items-center">
                          <h4 class="mb-0 font-weight-medium">{{  user.login }}</h4>
                          <div class="badge badge-secondary text-dark mt-2 ml-2">Pro</div>
                        </div>
                        <div class="wrapper d-flex align-items-center font-weight-medium text-muted">
                          <i class="fa fa-marker mr-2"></i>
                          <p class="mb-0 text-muted">San Francisco, California</p>
                        </div>
                        <div class="wrapper d-flex align-items-start pt-3">
                          <div class="badge badge-secondary text-dark mr-2">
                            <i class="fa fa-check fa-1x"></i>
                          </div>
                          <div class="badge badge-secondary text-dark mr-2">
                            <i class="fa fa-envelope fa-1x"></i>
                          </div>
                          <div class="badge badge-secondary text-dark mr-2">
                            <i class="fa fa-list fa-1x"></i>
                          </div>
                          <div class="wrapper pl-2">
                            <h6 class="mt-n1 mb-0 font-weight-medium">23455</h6>
                            <p class="text-muted">Viewers</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-5">
                      <div class="d-flex align-items-center w-100">
                        <p class="mb-0 mr-3 font-weight-semibold">Progress</p>
                        <div class="progress progress-md w-100">
                          <div class="progress-bar bg-success" role="progressbar" style="width: 67%" aria-valuenow="67" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <p class="mb-0 ml-3 font-weight-semibold">67%</p>
                      </div>
                      <p class="text-muted mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div class="col-md-3">
                      <div class="wrapper d-flex justify-content-end">
                        <button type="button" class="btn btn-sm btn-inverse-primary mr-2">ASK</button>
                        <button type="button" class="btn btn-sm btn-info">HIRE</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="wrapper border-top">
                  <div class="card-body">
                    <div class="row">
                      <div class="col d-flex">
                        <div class="d-inline-flex align-items-center justify-content-center border rounded-circle px-2 py-2 my-auto text-muted">
                          <i class="fa fa-traffic-light fa-1x my-0 mx-1"></i>
                        </div>
                        <div class="wrapper pl-3">
                          <p class="mb-0 font-weight-medium text-muted">TOTAL TRAFFIC</p>
                          <h4 class="font-weight-semibold mb-0">350,897</h4>
                        </div>
                      </div>
                      <div class="col d-flex">
                        <div class="d-inline-flex align-items-center justify-content-center border rounded-circle px-2 py-2 my-auto text-muted">
                          <i class="fa fa-user-plus fa-1x my-0 mx-1"></i>
                        </div>
                        <div class="wrapper pl-3">
                          <p class="mb-0 font-weight-medium text-muted">NEW USERS</p>
                          <h4 class="font-weight-semibold mb-0">2,356</h4>
                        </div>
                      </div>
                      <div class="col d-flex">
                        <div class="d-inline-flex align-items-center justify-content-center border rounded-circle px-2 py-2 my-auto text-muted">
                          <i class="fa fa-server fa-1x my-0 mx-1"></i>
                        </div>
                        <div class="wrapper pl-3">
                          <p class="mb-0 font-weight-medium text-muted">SALES</p>
                          <h4 class="font-weight-semibold mb-0">927</h4>
                        </div>
                      </div>
                      <div class="col d-flex">
                        <div class="d-inline-flex align-items-center justify-content-center border rounded-circle px-2 py-2 my-auto text-muted">
                          <i class="fa fa-chart-pie fa-1x my-0 mx-1"></i>
                        </div>
                        <div class="wrapper pl-3">
                          <p class="mb-0 font-weight-medium text-muted">PERFORMANCE</p>
                          <h4 class="font-weight-semibold mb-0 text-primary">49.65%</h4>
                        </div>
                      </div>
                      <div class="col d-flex align-items-center">
                        <div class="image-grouped ml-auto">
                          <img src="@/assets/images/faces/face20.jpg" data-toggle="tooltip" data-placement="top" title="Mary Sharp" alt="profile image">
                          <img src="@/assets/images/faces/face17.jpg" data-toggle="tooltip" data-placement="top" title="Cory Medina" alt="profile image">
                          <img src="@/assets/images/faces/face14.jpg" data-toggle="tooltip" data-placement="top" title="Clyde Hammond" alt="profile image">
                          <div class="text-avatar" data-toggle="tooltip" data-placement="top" title="4 More Peoples">+4</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'UsersListing',
  data () {
    return {
      users: null
    }
  },
  created () {
    this.getUsers()
  },
  methods: {
    getUsers () {
      axios.get('https://api.github.com/users')
        .then(response => {
          console.log(response)
          this.users = response.data
        }).catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>

</style>
