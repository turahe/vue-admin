<template>
  <div class="row">
    <div class="col-md-12 grid-margin">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Default Responsive Table</h4>
          <div class="table-responsive">
            <table id="order-listing" class="table">
              <thead>
              <tr>
                <th>Order #</th>
                <th>Purchased On</th>
                <th>Customer</th>
                <th>Purchased Price</th>
                <th>Status</th>
                <th>Managed By</th>
                <th>Actions</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(user, index) in users" :key="user.id">
                <td>{{ index + 1 }}</td>
                <td>2012/08/03</td>
                <td>Edinburgh</td>
                <td>$3200</td>
                <td>
                  <label class="badge badge-inverse-info">On hold</label>
                </td>
                <td>
                  <div class="d-flex align-items-center">
                    <img class="img-xs rounded-circle" :src="user.avatar_url" alt="profile image">
                    <div class="wrapper pl-2">
                      <p class="mb-0 text-gray">{{  user.login }}</p>
                      <small class="mb-0 text-muted">{{ user.type }}</small>
                    </div>
                  </div>
                </td>
                <td>
                  <a :href="editUrl" v-if="editUrl" class="btn btn-outline-warning">Edit</a>
                  <button class="btn btn-outline-primary" @click="openModal(row)">View</button>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-12 grid-margin">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Fixed Column Table</h4>
          <div class="table-responsive">
            <table id="fixed-column" class="table">
              <thead>
              <tr>
                <th>
                  <div class="form-check">
                    <label class="form-check-label">
                      <input type="checkbox" class="form-check-input"><i class="input-helper"></i></label>
                  </div>
                </th>
                <th>Order #</th>
                <th>Purchased On</th>
                <th>Customer</th>
                <th>Purchased Price</th>
                <th>Status</th>
                <th>Managed By</th>
                <th>Actions</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(user, index) in users" :key="user.id">
                <td>
                  <div class="form-check">
                    <label class="form-check-label">
                      <input type="checkbox" class="form-check-input"><i class="input-helper"></i></label>
                  </div>
                </td>
                <td>{{ index + 1 }}</td>
                <td>2012/08/03</td>
                <td>Edinburgh</td>
                <td>$3200</td>
                <td>
                  <label class="badge badge-inverse-info">On hold</label>
                </td>
                <td>
                  <div class="d-flex align-items-center">
                    <img class="img-xs rounded-circle" :src="user.avatar_url" :alt="user.login">
                    <div class="wrapper pl-2">
                      <p class="mb-0 text-gray">{{ user.login }}</p>
                      <small class="mb-0 text-muted">{{ user.type }}</small>
                    </div>
                  </div>
                </td>
                <td>
                  <button class="btn btn-outline-primary">View</button>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Datatable',
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
