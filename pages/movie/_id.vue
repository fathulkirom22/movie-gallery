<template lang='pug'>
  b-container.mt-5
    b-row.mb-5
      b-col(cols=12 md=3)
        .fill-thumbnail.mb-4
          b-img-lazy.img(:src="movie.image")
      b-col(cols=12 md=9)
        .title.mb-3 {{movie.title}}
        .like.mb-3.d-flex.align-items-center
          img.mr-2(src="~/assets/img/ic_like.png")
          | {{movie.like}}
        .like.mb-3.d-flex.align-items-center
          img.mr-2(src="~/assets/img/ic_eye.png")
          | {{new Date(movie.showTime).toLocaleString('id')}}
        .overview.mb-2 
          b Overview
        .overview Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        //- div {{movie}}
</template>

<script>
export default {
  fetch(){
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      this.$axios.get(`movies/${this.$route.params.id}`)
        .then(res=>{
          this.movie = res.data
          this.$nuxt.$loading.finish()
        })
    })
  },
  data:()=>({
    movie: {}
  })
}
</script>

<style lang='sass' scoped>
  .fill-thumbnail
    display: flex
    justify-content: center
    align-items: center
    overflow: hidden
    width: 240px
    height: 355px
    .img
      object-fit: cover
      min-width: 100%
      min-height: 100%
      background: linear-gradient(-45deg, #ffffff, #f5f0f0, #968f8f, #f5f0f0, #ffffff)
      background-size: 300% 300%
      animation: load 1s ease infinite
  .title
    font-weight: 600
    font-size: 32px
    line-height: 42px
    color: #EDEDED
  .like
    font-size: 16px
    line-height: 18px
    color: #FFFFFF
    img
      width: 22px
  .overview
    font-size: 14px
    line-height: 16px
    color: #FFFFFF
@keyframes load 
  from
    background-position: 100% 100%
  to 
    background-position: 0% 0%

@media (max-width: 768px)
  .title
    font-size: 24px
</style>