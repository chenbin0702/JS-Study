class Cache{
  constructor(isLocal=true)
  {
    this.storage=isLocal?localStorage:sessionStorage
  }
  setCache(key,value)
  {
    if(!value)
    {
      throw new Error("没有值")
    }
    if(value)
    {
      this.storage.setItem(key,JSON.stringify(value))
    }
    
  }
  getCache(key)
  {
    const result=this.storage.getItem(key)
    if(result)
    {
      return JSON.parse(result)
    }
   
  }
  removeCache(key)
  {
    this.storage.removeItem(key)
  }
  clear()
  {
    locathis.storagelStorage.clear()
  }
}
export const localCache=new Cache()
export const sessionCache=new Cache(false)