<template>
  <nav class="sidebar sidebar-offcanvas" id="sidebar">
    <ul class="nav">
      <li class="nav-item nav-category">Main Menu</li>
      <li class="nav-item">
        <router-link class="nav-link" to="/dashboard">
          <i class="menu-icon fa fa-wrench"></i>
          <span class="menu-title">Dashboard</span>
        </router-link>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-toggle="collapse" href="#apps-dropdown" aria-expanded="false" aria-controls="apps-dropdown">
          <i class="menu-icon fa fa-app-store"></i>
          <span class="menu-title">Apps</span>
          <i class="menu-arrow"></i>
        </a>
        <div class="collapse" id="apps-dropdown">
          <ul class="nav flex-column sub-menu">
            <li class="nav-item">
              <a class="nav-link" href="">Kanban Board</a>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="mails">E-mail</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">Calendar</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">Todo List</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">Gallery</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">Tickets</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">Chat</a>
            </li>
          </ul>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
          <i class="menu-icon fa fa-coffee"></i>
          <span class="menu-title">Basic UI Elements</span>
          <i class="menu-arrow"></i>
        </a>
        <div class="collapse" id="ui-basic">
          <ul class="nav flex-column sub-menu">
            <li class="nav-item">
              <router-link class="nav-link" to="/basic-ui/buttons">Buttons</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/basic-ui/dropdown">Dropdowns</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/basic-ui/typography">Typography</router-link>
            </li>
          </ul>
        </div>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/">
          <i class="menu-icon fa fa-shopping-bag"></i>
          <span class="menu-title">Form elements</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="charts/chartjs">
          <i class="menu-icon fa fa-chart-bar"></i>
          <span class="menu-title">Charts</span>
        </router-link>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-toggle="collapse" href="#ui-tables" aria-expanded="false" aria-controls="ui-tables">
          <i class="menu-icon fa fa-coffee"></i>
          <span class="menu-title">Tables</span>
          <i class="menu-arrow"></i>
        </a>
        <div class="collapse" id="ui-tables">
          <ul class="nav flex-column sub-menu">
            <li class="nav-item">
              <router-link class="nav-link" to="/tables/basic-table"> Basic Tables</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/tables/datatables">Datatables</router-link>
            </li>
          </ul>
        </div>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/">
          <i class="menu-icon fa fa-icons"></i>
          <span class="menu-title">Icons</span>
        </router-link>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-toggle="collapse" href="#auth" aria-expanded="false" aria-controls="auth">
          <i class="menu-icon typcn fa fa-user"></i>
          <span class="menu-title">User Pages</span>
          <i class="menu-arrow"></i>
        </a>
        <div class="collapse" id="auth">
          <ul class="nav flex-column sub-menu">
            <li class="nav-item">
              <router-link class="nav-link" to="/"> Blank Page</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/login"> Login</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/register"> Register</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/"> 404</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/"> 500</router-link>
            </li>
          </ul>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-toggle="collapse" href="#general-pages" aria-expanded="false" aria-controls="general-pages">
          <i class="menu-icon typcn fa fa-user"></i>
          <span class="menu-title">User Pages</span>
          <i class="menu-arrow"></i>
        </a>
        <div class="collapse" id="general-pages">
          <ul class="nav flex-column sub-menu">
            <li class="nav-item">
              <router-link class="nav-link" to="/general/users-listing"> Users listing</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/general/user-profile"> Profile</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/"> Register</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/"> 404</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/"> 500</router-link>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script lang="js">
export default {
  name: 'app-sidebar',
  mounted () {
    const body = document.querySelector('body')
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
  }
}
</script>

<style scoped lang="scss">
.app-sidebar {
}
</style>
