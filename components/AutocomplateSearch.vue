<template lang='pug'>
  b-list-group.autocomplate-container(v-show="show")
    b-list-group-item.item(
      v-for="item, id in list" 
      :key='item.id' 
      @click="submit(item.title)" :class="{ focus: id === focus }"
    ) {{item.title}}
</template>

<script>
export default {
  props:{
    value:{
      type: String,
      default: null
    },
    searchQuery:{
      type: String,
      default: null
    },
    show:{
      type: Boolean,
      default: false
    }
  },
  data: ()=>({
    is_loading: false,
    list: [],
    focus: null
  }),
  computed:{
    movies(){
      return this.$store.getters['filter/GET_MOVIES']
    }
  },
  watch:{
    searchQuery(val){
      this.searchList(val)
    }
  },
  methods:{
    searchList: _.debounce( function(query){
      this.is_loading = true
      let list_helper = _.filter(this.movies, (i)=>{
        let re = new RegExp(query,"i");
        return i.title.match(re)
      });
      this.list = list_helper.slice(0, 10)
      this.is_loading = false
    }, 500 ),
    navigation(event){
      switch (event.keyCode) {
        case 38:
          if (this.focus === null) {
            this.focus = 0;
          } else if (this.focus > 0) {
            this.focus--;
          }
          break;
        case 40:
          if (this.focus === null) {
            this.focus = 0;
          } else if (this.focus < this.list.length - 1) {
            this.focus++;
          }
          break;
        case 13:
          if(this.focus !== null){
            this.submit(this.list[this.focus].title)
          }
          break;
      }
    },
    submit(value){
      this.$emit('input', value)
      this.$router.push({path: '/'})
    }
  }
}
</script>

<style lang='sass' scoped>
.autocomplate-container
  position: absolute
  top: 55px
  left: 0px
  width: 100%
  z-index: 100000
  background: #fff
  .item
    color: black
    &:hover
      cursor: pointer
      background: #f0f0f0
  .focus
    background: #038cfc
    color: #fff

</style>