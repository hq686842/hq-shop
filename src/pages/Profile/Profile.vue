<template>
  <div>
     <Header>
      <span slot="title">我的</span>
    </Header>
    <hr>
    <router-link to="/login">
      <div class="login">
        <span><i class="iconfont icon-wode2"></i></span>
        <div class="login-text">
          <h4>登录/注册</h4>
          <div class="phone">
            <i class="iconfont icon-shouji"></i>
            <span>暂无绑定手机号</span>
          </div>
        </div>
        <span class="login-arrow">></span>
      </div>
    </router-link>
    <a href="">

    </a>
    <div class="profile-data">
      <a href="" class="my-money">
        <span>0.00</span>
        <span>元</span><br>
        <span>我的余额</span>
      </a>
      <a href="" class="my-discount-card">
        <span>0</span>
        <span>个</span><br>
        <span>我的优惠</span>
      </a>
      <a href="" class="my-grade">
        <span>0</span>
        <span>分</span><br>
        <span>我的积分</span>
      </a>
    </div>
    <hr class="hr-order">
    <div class="my-order">
      <a href="">
        <i class="iconfont icon-6"></i>
        <div class="order-arrow">
          <span>我的订单</span>
          <span class="arrow">></span>
        </div>
      </a>
    </div>
    <hr class="hr-order-between">
    <div class="my-order">
      <a href="">
        <i class="iconfont icon-icon"></i>
        <div class="order-arrow">
          <span>积分商城</span>
          <span class="arrow">></span>
        </div>
      </a>
    </div>
    <hr class="hr-order-between">
    <div class="my-order">
      <a href="">
        <i class="iconfont icon-huiyuan"></i>
        <div class="order-arrow">
          <span>会员卡</span>
          <span class="arrow">></span>
        </div>
      </a>
    </div>
    <hr class="hr-order">
    <div class="my-order">
      <a href="">
        <i class="iconfont icon-fuwuzhongxin"></i>
        <div class="order-arrow">
          <span>服务中心</span>
          <span class="arrow">></span>
        </div>
      </a>
    </div>

  </div>
</template>

<script>
import Header from '../../components/Header/Header'

export default {
  name: "Profile",
  components:{
    Header
}
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
hr
  margin 0
  height: 1px
  border 0
  color white

.login
  padding 20px 10px
  background #02a774
  color white
  display flex
  position relative

  > span:nth-child(1)
    display block
    width: 65px
    height: 65px
    text-align center
    border-radius 50%
    overflow hidden

  > span > i
    line-height 65px
    font-size 65px
    background #e4e4e4

.login-text
  margin-left 15px
  display flex
  flex-direction column
  justify-content space-between

  h4
    font-weight bold
    font-size 17px

  .phone
    display table

    span
      display table-cell
      vertical-align middle

.login-arrow
  position absolute
  right 20px
  top 50%
  font-size 22px
  transform translateY(-50%)

.profile-data
  display flex
  justify-content space-around
  color black
  padding 15px

  .my-money
    text-align center

    span:first-child
      color #ff9900
      font-size 30px

  .my-discount-card
    text-align center

    span:first-child
      color #ff5f3e
      font-size 30px

  .my-grade
    text-align center

    span:first-child
      color #6ac20b
      font-size 30px


.hr-order
  border-top 10px #eae7e7 solid

.my-order
  height: 53px

  span
    color black

  a
    height 100%
    display flex
    align-items center

    i
      padding 0 10px

  .order-arrow
    width: 100%
    padding-right 15px
    display flex
    justify-content space-between

    .arrow
      color gray

.hr-order-between
  height 1px
  background #eae7e7
  border 0px

.icon-6, .icon-fuwuzhongxin
  color #02a774

.icon-icon
  color #ff5f3e

.icon-huiyuan
  color #f90
</style>