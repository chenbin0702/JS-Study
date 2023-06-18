function cbajax({
  url,
  method = 'get',
  timeout = 10000,
  headers = {},

} = {}) {
  return new Promise((resolve, reject) => {
    //  创建XMLHttpRequest对象
  const xhr = new XMLHttpRequest()
  // 监听状态的变化
  xhr.onreadystatechange = function () {
    console.log(xhr.response);
  }
  // 监听结果
  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
      resolve(xhr.response)
    }
    else {
      reject({ status: xhr.status, message: xhr.statusText })
    }
  }
  // 告诉xhr获取的数据类型
  xhr.responseType = "json"
  if (method.toUpperCase === 'GET') {
    const querryStrings = []
    for (let key in data) {
      querryStrings.push(`${key}=${data[key]}`)

    }
    url = url + "?" + querryStrings.join('&')
    // 配置请求open
    // method 请求方法
    // url 请求地址
    xhr.open(method, url)
    xhr.send()
  }
else
{
  xhr.open(method, url)
  xhr.setRequestHeader('Content-Type', 'application/json')
  // 发送请求
  xhr.send(JSON.stringify(data))

}
  })
  
  
}