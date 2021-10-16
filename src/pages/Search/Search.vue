<template>
  <div>
    <Header>
      <span slot="title">搜索</span>
    </Header>
    <div class="search">
      <input type="text" placeholder="请输入商家或美食名称"/>
      <button>提交</button>
    </div>
  </div>
</template>

<script>
import Header from '../../components/Header/Header'

export default {
  name: "Search",
  components: {
    Header
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.search
  padding 10px 0
  display flex
  justify-content space-around

  > input
    width: 80%
    background #f2f2f2
    height: 35px

  button
    background #02a774
    border 4px solid #02a774
    color white
    height 35px
    border-radius 5px

</style>