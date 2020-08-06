<template>
	<div>
		<div class="box" v-click_out>
			<el-input :value="formatValue" @focus="visible=true" class="input-box" type="text"></el-input>
			<div class="check-box" v-if="visible">
				<div class="top">
					<div class="row">
						<div class="top1">一</div>
						<div class="top1">二</div>
						<div class="top1">三</div>
						<div class="top1">四</div>
						<div class="top1">五</div>
						<div class="top1">六</div>
						<div class="top1">日</div>
					</div>
				</div>
				<div class="center">
					<div :key="item.name" class="row" v-for="item in arrList">
						<div :class="((new Date().getDate())===li.getDate() && (new Date().getMonth())===li.getMonth())?'active':''" :key="li" class="top1" v-for="li in item">
							{{li.getDate()}}
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
  import {fomateTime, getMonth, getYear} from "@/utils";
  export default {
    name: "Contract",
    data() {
      return {
        visible: false,
        val: new Date(),
      }
    },
    mounted() {
      this.firstWeekDay;
      this.first;
    },
    computed: {
      formatValue: function () {
        return fomateTime(this.val)
      },
      arrList: function () {
        let firstWeekDay=new Date(getYear(this.val), getMonth(this.val), 1).getDay();
        let lastMonthWeekDay=new Date(new Date(getYear(this.val), getMonth(this.val), 1) - 1).getDate()
        let data_first=lastMonthWeekDay-(firstWeekDay-2);// 第一天是几号
        let arrList=[];
        let times=new Date(getYear(this.val),getMonth(this.val)-1,data_first).getTime();
        for (let j=0;j<6;j++){
          let arrtem=[];
          for (let i = 0; i < 7; i++) {
            let time=times+(i+7*j)*24*60*60*1000;
            arrtem.push(new Date(time));
          }
          arrList.push(arrtem)
        }
        console.log(arrList);
    
        return arrList
      },
    },
    directives: {
      click_out: {// 自定义指令的对象；
        bind(el, bindings, vnode) {
          let handler = (e) => {
            if (!el.contains(e.target)) {
              vnode.context.visible = false
            }
          }
          el.handler = handler;
          document.addEventListener('click', handler);// 事件监听最好把函数写到外部；
        },
        unbind(el) {
          document.removeEventListener("click", el.handler)
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
	.active{
		color: white;
		background: green;
		
	}
	.box {
		width: 300px;
		margin: 0 auto;
		border: 1px solid red;
		padding: 5px;
		border-radius: 3px;
		height: 300px;
		
		.input-box {
			width: 200px;
		}
		
		.check-box {
			background: yellow;
			
			.top1 {
				cursor: pointer;
				width: 20px;
				height: 20xp;
				border-radius: 10px;
				text-align: center;
				line-height: 20px;
			}
			
			.top {
				height: 20px;
				width: 100%;
				background: red;
				
				.row {
					width: 100%;
					display: flex;
					align-items: center;
					justify-content: space-around;
				}
			}
			
			.center {
				/*height: 20px;*/
				width: 100%;
				.row {
					width: 100%;
					height: 30px;
					border-bottom: 1px solid yellow;
					display: flex;
					align-items: center;
					justify-content: space-around;
				}
			}
		}
	}
</style>