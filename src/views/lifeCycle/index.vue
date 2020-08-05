<template>
	<div>
		<div class="red">
			<h3>生命周期函数---{{name}}</h3>
		</div>
		<div @click="changeName">
			修改
		</div>
	</div>
</template>

<script>
  export default {
    name: "LifeCycle",
	  data(){
      return{
        name:"生命周期"
      }
	  },
	  beforeCreated(){
      // 用的比较少，但是第一做一些底层的链的操作；
	  },
	  created(){
      // 此时创建了 实例但是还没挂载dom上，所以查不到dom节点
	  },
	  beforeMount() {
      // 此声明周期一般是用不到，vue会在此处去判断是实例是否有template或者render函数，如果有的话，vue会
		  // 将templte或者render函数中的内容替换掉节点  #root；
    },
	  mounted(){
      // 这里可以获得真实的dom节点；但是在该函数中，数据发生改变，虽然页面发生改变了，但是打印的信息让然是上一次的信息
      // console.log(this.$el);
      this.name=1111;
      this.$nextTick(()=>{
        console.log(this.$el.innerHTML);
      })
      console.log(this.$el.innerHTML);
	  },
	  beforeUpdate(){
      // console.log(this);
	  },
	  updated(){
      // 数据发生变化之后会执行在这里不能修改数据，
		  // console.log(111);
	  },
	  beforeDestroy() {
    
    },
    methods:{
      changeName(){
        this.name=222;
      }
	  }
  }
</script>

<style scoped>

</style>