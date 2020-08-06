<template>
	<div>
		<div class="red">
			<h3>
				slot的用法
			</h3>
			<div>
				{{name }}
			</div>
		</div>
		<hr>
		<child_name>
			<template #only>
				烂插槽
			</template>
		</child_name>
	</div>
</template>
<script>
	import child_name from "./child/child"
  export default {
    name: "SlotName",
    data() {
      return {
        name: "父组件"
      }
    },
	  components:{
      child_name
	  }
  }
</script>

<style scoped>
.red{
	background: red ;
}
</style>