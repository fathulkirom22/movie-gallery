<template lang='pug'>
  b-container.mt-5
    .d-md-flex.justify-content-between.align-items-center.mb-5
      .title Trending Movies
      div
        no-ssr
          b-datepicker(v-model="date" range)
    div {{date}}
    .d-flex.flex-wrap.justify-content-between
      MovieThumbnail.mb-4(v-for="movie in filtered_movies" :key="movie.id" :movie="movie")
</template>

<script>
export default {
  fetch(){
    this.$axios.get("movies")
      .then(res=>{
        this.movies = res.data
        this.filtered_movies = res.data
      })
  },
  data:()=>({
    date: [null, null],
    movies: [],
    filtered_movies: [],
  }),
  computed: {
    search(){
      return this.$store.getters['filter/GET_SEARCH']
    },
  },
  watch:{
    search(val){
      this.filterMovies()
    },
    date(val){
      this.filterMovies()
    }
  },
  methods:{
    filterMovies(){
      this.filtered_movies = _.filter(this.movies, (i)=>{
        let re = new RegExp(this.search,"i");
        return this.date[0] ? i.title.match(re) && new Date(i.showTime) >= new Date(this.date[0]) && new Date(i.showTime) <= new Date(this.date[1]) : i.title.match(re)
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
