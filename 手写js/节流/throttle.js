function throttle(fn,time,leading=false)
{
  let starTime=0
  const _throttle=function(...args){
    const nowTime =new Date().getTime()
    const waitTime=time-(nowTime-starTime)
    // 不立即执行
    if(!leading&&starTime===0)
    {
      starTime=nowTime
    }
    if(waitTime<=0)
    {
      fn.apply(this,args)
      starTime=nowTime
    }
  }
  return _throttle
}