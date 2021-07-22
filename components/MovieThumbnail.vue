<template lang='pug'>
  .movie-thumbnail(@click="gotoDetail()")
    .fill
      img(:src="movie.image")
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
    img
      border-radius: 6px 6px 0 0
      object-fit: cover
      min-width: 100%
      min-height: 100%
</style>