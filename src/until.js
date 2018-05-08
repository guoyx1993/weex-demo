import axios from 'axios'
export default{
    //定义插件的公共函数
    install(Vue){
        Vue.prototype.modal = weex.requireModule('modal');
        Vue.prototype.navigator = weex.requireModule('navigator');
        Vue.prototype.storage = weex.requireModule('storage');
        Vue.prototype.baseUrl = 'https://api.91war.com/';
        Vue.prototype.storage.getItem('token', event => {
            //this.token = event.data;
            if(event.data){
                //登录成功后，在加头信息，不认取的有误
                axios.defaults.headers.common['Authorization'] = event.data;
            }
        })
        Vue.prototype.$http = axios;
        Vue.config.productionTip = false;
        //公共get请求函数
        Vue.prototype.get = function (obj){
            return new Promise((resolve, reject)=>{
                this.$http.get(obj.url,{
                        params: obj.data
                    }).then(
                    respose=>{
                        //成功后显示列表
                        if(!respose.data.code){
                            resolve(respose.data.data);
                        }
                    }
                ).catch(
                    error=>{
                        if (error.response) {
                            // 请求已发出，但服务器响应的状态码不在 2xx 范围内
                            if(error.response.data.info){
                                if(obj.popupInfo == false){ //我使用弹框显示错误信息
                                    reject(error.response);
                                }else{
                                    Vue.prototype.errMessage(error.response.data.info);
                                }
                            }
                        }
                    }
                );
            });
        };
        //公共post请求函数
        Vue.prototype.post = function (obj){
            return new Promise((resolve, reject) =>{
                this.$http.post(obj.url,obj.data).then(
                    respose=>{
                        //成功后显示列表
                        if(!respose.data.code){
                            resolve(respose.data.data);
                        }
                    }
                ).catch(
                    error=>{
                        if (error.response) {
                            // 请求已发出，但服务器响应的状态码不在 2xx 范围内
                            if(error.response.data.info){
                                console.log(obj.popupInfo)
                                if(obj.popupInfo == false){
                                    reject(error.response);
                                }else{
                                    Vue.prototype.errMessage(error.response.data.info);
                                }
                            }
                        }
                    }
                );
            })
        };
        //公共处理请求错误信
        Vue.prototype.errMessage = function(errorInfo){
            store.state.comfirmMessage = errorInfo;
            if(errorInfo == "没有登录,请登录!"){
                //直接打开去登录弹框
                setTimeout(()=>{
                    this.$router.push('/login')
                },3000);
            }else{
                //弹出错误信息弹框
                Vue.prototype.modal.toast({ 'message': errorInfo, 'duration': 2 });
            }
        };
        Vue.prototype.jump = function(url){
            this.$router.push(url)
        }   
    }
}
