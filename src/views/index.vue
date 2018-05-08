<template>
  <div  :style="{'height': tabPageHeight}">
      <wxc-tab-bar v-if="isShowFooter" :tab-titles="tabTitles" :tab-styles="tabStyles" title-type="icon"  @wxcTabBarCurrentTabSelected="wxcTabBarCurrentTabSelected" class="border-top">
          <!-- 第一个页面内容-->
          <div class="item-container" :style="contentStyle"><home></home></div>

          <!-- 第二个页面内容-->
          <div class="item-container" :style="contentStyle"><room></room></div>

          <!-- 第三个页面内容-->
          <div class="item-container" :style="contentStyle"><news></news></div>

          <!-- 第四个页面内容-->
          <div class="item-container" :style="contentStyle"><my></my></div>
      </wxc-tab-bar>
  </div>
</template>
<script>
    import { WxcTabBar, Utils } from 'weex-ui';
    import Home from './home.vue';
    import Room from './room.vue';
    import News from './news.vue';
    import My from './user/my.vue';
    import Config from "./../config/index"
    export default {
      name: 'App',
      data () {
        return {
          logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png',
          tabTitles: Config.tabTitles,
          tabStyles: Config.tabStyles,
          isShowFooter:true
        }
      },
      components: { WxcTabBar,Home,Room,News,My },
      created :function(){
          this.tabPageHeight = Utils.env.getPageHeight();
          this.contentStyle = { height: (this.tabPageHeight - this.tabStyles.height) + 'px' };
      },
      watch: {
        '$route' (to, from) {
            // 对路由变化作出响应...
            if(to.path  != "/"){
                this.isShowFooter = false
            }
          }
      },
      methods:{
          enterPage(url){
              this.jump(url)
          },
          wxcTabBarCurrentTabSelected (e) {
            const index = e.page;
          }
      }
    }
</script>

<style>
  @import url('./../common.css');
  .item-container {
    width: 750px;
    background-color: #fff;
    align-items: center;
    border-bottom-color: #c2c2c2;
    border-bottom-style: solid;
    border-bottom-width: 1px; 
  }
</style>
