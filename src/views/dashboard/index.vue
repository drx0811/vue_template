<template>
  <div class="dashboard-container">
    <h3>
      vue指令相关issue
    </h3>
    <ul>
      <li>当在dom中添加{}的时候，我们可以使用{{ {} }},但是不能使用三个大括号连续</li>
      <li>v-for我们一般使用的是in，不能of，因为of在编辑器中变红</li>
      <li>在vue2.5版本中必须添加key属性，因为在该版本中添加了domdiff检查</li>
      <li>v-bind:都是指令中的变量，如果是字符串都要添加双引号</li>
      <li>template是vue自带的标签，没有实际意义，可以v-for，但是不能添加：key属性，：key只能在真实的dom上</li>
      <li>但是当我们只想渲染出文本，不想把dom元素的时候，我们可以使用tempate来包裹，同react的fragment</li>
      <li>当模板中变量需要跟字符串连接的时候，最好使用模板字符串来做</li>
      <li>vue中的  方法  也可以放到data中，但是data中this指的并不是vue的实例，而是window对象,所以我们要放到methods中；</li>
      <li>
        自定义指令：自定义指令的参数，第一个是el，第二个bindings,第三个是vnode，
        但是自定义指令里面的函数的this指向的是window，而不是实例；
      </li>
    </ul>
    <h3>自定义指令案例</h3>
    <div>
      获取焦点的时候，显示一张图片，失去焦点的时候，图片消失；我们可以用自定义指令来做；
      首先1，我们要把焦点的input和image放到一个div里面，获取焦点放在input上面，失去焦点放在父级div上面（我们可以通过el得到div的dom节点），
      在自定义指令的 函数里面，我们通过监听事件，document.addEventListener();在监听函数里面我们可以通过事件的target得到点击的dom节点，然后判断
      点击的dom节点是否在el里面来判断点击之后是否消失图片 el.contains(e.target)
    </div>
    <hr/>
    <h4>测试字符串</h4>
    <div :name='`${red}_111`'>{{`${red}___1111`}}</div>
    <h3>自定义过滤器</h3>
    <ul>
      <li>过滤器通过管道符进行值得修改，可以传参，但是对应的形参第一个为 上一次过滤之后的值，第二个才为实参的值</li>
    </ul>
    <div>
      {{age | addOne(1)}}
    </div>
    
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  data(){
    return{
      red:"green",
      age:12,
    }
  },
  filters:{
    addOne(value,add){
      return value+add;
    }
  },
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
