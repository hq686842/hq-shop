<template>
  <li>
    <a href="">
      <div class="shop-img">
        <img src="./imgs/bussiness/1.jpg" alt="">
      </div>
      <div class="item">
        <div class="item-top">
          <span>品牌</span>
          <h4>嘉禾一品(温都水城)</h4>
          <span>保准票</span>
        </div>
        <div class="item-middle">
          <ul class="stars">
            <li><img src="./imgs/star/star48_on@2x.png" alt=""></li>
            <li><img src="./imgs/star/star48_on@2x.png" alt=""></li>
            <li><img src="./imgs/star/star48_on@2x.png" alt=""></li>
            <li><img src="./imgs/star/star48_half@2x.png" alt=""></li>
            <li><img src="./imgs/star/star48_off@2x.png" alt=""></li>
          </ul>
          <div class="grade">
            <span class="score">3.6</span>
            <span>月售106单</span>
            <span class="logo">外卖专送</span>
          </div>
        </div>
        <div class="item-bottom">
          <span>￥20起送/配送费约￥5</span>
        </div>
      </div>
    </a>
  </li>
</template>

<script>
export default {
  name: "BussinessItem"
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.business-list > li
  padding 8px

.business-list a
  display flex

.shop-img > img
  width: 75px
  height: 75px
  border 1px solid gray

.item
  width: 100%
  display flex
  flex-direction column
  justify-content space-around

.item .item-top
  span:nth-child(1)
    margin 0 5px
    margin-top 2px
    background #ffd930
    font-weight bold
    color black
    font-size 11px
    float left

  > h4
    float left
    color black
    font-weight bold

  span:nth-child(3)
    color gray
    float right

.item .item-middle
  font-size 13px
  line-height 20px
  //.grade
  //  float left

  .logo
    display block
    font-size 10px
    color #42b983
    border 1px #42b983 solid
    float right

  .score
    color red
    padding 0 5px

.stars
  display flex
  float left

  img
    width: 15px
    height: 15px
    margin auto 0
    padding 1px

.item item-middle
  display flex
  justify-content space-around

.item .item-bottom
  font-size 14px
</style>