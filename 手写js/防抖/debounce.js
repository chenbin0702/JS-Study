function debounce(fn,delay)
{
  // timer用来记录上一次的 事件触发 
  let timer=null
  // 触发事件执行时的函数
  const _debounce=function(...args){
    // 如果有触发，就取消上一次的的、事件
    if(timer) 
    {
      clearTimeout(timer)
    }
    // 延迟执行对应的函数 
    timer=setTimeout(()=>{
      fn.apply(this,args)
      timer=null //执行函数之后 将timer置为null
    },delay)  
  }
  return _debounce
}