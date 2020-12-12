<template lang="html">
  <nav class="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
    <div class="text-center navbar-brand-wrapper d-flex align-items-top justify-content-center">
      <router-link class="navbar-brand brand-logo" to="/">
        <img src="@/assets/images/logo.svg" alt="logo" /> </router-link>
      <router-link class="navbar-brand brand-logo-mini" to="/">
        <img src="@/assets/images/logo-mini.svg" alt="logo" /> </router-link>
    </div>
    <div class="navbar-menu-wrapper d-flex align-items-center">
      <button class="navbar-toggler navbar-toggler align-self-center" type="button" v-on:click="minimize">
        <span class="fa fa-th"></span>
      </button>
      <ul class="navbar-nav">
        <li class="nav-item font-weight-semibold d-none d-lg-block">Help : +050 2992 709</li>
        <li class="nav-item dropdown language-dropdown">
          <a class="nav-link dropdown-toggle px-2 d-flex align-items-center" id="LanguageDropdown" href="#" data-toggle="dropdown" aria-expanded="false">
            <div class="d-inline-flex mr-0 mr-md-3">
              <div class="flag-icon-holder">
                <flag-icon :iso="language.icon" :title="language.name"></flag-icon>
              </div>
            </div>
            <span class="profile-text font-weight-medium d-none d-md-block">{{ language.name }}</span>
          </a>
          <div class="dropdown-menu dropdown-menu-left navbar-dropdown py-2" aria-labelledby="LanguageDropdown">
            <a class="dropdown-item" v-for="lang in languages" :key="lang.icon">
              <div class="flag-icon-holder">
                <flag-icon :iso="lang.icon" :title="lang.name"></flag-icon>
              </div>
              {{ lang.name }}
            </a>
          </div>
        </li>
      </ul>
      <form class="ml-auto search-form d-none d-md-block" action="#">
        <div class="form-group">
          <input type="search" class="form-control" placeholder="Search Here">
        </div>
      </form>

      <ul class="navbar-nav ml-auto">
        <li class="nav-item dropdown">
          <a class="nav-link count-indicator" id="messageDropdown" href="#" data-toggle="dropdown" aria-expanded="false">
            <i class="fa fa-bell"></i>
            <span class="count">{{ notifications.length }}</span>
          </a>
          <div class="dropdown-menu dropdown-menu-right navbar-dropdown preview-list pb-0" aria-labelledby="messageDropdown">
            <router-link class="dropdown-item py-3" to="/">
              <p class="mb-0 font-weight-medium float-left">You have {{ notifications.length }} unread mails </p>
              <span class="badge badge-pill badge-primary float-right">View all</span>
            </router-link>
            <div class="dropdown-divider"></div>
            <router-link class="dropdown-item preview-item" v-for="item in notifications" :key="item.id" :to="item.url" >
              <div class="preview-thumbnail">
                <img :src="item.img" :alt="item.name" class="img-sm profile-pic">
              </div>
              <div class="preview-item-content flex-grow py-2">
                <p class="preview-subject ellipsis font-weight-medium text-dark">{{  item.name }} </p>
                <p class="font-weight-light small-text"> {{  item.message }} </p>
              </div>
            </router-link>
          </div>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link count-indicator" id="notificationDropdown" href="#" data-toggle="dropdown">
            <i class="fa fa-envelope"></i>
            <span class="count bg-success">3</span>
          </a>
          <div class="dropdown-menu dropdown-menu-right navbar-dropdown preview-list pb-0" aria-labelledby="notificationDropdown">
            <a class="dropdown-item py-3 border-bottom">
              <p class="mb-0 font-weight-medium float-left">You have 4 new notifications </p>
              <span class="badge badge-pill badge-primary float-right">View all</span>
            </a>
            <a class="dropdown-item preview-item py-3">
              <div class="preview-thumbnail">
                <i class="fa fa-exclamation m-auto text-primary"></i>
              </div>
              <div class="preview-item-content">
                <h6 class="preview-subject font-weight-normal text-dark mb-1">Application Error</h6>
                <p class="font-weight-light small-text mb-0"> Just now </p>
              </div>
            </a>
            <a class="dropdown-item preview-item py-3">
              <div class="preview-thumbnail">
                <i class="fa fa-wrench m-auto text-primary"></i>
              </div>
              <div class="preview-item-content">
                <h6 class="preview-subject font-weight-normal text-dark mb-1">Settings</h6>
                <p class="font-weight-light small-text mb-0"> Private message </p>
              </div>
            </a>
            <a class="dropdown-item preview-item py-3">
              <div class="preview-thumbnail">
                <i class="fa fa-bell m-auto text-primary"></i>
              </div>
              <div class="preview-item-content">
                <h6 class="preview-subject font-weight-normal text-dark mb-1">New user registration</h6>
                <p class="font-weight-light small-text mb-0"> 2 days ago </p>
              </div>
            </a>
          </div>
        </li>
        <li class="nav-item dropdown d-none d-xl-inline-block user-dropdown">
          <a class="nav-link dropdown-toggle" id="UserDropdown" href="#" data-toggle="dropdown" aria-expanded="false">
            <img class="img-xs rounded-circle" :src="user.avatar_url" alt="Profile image"> </a>
          <div class="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="UserDropdown">
            <div class="dropdown-header text-center">
              <img class="img-md rounded-circle" :src="user.avatar_url" alt="Profile image">
              <p class="mb-1 mt-3 font-weight-semibold">{{ user.name }}</p>
              <p class="font-weight-light text-muted mb-0">{{  user.email || 'admin@example.com' }}</p>
            </div>
            <router-link to="/general/user-profile" class="dropdown-item">My Profile
              <span class="badge badge-pill badge-danger">1</span>
              <i class="dropdown-item-icon fa fa-user-alt"></i>
            </router-link>
            <a class="dropdown-item">Messages<i class="dropdown-item-icon fa fa-comment"></i></a>
            <a class="dropdown-item">Activity<i class="dropdown-item-icon fa fa-marker"></i></a>
            <a class="dropdown-item">FAQ<i class="dropdown-item-icon fa fa-exchange-alt"></i></a>
            <router-link to="/login" class="dropdown-item">Sign Out
              <i class="dropdown-item-icon fa fa-sign-out-alt"></i>
            </router-link>
          </div>
        </li>
      </ul>
      <button class="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" v-on:click="toggleCanvas">
        <span class="fa fa-th-list"></span>
      </button>
    </div>
  </nav>
