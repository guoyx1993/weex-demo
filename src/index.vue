<template>
  <div>
        <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App',
  data () {
    return {
      logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png'
    }
  },
  created(){
  	//解决手机预览空白问题;;;
  	this.$router.push("/");
  }
}
</script>
<style scoped>
</style>
