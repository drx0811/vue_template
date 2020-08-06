<template>
	<div>
		<div v-click_out class="box">
			<el-input @focus="visible=true" class="input-box" type="text"></el-input>
			<div v-if="visible" class="check-box">
				日历
				<button>
					点击啊
				</button>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
	  name:"Contract",
    data() {
      return {
        visible: false
      }
    },
		directives:{
      click_out:{// 自定义指令的对象；
        bind(el,bindings,vnode){
          let handler=(e)=>{
            if (!el.contains(e.target)) {
              vnode.context.visible=false
            }
          }
          el.handler=handler;
          document.addEventListener('click',handler);// 事件监听最好把函数写到外部；
        },
	      unbind(el){
          document.removeEventListener("click",el.handler)
	      }
      }
		}
	}
</script>
<style scoped lang="scss">
	.box{
		width: 300px;
		margin: 0 auto;
		border: 1px solid red;
		padding: 5px;
		border-radius: 3px;
		height: 300px;
		.input-box {
			width: 200px;
		}
		.check-box{
			background: yellow;
		}
	}
</style>