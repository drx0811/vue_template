<template>
	<div>
		<div class="yellow">
			常用的动画库,相当于js来写的动画：velocity；网址：http://www.shouce.jb51.net/velocity/index.html
		</div>
		animation---{{name}}
	</div>
</template>

<script>
  export default {
    name: "Animation",
	  data(){
      return{
        name:"1111"
      }
	  }
  }
</script>

<style scoped>
	.yellow{
		background: yellow;
	}
</style>