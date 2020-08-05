<template>
  <div class="dashboard-container">
    <h2>dom原生操作</h2>
    <div class="insertBefore">
      <div ref="dom1">
        <div>insertBefore</div>
      </div>
    </div>
    
    <div ref="dom2" class="appendChild">
      <div>appendChild</div>
    </div>
  
    <div ref="dom3" class="appendChild">
      <div class="ddd">querySelector</div>
      <div id="ddd">querySelector</div>
    </div>
    <div>
      classList方法
      <div>
        add，remove， toggle，contains
      </div>
    </div>
  
    <div>
      contains方法
      <div>
        判断 某个元素是否包含在另一个元素中；
      </div>
    </div>
    
    
    <div>
      offsetHeight 包括 height，padding border
    </div>
  </div>
</template>

<script>
export default {
  name: 'omEdit',
  data(){
    return{
      red:"green",
      age:12,
    }
  },
  mounted(){
    let parentNode1=this.$refs.dom1;
    var p1 = document.createElement("p");  //创建段落节点
    p1.id="1111";// 创建的节点可以 添加属性；
    var txt1 = document.createTextNode("盒模型1"); //文本内容为“盒模型”
    p1.appendChild(txt1);  //把文本节点增加到段落节点中
    parentNode1.parentNode.insertBefore(p1,parentNode1)
    
    
    
    let parentNode2=this.$refs.dom2;
    var p2 = document.createElement("p");  //创建段落节点
    var txt2 = document.createTextNode("盒模型2");  //创建文本节点，文本内容为“盒模型”
    p2.appendChild(txt2);  //把文本节点增加到段落节点中
    parentNode2.appendChild(p2);
  
  
    let parentNode3=this.$refs.dom3;
    let ss1=parentNode3.querySelector('.ddd')
    let ss2=parentNode3.querySelector('#ddd')
    console.log(ss1);
    console.log(ss2);
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
