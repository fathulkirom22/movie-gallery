<template lang='pug'>
  .nav.sticky-top
    b-container
      .d-md-flex.w-100.py-3
        nuxt-link.title(to="/") Movie
        .ml-auto
          .position-relative
            b-input.search(v-model="search")
            img.ic_search(src="~/assets/img/ic_search.png")
</template>

<script>
export default {
  computed:{
    search:{
      get(){
        return this.$store.getters['filter/GET_SEARCH']
      },
      set(val){
        this.$store.dispatch('filter/SET_SEARCH', val)
      }
    },
  }
}
</script>

<style lang='sass' scoped>
.nav
  background: #1A1F38
  .title
    font-weight: bold
    font-size: 48px
    line-height: 58px
    color: #FFFFFF
  .search
    min-width: 300px
    height: 58px
    background: rgba(196, 196, 196, 0.3)
    border-radius: 8px
    color: #FFFFFF
  .ic_search
    position: absolute
    top: 5px
    right: 0
</style>