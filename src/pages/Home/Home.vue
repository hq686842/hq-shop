<template>
  <div>
    <Header>
      <span slot="search-icon"><i class="iconfont icon-sousuo1"></i></span>
      <span slot="title">昌平区北七家宏福科技园(337省道北)</span>
      <span slot="login">登录|注册</span>
    </Header>
    <!--导航区-->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <ul class="swiper-slide">
          <li>
            <a>
              <img src="./imgs/nav/甜品饮料.jpeg" alt="甜品饮料"><br>
              <span>甜品饮料</span>
            </a>
          </li>
          <li>
            <a>
              <img src="./imgs/nav/超市便利.jpeg" alt="超市便利"><br>
              <span>超市便利</span>
            </a>
          </li>
          <li>
            <a>
              <img src="./imgs/nav/美食.jpeg" alt="美食"><br>
              <span>美食</span>
            </a>
          </li>
          <li>
            <a>
              <img src="./imgs/nav/简餐.jpeg" alt="简餐"><br>
              <span>简餐</span>
            </a>
          </li>
          <li>
            <a>
              <img src="./imgs/nav/新店特惠.jpeg" alt="新店特惠"><br>
              <span>新店特惠</span>
            </a>
          </li>
          <li>
            <a>
              <img src="./imgs/nav/准时达.jpeg" alt="准时达"><br>
              <span>准时达</span>
            </a>
          </li>
          <li>
            <a>
              <img src="./imgs/nav/预定早餐.jpeg" alt="预定早餐"><br>
              <span>预定早餐</span>
            </a>
          </li>
          <li>
            <a>
              <img src="./imgs/nav/土豪推荐.jpeg" alt="土豪推荐"><br>
              <span>土豪推荐</span>
            </a>
          </li>
        </ul>
        <ul class="swiper-slide">
          <li>
            <a>
              <img src="./imgs/nav/甜品饮料.jpeg" alt="甜品饮料"><br>
              <span>甜品饮料</span>
            </a>
          </li>
          <li>
            <a>
              <img src="./imgs/nav/超市便利.jpeg" alt="超市便利"><br>
              <span>超市便利</span>
            </a>
          </li>
          <li>
            <a>
              <img src="./imgs/nav/美食.jpeg" alt="美食"><br>
              <span>美食</span>
            </a>
          </li>
          <li>
            <a>
              <img src="./imgs/nav/简餐.jpeg" alt="简餐"><br>
              <span>简餐</span>
            </a>
          </li>
          <li>
            <a>
              <img src="./imgs/nav/新店特惠.jpeg" alt="新店特惠"><br>
              <span>新店特惠</span>
            </a>
          </li>
          <li>
            <a>
              <img src="./imgs/nav/准时达.jpeg" alt="准时达"><br>
              <span>准时达</span>
            </a>
          </li>
          <li>
            <a>
              <img src="./imgs/nav/预定早餐.jpeg" alt="预定早餐"><br>
              <span>预定早餐</span>
            </a>
          </li>
          <li>
            <a>
              <img src="./imgs/nav/土豪推荐.jpeg" alt="土豪推荐"><br>
              <span>土豪推荐</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="swiper-pagination nav-pagination"></div>
    </div>

    <!--附近商家-->
    <div class="business-header">
          <span>
            <i class="iconfont icon-taitoucaidanxiang"></i>
          </span>
      <span>附近商家</span>
    </div>
    <ul class="business-list">
      <BusinessItem />
    </ul>
  </div>

</template>

<script>
import Header from '../../components/Header/Header'
import BusinessItem from "../../components/BussinessItem/BussinessItem"

import 'swiper/swiper-bundle.min.css'
import Swiper from 'swiper'
import SwiperCore, {Navigation, Pagination} from 'swiper/core';

SwiperCore.use([Navigation, Pagination]);
export default {
  name: "Home",
  components: {
    Header,BusinessItem
  },
  mounted() {
    new Swiper('.swiper-container', {
      loop: true, // 循环模式选项
      pagination: {
        el: '.swiper-pagination',
      },
    })
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

.swiper-container
.swiper-wrapper
  height: 200px
.swiper-slide
  display flex
  flex-wrap wrap
  justify-content center
  align-content space-evenly

  li
    width: 25%;
    text-align center

  img
    width: 50px
    height: 50px

.business-header > span, i
  line-height 30px
  vertical-align top

</style>