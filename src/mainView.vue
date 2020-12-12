<template>
    <div class="container-scroller">
      <app-header/>
      <div class="container-fluid page-body-wrapper">
        <setting-panel></setting-panel>
        <app-sidebar/>
        <div class="main-panel">
          <div class="content-wrapper">
            <router-view></router-view>
          </div>
          <!-- content wrapper ends -->
          <app-footer/>
        </div>
        <!-- main panel ends -->
      </div>
      <!-- page-body-wrapper ends -->
    </div>
</template>

<script>
import AppHeader from '@/components/partials/AppHeader'
import AppSidebar from '@/components/partials/AppSidebar'
import AppFooter from '@/components/partials/AppFooter'
import SettingPanel from '@/components/partials/SettingPanel'
export default {
  name: 'mainView',
  components: {
    SettingPanel,
    AppHeader,
    AppSidebar,
    AppFooter
  }
}
</script>

<style scoped>

</style>
