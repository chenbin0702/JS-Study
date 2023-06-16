class EventBus
{
  constructor()
  {
    this.eventBus={}
  }
  // 监听
  on(eventName,eventFn)
  {
    let events=this.eventBus[eventName]
    if(!events)
    {
      events=[]
      this.eventBus[eventName]=events
    }
    events.push(eventFn)
  }
  // 触发
  emit(eventName,...args)
  {
    const events=this.eventBus[eventName]
    if(!events) return
    events.forEach(fn => {
      fn(...args)
    });
  }
  // 取消事件总线
  off(eventName,eventFn)
  {
    let events=this.eventBus[eventName]
    if(!events) return  
    for (let index = 0;index < events.length; index++) {
      const fn = events[index];
      if(fn===eventFn)
      {
        events.splice(index,1);
        break
      }
    }
    // 如果events清空了
    if(events.length === 0)
    {
      delete this.eventBus[eventName]
    }
  }
 
}