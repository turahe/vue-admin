<template>

</template>

<script>
export default {
  name: 'TableDatatable',
  props: {
    title: {
      type: String,
      default: 'Delete Modal'
    },
    editUrl: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      sortBy: null,
      sortDesc: null,
      deleteModal: false,
      selected: null
    }
  },
  methods: {
    openDeleteModal (row) {
      this.deleteModal = false
      this.selected = row.item
    },
    deleteModalButton () {
      this.$emit('delete', this.selected)
      this.deleteModal = false
    }
  }
}
</script>

<style scoped>

</style>
