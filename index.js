function request({url, options, httpModule}) {
  let args = url == null ? [options] : [url,options]
  return new Promise((resolve, reject) => {
    const request = httpModule.request.apply(httpModule, [...args, res => {
        resolve(res)     
    }])
    request.on('error', (e) => {
      return reject(e)
    })
    request.end()
  })
}
 
module.exports = { 
  request
}

//async function test() { 
//  let httpModule =  require('http')
//  let res = await request({url:'http://www.google.com/', httpModule})
//  console.log(res.headers)
//  //res.pipe(process.stdout)
//}
//test().catch(e => console.log(e))
