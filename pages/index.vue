<template lang='pug'>
  b-container.mt-5
    .d-md-flex.justify-content-between.align-items-center.mb-5
      .title Trending Movies
      div
        no-ssr
          b-datepicker(v-model="date" placeholder="Filter date" range)
    .d-flex.flex-wrap.justify-content-between
      MovieThumbnail.mb-4(v-for="movie in filtered_movies" :key="movie.id" :movie="movie")
</template>

<script>
export default {
  fetch(){
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      this.$axios.get("movies")
        .then(res=>{
          this.movies = res.data
          this.filterMovies()
          this.$nuxt.$loading.finish()
        })
    })
  },
  data:()=>({}),
  computed: {
    movies:{
      get(){
        return this.$store.getters['filter/GET_MOVIES']
      },
      set(val){
        this.$store.dispatch('filter/SET_MOVIES', val)
      }
    },
    filtered_movies:{
      get(){
        return this.$store.getters['filter/GET_FILTERED_MOVIES']
      },
      set(val){
        this.$store.dispatch('filter/SET_FILTERED_MOVIES', val)
      }
    },
    date:{
      get(){
        return this.$store.getters['filter/GET_DATE']
      },
      set(val){
        this.$store.dispatch('filter/SET_DATE', val)
      }
    },
    search(){
      return this.$store.getters['filter/GET_SEARCH']
    },
  },
  watch:{
    search(val){
      console.log('change filter search')
      this.filterMovies()
    },
    date(val){
      console.log('change filter date')
      this.filterMovies()
    }
  },
  methods:{
    filterMovies(){
      let filter_helper;
      filter_helper = this.filterSearchMovies(this.movies)
      filter_helper = this.filterDateMovies(filter_helper)
      this.filtered_movies = filter_helper
    },
    filterSearchMovies(movies){
      return _.filter(movies, (i)=>{
        let re = new RegExp(this.search,"i");
        return this.search ? i.title.match(re) : movies
      });
    },
    filterDateMovies(movies){
      return _.filter(movies, (i)=>{
        return this.date[0] && this.date[1] ? new Date(i.showTime) >= new Date(this.date[0]) && new Date(i.showTime) <= new Date(this.date[1]) : movies
      });
    }
  }
}
</script>

<style lang='sass' scoped>
.title
  font-weight: bold
  font-size: 48px
  line-height: 58px
  color: #FFFFFF
</style>
