<template>
	<div v-if="dataSource.length">
		<div v-for="item in dataSource"  class="message">
			{{item.title }}
		</div>
	</div>
	
</template>

<script>
  export default {
    name: "MessageObj",
    data() {
      return {
        dataSource: []
      }
    },
	  mounted(){
      this.id=0;
	  },
	  methods:{
      add:function (options) {
        const {title,duration}=options;
        this.id++;
        const contentBox={id:this.id,title:title};
        this.dataSource.push(contentBox);
        contentBox.timer=setTimeout(()=>{// 将定时器挂载到对象中，方便在其他地方移除该定时器；
          this.remove(contentBox);
        },duration)
      },
		  remove:function (options) {
        clearTimeout(options.timer);
        this.dataSource=this.dataSource.filter(item=>item.id!==options.id);
      }
	  }
  }
</script>

<style scoped>

</style>