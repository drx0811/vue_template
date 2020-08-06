<template>
	<div>
		{{name}}----
		<Child @click="show1" :name="name" :items="items"></Child>
		<Child @click.native="show2" :name="name" :items="items"></Child>
		<Child @sendToParent="getMes" :name="name" :items="items"></Child>
	</div>
</template>

<script>
	import Child from "./children/index"
  export default {
    name: "Components",
    data() {
      // 组件通过一个函数调用后返回一个新的对象，来达到组件数据隔离；
      return {
        name: "组件",
	      items:[1,2,3]
      }
    },
	  components:{
      Child,
	  },
	  methods:{
      show1(){// 对一个组件绑定事件是不靠谱的，在父组件中无法直接调用，需要去子组件中进行配合；需要在子组件内部，通过在模板上使用v-on="$listeners"
        console.log(111);
      },
      show2(){// 针对上面的无法直接调用的情况，我们可以使用native去修饰一下事件，这样事件会默认绑定在template的第一个div上面；
        console.log(111);
      },
      getMes(data){
        console.log(data);
      },
	  },
	  computed:{
   
	  }
  }
</script>

<style scoped>

</style>