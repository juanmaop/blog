var Mock = require('mockjs')
// var data = Mock.mock({
//   // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
//   'list|1-10': [{
//     // 属性 id 是一个自增数，起始值为 1，每次增 1
//     'id|+1': 1
//   }]
// })

var Random=Mock.Random  //随机
// console.log('域名:'+Random.domain())
// console.log('IP:'+Random.ip())
// console.log('URL:'+Random.url())
// console.log('省份:'+Random.province())
// console.log('城市:'+Random.city(true))
// console.log('5个字的句子:'+Random.csentence(5))
// console.log('3-5个字的句子:'+Random.csentence(3,5))
// console.log('2个句子的段落:'+Random.cparagraph(2))
// console.log('2-3个句子的段落:'+Random.cparagraph(2,3))
// console.log('颜色:'+Random.rgba())
// console.log('日期:'+Random.date('yyyy-MM-dd'))
// console.log('时间:'+Random.time())
// console.log('图片:'+Random.image('200x100','#4A7BF7','Hello'))
// console.log('图片64:'+Random.dataImage('200x100','Hello'))
// console.log('全名:'+Random.cname())
// console.log('姓氏:'+Random.cfirst())
// console.log('名字:'+Random.clast())
Mock.mock('http://119.29.96.116:8762/api/data', () => {
    return {
        data: {"a":1,"b":2}
    }
})
// 输出结果
// console.log(JSON.stringify(data, null, 4))