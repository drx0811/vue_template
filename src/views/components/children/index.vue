<template>
	<div>
		{{name1}}---{{name}}-
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
      // $attrs 属性，是父组件传递过来的属性，
      console.log(this.$attrs);
	  }
  }
</script>

<style scoped>

</style>