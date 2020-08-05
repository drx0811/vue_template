<template>
	<div>
		{{name}}----
		<Child :name="name" :items="items"></Child>
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
	  computed:{
   
	  }
  }
</script>

<style scoped>

</style>