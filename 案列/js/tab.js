var that;
class Tab{
    constructor(id){
        // 获取元素
        that=this;
        this.main=document.querySelector(id);
        this.fsection=this.main.querySelector('.tabscon');
        this.add=this.main.querySelector('.tabadd');
        this.ul=this.main.querySelector('ul');
        this.init();
    }
    init(){
        // init 初始化操作让相关的元素绑定事件
        this.updataNode();
        for(var i=0;i<this.lis.length;i++)
        {
            this.lis[i].index=i;
            this.lis[i].onclick=this.toggleTabs;
            this.remove[i].onclick=this.removeTab;
            this.spans[i].ondblclick=this.editTab;
            this.sections[i].ondblclick=this.editTab;
        }
        this.add.onclick=this.addTab;
    }
    // 获取所有lu 和section
    updataNode(){
        this.lis=this.main.querySelectorAll('li');
        this.sections=this.main.querySelectorAll('section');
        this.remove=this.main.querySelectorAll('.icon-guanbi');
        this.spans=this.main.querySelectorAll('.fisrstnav li span:first-child');
    }
    // 切换功能
    toggleTabs(){
// console.log(this.index);
that.clearClass()
  this.className='liactive';
  that.sections[this.index].className='conactive';
    }
    // 清除样式
    clearClass()
    {
        for(var i=0;i<this.lis.length;i++)
        {
            this.lis[i].className='';
            that.sections[i].className='';
        }
    }
    // 添加功能
    addTab(){
        that.clearClass();
// 创建li元素和section 元素
// 把这两个元素追加到父元素中
// insertAdjacentHTML() 可以将字符串追加到父元素里面 不同于createElement创建元素 需要innerHTML赋值在appendChild
var random=Math.random();
var li=' <li class="liactive"><span>新选项卡</span><span class="iconfont icon-guanbi"></span></li>';
var section=' <section class="conactive">测试'+random+'</section>';
that.ul.insertAdjacentHTML('beforeend',li);
that.fsection.insertAdjacentHTML('beforeend',section);
that.init();
    }
    // 删除功能
    removeTab(e)
    {
        e.stopPropagation();//阻止冒泡方法
      var index=this.parentNode.index;
    //   console.log(index);
    // 根据索引号删除对应的li和section remove()方法可以直接删除指定的元素；
    that.lis[index].remove();
    that.sections[index].remove();
    that.init();
    // 当我们删除的不是选中状态的li 原来选择的li状态不变
    if(document.querySelector('.liactive'))
    return;
    // 当我们删除了选中状态的这个li的时候，让它前一个li 处于选中状态
    index=0?index:index--;
    // 手动调用我们的点击事件 不需要鼠标触发
    // && 如果前面为真就执行后面操作 如果前面为假就不执行后面操作
    that.lis[index] && that.lis[index].click();
    }
    // 修改功能
    editTab()
    {
        // 双击禁止选定文字
        var str=this.innerHTML;
        window.getSelection?window.getSelection().removeAllRanges():document.getSelection.empty();
        //  alert('544');
        this.innerHTML='<input type="text"></input>'
        var input=this.children[0];
        input.value=str;
        // select()使文本框中的文字处于被选中的状态
        input.select();
        // 当我们离开文本框就把 文本框里的值给span
        input.onblur=function()
        {
            this.parentNode.innerHTML=this.value;
        }
        // 当我们按下回车键也可以把 文本框里的值给span
        input.onkeyup=function(e)
        {
            if(e.keyCode===13)
            {
                // 手动调用我们的失去焦点事件 不需要鼠标触发
                this.blur();
            }
        }
    }
}
new Tab('#tab')
