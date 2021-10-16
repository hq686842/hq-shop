<template>
  <div>
    <Header>
      <span slot="title">订单列表</span>
    </Header>
    <div class="order">
      <img src="./imgs/person.png" alt="">
      <span>登录后查看外卖订单</span><br>
      <button>立即登录</button>
    </div>
  </div>
</template>

<script>
import Header from '../../components/Header/Header'

export default {
  name: "Order",
  components:{
    Header
  }

}
</script>

<style lang="stylus" rel="stylesheet/stylus">
//.header
//  width: 100%
//  height: 45px
//  background #02a774
//  display flex
//  justify-content space-around
//  align-items center
//  color white
.order
  width: 300px
  margin 50px auto
  text-align center
  button
    border-radius 5px
    font-size 14px
    margin-top 5px
    background #02a774
    height: 40px
    border 0

</style>