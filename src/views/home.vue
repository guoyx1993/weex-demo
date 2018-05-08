<template>
    <div style="height:100%;">
	    <slider class="slider size" auto-play="true" scrollable="true" interval="30000000">
		    <div v-for="(item,index) in posters"  :key="index" class="slider-inner">
		        <image class="cover" resize="cover" :src="item.src"></image>
		    </div>
		    <indicator class="indicator"></indicator>
	    </slider>
	    <div class="boss_select">
	    	<image resize="stretch" src="https://github.com/yuxuemei/react-music-player/blob/master/app/images/bg_boss_select_game.png?raw=true" class="bg_boss_select_game"></image>
	    	<image resize="stretch" src="https://github.com/yuxuemei/react-music-player/blob/master/app/images/boss_select_game.png?raw=true" class="boss_select_game"></image>
	    	<image resize="stretch" src="https://github.com/yuxuemei/react-music-player/blob/master/app/images/boss_selec_game_text.png?raw=true" class="boss_selec_game_text"></image>
	    	<text class="boss_select_text">156位宝宝正在接单中...</text>
	    	<text class="boss_select_value">未选择</text>
	    	<wxc-icon name="more_unfold" size="xs" class="more_unfold"></wxc-icon>
	    </div>
	    <div class="gamed_detail_select">
	    	<div class="gamed_detail_big">
	    		<text class="gamed_detail_big_title big_title_left">所属大区</text>
	    		<text class="gamed_detail_big_title">当前段位</text>
	    	</div>
	    	<div class="gamed_detail_select_small select_small_border">
	    		<image resize="stretch" src="https://github.com/yuxuemei/react-music-player/blob/master/app/images/icon_play_boss_price.png?raw=true" class="boss_selec_icon"></image>
	    		<text class="gamed_detail_big_title text_left">价格选择</text>
	    		<wxc-icon name="more_unfold" size="xs"></wxc-icon>
	    	</div>
	    	<div class="gamed_detail_select_small select_small_border">
	    		<image resize="stretch" src="https://github.com/yuxuemei/react-music-player/blob/master/app/images/icon_play_boss_count.png?raw=true" class="boss_selec_icon"></image>
	    		<text class="gamed_detail_big_title text_left">数量选择</text>
	    		<wxc-icon name="more_unfold" size="xs"></wxc-icon>
	    	</div>
	    	<div class="gamed_detail_select_small">
	    		<image resize="stretch" src="https://github.com/yuxuemei/react-music-player/blob/master/app/images/icon_play_boss_like.png?raw=true" class="boss_selec_icon"></image>
	    		<text class="gamed_detail_big_title text_left">偏好</text>
	    		<text class="gamed_detail_small_title text_center">妹子</text>
	    		<text class="gamed_detail_small_title text_center small_title_active">帅哥</text>
	    		<text class="gamed_detail_small_title text_center">随意</text>
	    	</div>
	    </div>
	    <wxc-button text="呼叫宝宝" @wxcButtonClicked="wxcButtonClicked" :btnStyle="btnstyle"></wxc-button>
	    <!-- <mask :isMask="isMask"/> -->
    </div>
</template>
<script>
    import { WxcIcon,WxcButton } from 'weex-ui'
    //import Mask from "./../components/mask.vue"
    export default {
	    data:function(){
	    	return{
                posters: [
		          { src: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg'},
		          { src: 'https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg'},
		          { src: 'https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg'}
		        ],
		        btnstyle:{
		        	backgroundColor:'#f59800',
		        	color:'#fff',
		        	width:'680px',
		        	marginTop:'40px',
		        	marginBottom:'40px',
		        	marginLeft:'35px'
		        },
		        isMask:true
	    	}
	    },
	    components:{ WxcIcon,WxcButton },
	    mounted:function(){
	    	
	    },
        methods:{
            wxcButtonClicked (e) {
		        console.log(e)
		    }
        }
    }
</script>
<style scoped>
.size {
    width: 680px;
    height: 210px;
    text-align: center;
    justify-content:center;
    align-content: center;
    margin-left: 35px;
}
.text_left{
	text-align: left;
}
.text_center{
	text-align: center;
}
.cover{
	border-radius: 15px;
}
.slider {
    position: relative;
    margin-top: 30px;
}
.slider-inner,.cover{
    height: 210px;
    width: 680px;
}
.indicator {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 60px;
    justify-content: center;
    item-selected-color:#f59800;
}
.bg_boss_select_game{
	width:720px;
	height: 170px;
}
.boss_select_game{
    width: 120px;
    height: 120px;
    position: absolute;
    top:25px;
    left: 40px;
}
.boss_selec_game_text{
	width: 190px;
    height: 35px;
    position: absolute;
    top:50px;
    left: 160px;
}
.boss_select{
	position: relative;
	margin-top: 30px;
	width: 720px;
	margin-left: 15px;
}
.boss_select_text{
	font-size: 25px;
	position: absolute;
    top:90px;
    left: 160px;
    color: #ccc;
}
.big_title_left{
	border-right-color: #dddce1;
	border-right-style: solid;
	border-right-width: 1px;
}
.boss_select_value{
	font-size: 26px;
	position: absolute;
    top:60px;
    right: 105px;
    color: #ccc;
}
.more_unfold{
	position: absolute;
    top:70px;
    right: 60px;
}
.gamed_detail_select{
	height: 400px;
	box-shadow: 0 0 15px rgba(211, 210, 210, 0.50);
	background-color: #ffffff;
	margin-top: 20px;
	border-radius: 15px;
	width: 680px;
	margin-left: 35px;
}
.gamed_detail_big_title{
	font-size: 26px;
    color: #ccc;
    flex: 1;
    text-align: center;
}
.gamed_detail_small_title{
	font-size: 24px;
	color: #ccc;
	width: 100px;
	margin-left: 30px;
	align-items: center;
}
.small_title_active{
	background-color: #f59800;
	border-radius: 30px;
	height: 45px;
	align-items: center;
	width: 90px;
	color: #fff;
	line-height: 45px;
}
.gamed_detail_big{
	display: flex;
	justify-content: center;
	flex-direction: row;
	height: 110px;
	margin-left: 20px;
	margin-right: 20px;
	align-items: center;
	border-bottom-color: #efecec;
	border-bottom-style: solid;
	border-bottom-width: 1px;
}
.boss_selec_icon{
	width: 40px;
	height: 40px;
	margin-right: 60px;
}
.gamed_detail_select_small{
	display: flex;
	justify-content: space-between;
	flex-direction: row;
	height: 94px;
	margin-left: 20px;
	margin-right: 20px;
	align-items: center;
}
.select_small_border{
	border-bottom-color: #efecec;
	border-bottom-style: solid;
	border-bottom-width: 1px;
}
</style>