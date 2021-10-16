<template>
  <div id="footer">
    <div class="iconfont-item"  @click="goHome('/home')" :class="{on:$route.path === '/home'}">
      <i class="iconfont icon-waimai"></i>
      <br>
      <span>外卖</span>
    </div>
    <div class="iconfont-item" @click="goSearch('/search')" :class="{on:$route.path === '/search'}">
      <i class="iconfont icon-sousuo"></i>
      <br>
      <span>搜索</span>
    </div>
    <span class="iconfont-item"  @click="goOrder('/order')" :class="{on:$route.path === '/order'}">
      <i class="iconfont icon-waimaidingdan2"></i>
      <br>
      <span>订单</span>
    </span>
    <span class="iconfont-item"  @click="goProfile('/profile')" :class="{on:$route.path === '/profile'}">
      <i class="iconfont icon-wode"></i>
      <br>
      <span>我的</span>
    </span>

  </div>
</template>

<script>
export default {
  name: "Footer",
  methods:{
    goHome(path){
      this.$router.replace(path)
    },
    goSearch(path){
      this.$router.replace(path)
    },
    goOrder(path){
      this.$router.replace(path)
    },
    goProfile(path){
      this.$router.replace(path)
    },
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#footer
  width: 100%;
  height 50px
  position fixed
  bottom 0
  display flex
  justify-content space-around
  padding 5px
  border-top 1px solid gainsboro

.iconfont-item
  color #999999
  margin-bottom 1px
  &.on
    color #02a774
.iconfont
  font-size 22px

</style>