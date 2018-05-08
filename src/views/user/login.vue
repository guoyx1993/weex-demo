<template>
    <div>
        <minbar title="登录" />
        <div class="form_field">
        	<div class="form_field_item"><input type="text" class="form_field_input" placeholder="请输入手机号"></div>
        	<div class="form_field_item"><input type="text" class="form_field_input" placeholder="密码"></div>
        	<div><text class="login_btn">登录</text></div>
        </div>
     </div>
</template>
<script>
import Minbar from "./../../components/minbar.vue"
import { WxcButton } from 'weex-ui'
export default{
	components:{ Minbar,WxcButton },
    methods:{
	        wxcButtonClicked:function(e){
	            console.log(e)
	        }
	    }
	}
</script>
<style scoped>
	.form_field_item{
       margin-top: 25px;
	}
	.form_field_input{
		border-width: 1px;
		border-style: solid;
		border-color: #ddd;
		border-radius: 10px;
		height: 70px;
		line-height: 70px;
		width: 680px;
		margin-left: 35px;
		margin-right: 35px;
		padding-left: 10px;

	}
	.login_btn{
		width: 680px;
		margin-left: 35px;
		margin-right: 35px;
		margin-top: 40px;
		height: 84px;
		color: #fff;
		line-height: 84px;
		border-radius: 12px;
		background-color: #da5c34;
		text-align: center;
	}
</style>