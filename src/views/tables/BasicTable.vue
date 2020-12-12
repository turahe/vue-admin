<template lang="html">

  <div class="row">
    <div class="col-lg-6 grid-margin stretch-card">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Basic Table</h4>
          <p class="card-description"> Add class <code>.table</code> </p>
          <table class="table">
            <thead>
            <tr>
              <th>Profile</th>
              <th>VatNo.</th>
              <th>Created</th>
              <th>Status</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="user in users" :key="user.id">
              <td>{{ user.login }}</td>
              <td>{{ user.node }}</td>
              <td>12 May 2017</td>
              <td>
                <label class="badge badge-danger">Pending</label>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="col-lg-6 grid-margin stretch-card">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Hoverable Table</h4>
          <p class="card-description"> Add class <code>.table-hover</code> </p>
          <table class="table table-hover">
            <thead>
            <tr>
              <th>User</th>
              <th>Product</th>
              <th>Sale</th>
              <th>Status</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="user in users" :key="user.id">
              <td>{{ user.login }}</td>
              <td>Photoshop</td>
              <td class="text-danger"> 28.76% <i class="mdi mdi-arrow-down"></i>
              </td>
              <td>
                <label class="badge badge-danger">Pending</label>
              </td>
            </tr>
            <tr>
              <td>Messsy</td>
              <td>Flash</td>
              <td class="text-danger"> 21.06% <i class="mdi mdi-arrow-down"></i>
              </td>
              <td>
                <label class="badge badge-warning">In progress</label>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="col-lg-12 grid-margin stretch-card">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Striped Table</h4>
          <p class="card-description"> Add class <code>.table-striped</code> </p>
          <table class="table table-striped">
            <thead>
            <tr>
              <th> User </th>
              <th> First name </th>
              <th> Progress </th>
              <th> Amount </th>
              <th> Deadline </th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="user in users" :key="user.id">
              <td class="py-1">
                <img :src="user.avatar_url" alt="image" />
              </td>
              <td> {{ user.login }} </td>
              <td>
                <div class="progress">
                  <div class="progress-bar bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </td>
              <td> $ 77.99 </td>
              <td> May 15, 2015 </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="col-lg-12 grid-margin stretch-card">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Bordered table</h4>
          <p class="card-description"> Add class <code>.table-bordered</code> </p>
          <table class="table table-bordered">
            <thead>
            <tr>
              <th> # </th>
              <th> First name </th>
              <th> Progress </th>
              <th> Amount </th>
              <th> Deadline </th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(user, index) in users" :key="user.id">
              <td> {{ index }} </td>
              <td> {{ user.login }} </td>
              <td>
                <div class="progress">
                  <div class="progress-bar bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </td>
              <td> $ 77.99 </td>
              <td> May 15, 2015 </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="col-lg-12 grid-margin stretch-card">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Inverse table</h4>
          <p class="card-description"> Add class <code>.table-dark</code> </p>
          <table class="table table-dark">
            <thead>
            <tr>
              <th> # </th>
              <th> First name </th>
              <th> Amount </th>
              <th> Deadline </th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(user, index) in users" :key="user.id">
              <td> {{ index }} </td>
              <td> {{  user.login }} </td>
              <td> $ 77.99 </td>
              <td> May 15, 2015 </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="col-lg-12 stretch-card">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Table with contextual classes</h4>
          <p class="card-description"> Add class <code>.table-{color}</code> </p>
          <table class="table table-bordered">
            <thead>
            <tr>
              <th> # </th>
              <th> First name </th>
              <th> Product </th>
              <th> Amount </th>
              <th> Deadline </th>
            </tr>
            </thead>
            <tbody>
            <tr class="table-info" v-for="(user, index) in users" :key="user.id">
              <td> {{ index }} </td>
              <td> {{ user.login }} </td>
              <td> Photoshop </td>
              <td> $ 77.99 </td>
              <td> May 15, 2015 </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

</template>

<script lang="js">
import axios from 'axios'

export default {
  name: 'BasicTable',
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

<style scoped lang="scss">
.tables {
}
</style>
