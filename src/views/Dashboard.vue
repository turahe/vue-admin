<template>
  <page-title></page-title>
  <page-title-header></page-title-header>
  <statistic-one></statistic-one>
  <statistic-two></statistic-two>
</template>

<script lang="js">

import PageTitle from '@/views/dashboard/PageTitle'
import PageTitleHeader from '@/views/dashboard/PageTitleHeader'
import StatisticOne from '@/views/dashboard/StatisticOne'
import StatisticTwo from '@/views/dashboard/StatisticTwo'
export default {
  name: 'Dashboard',
  components: { StatisticTwo, StatisticOne, PageTitleHeader, PageTitle },
  methods: {
    toggleProBanner: function () {
      $('body').toggleClass('pro-banner-collapse')
    }
  }
}
</script>

<style scoped lang='scss'>
</style>
