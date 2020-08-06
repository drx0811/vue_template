<template>
	<div>
		{{name }}
		<slot name="only">
			没有传递过来，我就会显示
		</slot>
	</div>
</template>

<script>
  export default {
    name: "child_name",
    data() {
      return {
        name: "子组件"
      }
    },
  }
</script>

<style scoped>

</style>