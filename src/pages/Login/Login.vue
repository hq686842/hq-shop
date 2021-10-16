<template>
  <div>
    <span class="back-icon">&lt;</span>
    <div class="login-content">
      <h1>硅谷外卖</h1>
      <div class="login-header-title">
        <span @click="changeStyle()" :class="{'light-word':!light}">短信登录</span>
        <span @click="changeStyle()" :class="{'light-word':light}">密码登录</span>
      </div>
      <form action="">
        <ul class="login-phone" v-show="!show">
          <li class="phone-number">
            <input type="tel" placeholder="手机号" maxlength="11">
            <button disabled="disabled">获取验证码</button>
          </li>
          <li><input type="tel" placeholder="验证码" maxlength="4"></li>
          <li class="note">温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意<a href="" class="user-agreement">《用户服务协议》</a></li>
        </ul>
        <ul class="login-phone" v-show="show">
          <li class="phone-number">
            <input type="tel" placeholder="手机/邮箱/用户名" maxlength="11">
          </li>
          <li class="password-btn">
            <input type="password" placeholder="密码" maxlength="4">
            <div class="switch-btn" @click="changeLoginBtn" :class="{'on':btn,'off':!btn}">
              <div class="switch-circle"></div>
              <span class="switch-text">...</span>
            </div>
          </li>
          <li class="verification-code">
            <input type="text" placeholder="验证码" maxlength="4">
            <img src="./imgs/captcha.svg" alt="验证码">
          </li>
        </ul>
      </form>
      <button class="login-btn">登录</button>
      <a class="about-us">关于我们</a>
    </div>

  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      show: true,
      light: false,
      btn:false
    }
  },
  methods: {
    changeStyle() {
      const {show, light} = this
      this.show = !show
      this.light = !light
    },
    changeLoginBtn(){
      console.log('jjj')
      const {btn} =this
      this.btn = !btn
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.back-icon
  font-size 30px
  color #cfcdcd

.login-content
  width: 80%
  margin 60px auto

  h1
    font-size 40px
    color #42b983
    font-weight bold
    text-align center

  .login-btn
    height: 42px
    background #4cd96f
    text-align center
    width: 100%
    border 0
    border-radius 4px
    color #fff
    margin-top 16px

  .about-us
    display block
    text-align center
    margin-top 20px
    color #999
    font-size 12px

.light-word
  color #02a774
  border-bottom 2px solid #02a774
  font-weight 700

.login-header-title
  span:first-child
    margin-right 40px

  padding-top 40px
  text-align center
  font-weight bold

  span
    padding-bottom 3px


.login-phone
  .phone-number
    position relative

    button
      color #ccc
      background #fff
      border 0
      padding 0
      top 50%
      transform translateY(-50%)
      right 10px
      position absolute
      font-size 14px

  .password-btn
    position relative
  .switch-btn
    width 30px
    height 16px
    position absolute
    top 50%
    //transform translateY(-50%)
    right 10px
    border 1px solid #ddd
    border-radius 8px
    transition background-color .3s,border-color .3s
    padding 0 6px
    line-height 16px
    color #fff
    &.on
      background #02a774
      >.switch-circle
        transform translateY(-50%) translateX(27px)
    .switch-circle
      position absolute
      border-radius 50%
      top 50%
      left 0px
      transform translateY(-50%)
      width 16px
      height 16px
      background #fff
      border: 1px solid #ddd;
      box-shadow 0 2px 4px 0 rgba(0,0,0,.1)
      transition transform  .3s

    .switch-text
      position absolute
      right 0
      top 50%
      vertical-align middle
      transform translateY(-50%)
      color #fff
  .note
    margin-top 16px
    color #999
    font-size 12px

    a
      color #42b983

  li
    margin-top 16px

    input
      border 1px solid #ddd
      border-radius 4px
      height 48px
      width: 100%
      padding-left 10px

    input:focus
      outline none
      border 1px solid #02a774
      box-shadow: 0 0 1px #02a774;

  .verification-code
    position relative

    img
      position absolute
      font-size 14px
      top 50%
      transform translateY(-50%)
      right 10px

</style>