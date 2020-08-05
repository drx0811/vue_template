<template>
	<div>
		<div class="red">
			<ul>
				<li>
					计算属性：利用的是缓存优势，其原理仍然是，Object.defineProperty()来进行数据劫持
				</li>
				<li>
					方法：同样也可以使用，但是劣势是，当其它数据发生变化的时候，该方法会再次执行，浪费性能
				</li>
				<li>
					watch:该方法有多种写法，
					<br>
						其一：函数的形式，参数是newValue，oldValue
					<br>
						其二：对象的形式，对象中可以有三个参数；handler，immediate,deep
				</li>
				
				<h4>watch 和 computed的用法</h4>
				<i>
					当简单的事件，接口请求，等飞直接的数据展示，可以考虑使用watch，单纯的数据展示，可以考虑使用
					computed
				</i>
			</ul>
		</div>
		{{fullName}}-----{{name}}---{{xxx}}
		<div @click="changeName">
			更改xxx
		</div>
	</div>
</template>

<script>
  export default {
    name: "Computed",
	  data(){
      return{
        firstName:'董',
	      lastName:"荣兴",
	      fullName:"",
	      xxx:"大梅"
      }
	  },
	  mounted(){
      // console.log(this);
	  },
	  computed:{
      // computed 原理是利用Object.defineProperty();来操作的；
      name(){
        return this.firstName+this.lastName
      }
	  },
	  // watch:{
    //   firstName: function (newValue,oldValue) {
    //     this.fullName=this.firstName+this.lastName
    //   },
		//   lastName: function (newValue,oldValue) {
    //     this.fullName=this.firstName+this.lastName
    //   }
	  // },
	  watch:{
	    firstName:{
	      handler(newValue,oldValue){
	        setTimeout(()=>{
            this.fullName=this.firstName+this.lastName
	        },1000)
	      },
		    immediate:true
	    },
		  lastName: {
	      handler(newValue, oldValue) {
	        this.fullName=this.firstName+this.lastName
        },
			  immediate: true
      }
	  },
	  methods:{
      allName(){
        console.log(1111);//使用方法缺点是，其它状态改变也会导致,该函数重新执行
        return this.firstName+this.lastName
      },
      changeName(){
        this.firstName= "112222"
      },
	  }
  }
</script>

<style scoped>
	.red{
		background: red;
		color: white;
		padding: 20px;
	}
	i{
		font-weight: 900;
		color: yellow;
	}
</style>