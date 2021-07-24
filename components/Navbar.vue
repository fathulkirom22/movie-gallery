<template lang='pug'>
  .nav.sticky-top
    b-container
      .d-md-flex.w-100.py-3
        nuxt-link.title(to="/") Movie
        .ml-auto
          b-form.position-relative(@submit.prevent="submit()")
            b-input.search(
              ref="inputSearch"
              v-model="search" 
              autocomplete="off"
              @blur="toggleCloseAutocomplateSearch" 
              @focus="toggleOpenAutocomplateSearch" 
              @keydown="navAutocomplate"
            )
            img.ic_search(src="~/assets/img/ic_search.png")
            autocomplate-search(
              ref="autocomplateSearch" 
              v-model="search" 
              :searchQuery="search" 
              :show="show_autocomplate_search"
            )
          
</template>

<script>
export default {
  data:()=>({
    show_autocomplate_search: false,
    selected: null
  }),
  computed:{
    search:{
      get(){
        return this.$store.getters['filter/GET_SEARCH']
      },
      set(val){
        this.$store.dispatch('filter/SET_SEARCH', val)
      }
    },
  },
  methods:{
    toggleOpenAutocomplateSearch:_.debounce( function(){
			this.show_autocomplate_search = true
		}, 500),
    toggleCloseAutocomplateSearch:_.debounce( function(){
			this.show_autocomplate_search = false
		}, 500),
    navAutocomplate(event){
			this.$refs.autocomplateSearch.navigation(event)
		},
    submit(){
      this.$refs.inputSearch.blur()
      this.$router.push({path:'/'})
    }
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
    text-decoration: none
    &:hover
      text-decoration: none
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