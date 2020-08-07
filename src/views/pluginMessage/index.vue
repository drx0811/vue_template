<template>
	<div>
		<div style="background: red">
			<h3>插件的步骤</h3>
			<li>
				第一步：引入写好的插件；我们要引入的是通过install包装好的插件
			</li>
			<li>
				第二步：我们还要在使用的页面通过use的方式引入插件，
			</li>
			<li>
				第三步：编写插件；分析插件的功能，本次分析 /plugins/message/index.vue页面，点击之后，会增加，定时删除；
			</li>
			<li>
				第四步：通过install
			</li>
		</div>
		<el-button
			@click="showMessage"
		>
			点我啊
		</el-button>
	</div>
	
</template>

<script>
	// import {Message} from "@/plugins/message/index.js"
	import Vue from "vue"
	import Message from "@/plugins/message/index.js";// 因为是直接引入，可以是任何名字，Message1，Message2，Message3
	Vue.use(Message);
  export default {
    name: "index",
    data() {
      return {
        name: "message"
      }
    },
	  methods:{
      showMessage(){
        this.message.info({// this.message插件已经挂载到了Vue原型上了，我们可以在任何地方直接使用；
	        title:"点击我了",
	        duration:3000
        })
      }
	  }
  }
</script>

<style scoped>

</style>