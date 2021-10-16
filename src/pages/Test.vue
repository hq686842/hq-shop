<template>
  <div>
    test
  </div>
</template>

<script>
import {reqLocation} from '../api/index'
import ajax from "../api/ajax";

export default {
  name: "Test",
  async mounted() {
    // const result = await reqLocation('40.10038,116.36867')
    // console.log(result)
    const result = await ajax('http://localhost:8080/api/position/40.10038,116.36867')
    console.log(result)
  }

}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>