// Bước 1: Import module http và fs
var http = require('http');
var fs = require('fs');
 
// Bước 2: Khởi tạo server
var server = http.createServer(function(request, response){
    // Biến request: là biến lưu trữ thông tin gửi lên của client
    // Biến response: là biến lưu trữ các thông tin trả về cho client
    if (request.url == '/public/index.html')
    {
        // Thiết lập Header
        response.writeHead(200, {
            "Context-type" : "text/html"
        });
         
        // Show thông tin trang about
        fs.createReadStream('./public/index.html').pipe(response);
    }
    else // trường hợp ngược lại ko tìm thấy file
    {
        // Thiết lập Header
        response.writeHead(404, {
            "Context-type" : "text/plain"
        });
         
        // Show lỗi không tìm thấy trang
        response.write('404 Not Found ' + request.url);
         
        // Kết thúc
        response.end();
    }
    if(request.url.indexOf('.css') != -1){ //req.url has the pathname, check if it conatins '.css'
        fs.readFile('./public/css/style.css', function (err, data) {
         if (err) console.log(err);
            res.writeHead(200, {'Content-Type': 'text/css'});
            res.write(data);
        res.end();
      });

    }
});
 
// Bước 3: Lắng nghe cổng 300 thì thực hiện chương trình
server.listen(3000, function(){
    console.log('Connected Successfull!');
});