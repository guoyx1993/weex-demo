<template>
    <div class="user-box">
        <!--顶部-->
        <div class="user-info">
            <text class="user-set">设置</text>
            <div class="user-text">
                <div class="user-attention">
                    <text class="text">5120</text>
                    <text class="text mtop15">关注</text>
                </div>
                <div class="user-head">
                    <div class="head"><image src=""></image></div>
                    <text class="text">这里是名字</text>
                </div>
                <div class="user-fans">
                    <text class="text">120</text>
                    <text class="text mtop15">粉丝</text>
                </div>
            </div>
        </div>
        <!--充值-->
        <div class="account">
            <div class="account-pay">
                <image resize="stretch" src=""></image>
            </div>
            <div class="account-money">
                <image resize="stretch" src=""></image>
            </div>
        </div>
        <!--其他列表-->
        <div class="other-list">
            <div class="list">
                <text class="img-icon"></text>
                <text class="text">我的订单</text>
                <text class="arrow"></text>
            </div>
            <div class="list">
                <text class="img-icon"></text>
                <text class="text">成为神仙</text>
                <text class="arrow"></text>
            </div>
            <div class="list">
                <text class="img-icon"></text>
                <text class="text">优惠券</text>
                <text class="arrow"></text>
            </div>
        </div>
    </div>
</template>
<script>
	import { WxcCell } from 'weex-ui'
    export default{
    	data(){
    		return{

    		}
    	},
    	components:{WxcCell},
    	mounted:function(){},
    	methods:{}
    }
</script>
<style scoped>
.user-box{
	width: 750px;
}
.user-info{
	height: 370px;
	color: #fff;
	font-size: 32px;
	background-color: #ff238d;
}
.user-info .text{
	color: #fff;
	font-size: 32px;
}
.user-set{
    text-align: right;
    padding-top: 28px;
    padding-right: 28px;
    padding-bottom: 28px;
    color: #fff;
}
.user-text{
	flex-direction: row;
	justify-content: center;
}
.user-attention .text,.user-head .text,.user-fans .text{
	text-align: center;
}
.user-head{
	width: 210px;
	text-align: center;
}
.user-head .head{
    width: 160px;
    height: 160px;
    border-style: solid;
	border-width: 2px;
	margin-left: 23px;
    border-color: #fff;
    border-radius: 50%;
}
.user-head .text{
	text-align: center;
	margin-top: 30px;
}
.mtop15{
    margin-top: 12px;
    font-size: 24px;
}
</style>