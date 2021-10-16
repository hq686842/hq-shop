<template>
  <div>
    <router-view></router-view>
    <Footer/>
    <Test/>
  </div>
</template>

<script>
import Footer from './components/Footer/Footer'
import Test from "./pages/Test";

export default {
  name: 'App',
  components: {
    Footer,Test
  }
}
</script>

<style>

</style>
