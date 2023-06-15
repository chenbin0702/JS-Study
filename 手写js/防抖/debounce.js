// 防抖函数
function debounce(fn,delay,immediate=false)
{
  // timer用来记录上一次的 事件触发 
  let timer=null
  let isInvon=false
  // 触发事件执行时的函数
  const _debounce=function(...args){
    // 如果有触发，就取消上一次的的、事件
    if(timer) 
    {
      clearTimeout(timer)
    }
    // 立即执行
    if(immediate&&!isInvon)
    {
      fn.apply(this,args)
      isInvon=true
      return
    }
    // 延迟执行对应的函数 
    timer=setTimeout(()=>{
      fn.apply(this,args)
      timer=null //执行函数之后 将timer置为null
      isInvon=false
    },delay)  
  }
  // 取消防抖功能函数
  _debounce.cancel=function()
  {
    if(timer) clearTimeout(timer)
    timer=null
    isInvon=false
  }
  return _debounce
}