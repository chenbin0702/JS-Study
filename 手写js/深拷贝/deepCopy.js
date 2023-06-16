// 判断是否为对象
function isObject(value)
{
  const valueType= typeof value
  return (value!==null)&&(valueType==="object"||valueType==="function")
}
//深拷贝
function deepCopy(obj,map=new WeakMap())
{
  if(!isObject(obj))
  {
    return obj
  }
  // 判断是否为Set
  if(obj instanceof Set)
  {
    const newSet= new Set()
    for(let key of obj)
    {
      newSet.add(deepCopy(key))
    }
    return newSet
  }
  // 判断是否为Map
  if(obj instanceof Map)
  {
    const newMap= new Map()
    for(let key of obj)
    {
      newSet.set(key,obj[key])
    }
    return newMap
  }
  // 判断是否为Symbol
  if (typeof obj==='symbol') {
    return Symbol(obj.description)
  }
  // 判断是否为函数
  if(typeof obj==="function")
  {
    return obj
  }
  // map弱引用 避免循环引用
  if(map.get(obj))
  {
    return map.get(obj)
  }
  // 判断是对象还是数组
  const newObj=Array.isArray(obj)?[]:{}
  map.set(obj,newObj)
  for(let key in obj)
  {
    newObj[key]=deepCopy(obj[key],map)
  }
  // 单独遍历 symbol
  const symbolKeys=Object.getOwnPropertySymbols(obj)
  for(let key of symbolKeys)
  {
    newObj[Symbol(key.description)]=deepCopy(obj[key],map)
  }
  return newObj
}