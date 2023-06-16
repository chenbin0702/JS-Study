function throttle(fn,time,leading=false,trailing=true)
{
  let starTime=0
  let timer=null
  const _throttle=function(...args){
   
    const nowTime =new Date().getTime()
    // 不立即执行
    if(!leading&&starTime===0)
    {
      starTime=nowTime
    }
    const waitTime=time-(nowTime-starTime)
    if(waitTime<=0)
    {   
      if(timer) clearTimeout(timer)
      fn.apply(this,args)
      starTime=nowTime
      timer=null
      return
    }
    // 判断是否执行尾部
    if(trailing&&!timer)
    {
     timer=setTimeout(()=>{
         fn.apply(this,args)
         starTime=new Date().getTime()
         timer=null
       },waitTime)
    }
  }
  return _throttle
}