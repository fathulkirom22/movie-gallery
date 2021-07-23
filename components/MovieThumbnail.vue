<template lang='pug'>
  .movie-thumbnail(@click="gotoDetail()")
    .fill
      b-img-lazy.img(:src="movie.image")
    .movie-title.p-2 {{movie.title}}
</template>

<script>
export default {
  props:{
    movie:{
      type: Object,
      required: true
    }
  },
  methods:{
    gotoDetail(){
      this.$router.push({path: `/movie/${this.movie.id}`})
    }
  }
}
</script>

<style lang='sass' scoped>
.movie-thumbnail
  cursor: pointer
  width: 193px
  height: 355px
  background: #050E12
  border-radius: 6px
  .movie-title
    font-weight: bold
    font-size: 18px
    line-height: 22px
    color: #B6B6B6
  .fill
    display: flex
    justify-content: center
    align-items: center
    overflow: hidden
    height: 289px
    .img
      border-radius: 6px 6px 0 0
      object-fit: cover
      min-width: 100%
      min-height: 100%
      background: linear-gradient(-45deg, #ffffff, #f5f0f0, #968f8f, #f5f0f0, #ffffff)
      background-size: 300% 300%
      animation: load 1s ease infinite
@keyframes load 
  from
    background-position: 100% 100%
  to 
    background-position: 0% 0%

@media (max-width: 768px)
  .movie-thumbnail
    width: 150px
    height: 300px
    .movie-title
      font-size: 14px
    .fill
      height: 230px

</style>