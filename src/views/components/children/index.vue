<template>
	<div>
		{{name1}}---{{name}}
		<div v-bind="$attrs">
			亲亲我
		</div>
		<div @click="sendMes">
			点我啊
		</div>
	</div>
</template>

<script>
  export default {
    name: "Child",
    data() {
      return {
        name1: "孩子"
      }
    },
    props: [
      "name",
	    // "items"
    ],
	  mounted(){
      // $attrs 属性，是父组件传递过来的属性除去  props里面列举出来的   的所有的;此
		  // 处$attrs 包含items，不包含name,在模板中可以用v-bind="$attrs" 将可用的属性绑定到木板上，也可以打印在js中打印出来 this.$attrs;
		  
      console.log(this.$listeners);//会得到父级传递过来的方法，在这里可以直接调用该方法从而触发父级的响应
		  // 但是如果在父级组件的事件添加 。native修饰符，则父级组件会把事件传递给子组件的最外层dom
		  
	  },
	  methods:{
      sendMes(){
        this.$emit("sendToParent",'孩子传递过来的数据，请接收啊')
      }
	  }
  }
</script>

<style scoped>

</style>