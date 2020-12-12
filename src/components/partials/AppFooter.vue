<template>
  <section class="app-footer">
    <footer class="footer">
      <div class="container-fluid clearfix">
        <span class="text-muted float-left text-sm-left d-block d-sm-inline-block">
          Copyright &copy; <router-link to="https://www.turahe.id/" target="_blank">turahe.id </router-link>
          {{ year }}</span>
      </div>
    </footer>
  </section>

</template>

<script lang="js">

export default {
  name: 'app-footer',
  data () {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>

<style scoped lang="scss">
.app-footer {

}

</style>
