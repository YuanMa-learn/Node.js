var http = require ('http')
var fs = require ('fs')
http.createServer (function (req, res){
    console.log('请求的路径为' + req.url)
    // 写文件 参数（文件路径，写入字符串,处理函数）
    fs.writeFile('../file.txt', 'hello node.js', function (error){
        if (error){
            console.log(error)
        }
    })
    // 读文件 参数（路径，处理函数）
    fs.readFile('../file.txt', function (error, data){
        if (error){
            res.end(error)
        }
        else {
            res.end(data.toString())
        }
    })
}).listen(3000, function (){ // 设置端口号
    console.log('Ready go!')
})
