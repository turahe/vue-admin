<template>
  <div class="right-sidebar-toggler-wrapper">
    <div class="sidebar-toggler" id="layout-toggler"><i class="fa fa-wrench"></i></div>
    <div class="sidebar-toggler" id="chat-toggler"><i class="fa fa-chart-pie"></i></div>
    <div class="sidebar-toggler">
      <a href="#" target="_blank"><i class="fa fa-dot-circle"></i></a></div>
    <div class="sidebar-toggler">
      <a href="#" target="_blank"><i class="fa fa-shopping-cart"></i></a></div>
  </div>
  <div class="theme-setting-wrapper">
    <div id="theme-settings" class="settings-panel">
      <i class="settings-close mdi mdi-close"></i>
      <div class="d-flex align-items-center justify-content-between border-bottom">
        <p class="settings-heading font-weight-bold border-top-0 mb-3 pl-3 pt-0 border-bottom-0 pb-0">Template Demos </p>
      </div>
      <div class="demo-screen-wrapper">
        <a href="#" class="demo-thumb-image" id="theme-light-switch">
          <img src="../../assets/images/screenshots/default.jpg" alt="demo image">
        </a>
        <a href="#" class="demo-thumb-image">
          <img src="../../assets/images/screenshots/default-two.jpg" alt="demo image">
        </a>
        <a href="#" class="demo-thumb-image" id="theme-dark-switch">
          <img src="../../assets/images/screenshots/default-dark.jpg" alt="demo image">
        </a>
        <a href="#" class="demo-thumb-image">
          <img src="../../assets/images/screenshots/analytics-dasboard.jpg" alt="demo image">
        </a>
        <a href="#" class="demo-thumb-image">
          <img src="../../assets/images/screenshots/Marketing-dashboard.jpg" alt="demo image">
        </a>
        <a href="#" class="demo-thumb-image">
          <img src="../../assets/images/screenshots/crm-dashboard.jpg" alt="demo image">
        </a>
        <a href="#" class="demo-thumb-image">
          <img src="../../assets/images/screenshots/modern-dashboard.jpg" alt="demo image">
        </a>
        <a href="#" class="demo-thumb-image">
          <img src="../../assets/images/screenshots/e-commerce_dashboard.jpg" alt="demo image">
        </a>
        <a href="#" class="demo-thumb-image">
          <img src="../../assets/images/screenshots/finance-dashboard.jpg" alt="demo image">
        </a>
        <a href="#" class="demo-thumb-image">
          <img src="../../assets/images/screenshots/classic-dashboard.jpg" alt="demo image">
        </a>
        <a href="#" class="demo-thumb-image">
          <img src="../../assets/images/screenshots/horizontal-screens.jpg" alt="demo image">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
// const ChartColor = ['#5D62B4', '#54C3BE', '#EF726F', '#F9C446', 'rgb(93.0, 98.0, 180.0)', '#21B7EC', '#04BCCC']
// const primaryColor = getComputedStyle(document.body).getPropertyValue('--primary')
// const secondaryColor = getComputedStyle(document.body).getPropertyValue('--secondary')
// const successColor = getComputedStyle(document.body).getPropertyValue('--success')
// const warningColor = getComputedStyle(document.body).getPropertyValue('--warning')
// const dangerColor = getComputedStyle(document.body).getPropertyValue('--danger')
// const infoColor = getComputedStyle(document.body).getPropertyValue('--info')
// const darkColor = getComputedStyle(document.body).getPropertyValue('--dark')
// const lightColor = getComputedStyle(document.body).getPropertyValue('--light')

export default {
  name: 'SettingPanel',
  mounted () {
    this.darkTheme()
  },
  methods: {
    darkTheme: function () {
      if ($('body').hasClass('dark-theme')) {
        // const chartFontcolor = '#b9c0d3'
        // const chartGridLineColor = '#383e5d'
      } else {
        // const chartFontcolor = '#6c757d'
        // const chartGridLineColor = 'rgba(0,0,0,0.08)'
      }
    },
    themeSetting: function () {
      $('#theme-settings').removeClass('open')
      $('#right-sidebar').toggleClass('open')
    },
    settingClose: function () {
      $('#right-sidebar,#theme-settings').removeClass('open')
    }

  }
}
</script>

<style lang="scss" scoped>

</style>
