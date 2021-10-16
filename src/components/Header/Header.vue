<template>
  <div>
    <div class="header">
      <div>
        <slot name="search-icon"></slot>
      </div>
      <div class="location">
        <slot name="title"></slot>
      </div>
      <div>
          <slot name="login"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.header
  width: 100%
  height: 45px
  background #02a774
  display flex
  justify-content space-around
  align-items center
  color white
.location
  width: 50%
  overflow hidden
  text-overflow ellipsis
  white-space nowrap
  text-align center
  span
    font-size 20px
</style>