</template>

<script lang="js">
import axios from 'axios'
import FlagIcon from '@/components/icons/Flag'
// import Avatars from '@dicebear/avatars'
// import sprites from '@dicebear/avatars-male-sprites'

const body = document.querySelector('body')
const sidebar = document.getElementById('sidebar')
// const options = { w: 43, r: 50, base64: true }
// const avatars = new Avatars(sprites, options)

export default {
  name: 'app-header',
  components: {
    FlagIcon
  },
  data () {
    return {
      user: [],
      language: [
        { id: 1, icon: 'us', name: 'English' }
      ],
      languages: [
        { icon: 'us', name: 'English' },
        { icon: 'id', name: 'Indonesia' },
        { icon: 'ar', name: 'Arabic' }
      ],
      notifications: [
        { id: 1, img: 'https://avatars1.githubusercontent.com/u/6832622?v=4', url: '/', name: 'Mariah garner', message: 'The meeting canceled' },
        { id: 2, img: 'https://avatars1.githubusercontent.com/u/6832622?v=4', url: '/', name: 'David grey', message: 'The meeting canceled' },
        { id: 3, img: 'https://avatars1.githubusercontent.com/u/6832622?v=4', url: '/', name: 'Grey Full Buster', message: 'The meeting canceled' }
      ]
    }
  },
  mounted () {
    // add class 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    document.querySelectorAll('.sidebar .nav-item').forEach((el) => {
      el.addEventListener('mouseover', () => {
        if (body.classList.contains('sidebar-icon-only')) {
          el.classList.add('hover-open')
        }
      })
      el.addEventListener('mouseout', () => {
        if (body.classList.contains('sidebar-icon-only')) {
          el.classList.remove('hover-open')
        }
      })
    })
  },
  created () {
    this.getUser()
  },
  methods: {
    getUser () {
      axios.get('https://api.github.com/users/turahe')
        .then(response => {
          this.user = response.data
        }).catch(error => {
          console.log(error)
        })
    },
    toggleCanvas: function () {
      $('.sidebar-offcanvas').toggleClass('active')
      // const el = document.getElementsByClassName('.sidebar-offcanvas')
      // el.classList.toggle('active')
    },
    collapedSidebar: function () {
      body.classList.toggle('sidebar-icon-only')
    },
    collapedMobileSidebar: function () {
      sidebar.classList.toggle('active')
    },
    minimize: function () {
      if ((body.classList.contains('sidebar-toggle-display')) || (body.classList.contains('sidebar-absolute'))) {
        body.classList.toggle('sidebar-hidden')
      } else {
        body.classList.toggle('sidebar-icon-only')
      }
    }
  }
}
</script>

<style scoped lang="scss">
.app-header {
}
</style>
