<template>
  <div class="container">
      <wxc-minibar :title="title"
         :background-color="bgColor"
         :text-color="color"
         :right-text="rightText"
         @wxcMinibarLeftButtonClicked="minibarLeftButtonClick"
         @wxcMinibarRightButtonClicked="minibarRightButtonClick">   
      </wxc-minibar>
  </div>
</template>
<script>
  import { WxcMinibar } from 'weex-ui';
  export default {
    components: { WxcMinibar },
    props:{
        title:{
            type: String,
            default :'桃宝宝'
        },
        bgColor:{
           type : String,
           default:'#ffffff'
        },
        color : {
            type : String,
            default :'#f59800'
        },
        rightText:{
          type:String,
          default :''
        }
    },
    methods: {
        minibarLeftButtonClick () {
        },
        minibarRightButtonClick () {
          this.modal.toast({ 'message': 'click rightButton!', 'duration': 1 });
        }
    }
  };
</script>
<style>
  .wxc-minibar{
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: #bbbaba;
  }
</style>