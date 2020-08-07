

import Vue from "vue";
import MessageObj from "./index.vue"
let vms;
function getSinle() {
  if (!vms) {
    vms=new Vue({
      render:h=>h(MessageObj)
    }).$mount();
  }
  return vms
}
const getInstance=()=>{
  let vm=getSinle();// 单例模式，防止重复创建，影响性能；在内存中的实例
  document.body.append(vm.$el);// 将内存中实例挂载到dom中；
  let component=vm.$children[0];// 获得内存中的实例；
  return{
    add(options){// add 方法对象下面的 getInstance().add(options)
      component.add(options);// 此处的add方法对应vue页面的add方法；
    }
  }
}


export const Message={
  info(options) {
    getInstance().add(options)
  }
}
let _Vue;
export default {
  install(Vue,option){
    if (!_Vue) {// 防止用户多次使用use引入；
      _Vue=Vue;// 此处的Vue是指的我们编写的插件；
      let message={};
       Object.keys(Message).forEach(item=>{
         message[item]=Message[item ]
       })
      Vue.prototype.message=message;// 将
    }
  }
}
