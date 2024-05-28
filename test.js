const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response)=>{
  if(request.method==='GET'){
    if(request.url==='/'){
      const halo = fs.readFileSync('halo.html','utf8');
      response.statusCode=200;
      response.setHeader('Content-Type','text/html; charset=utf-8');
      response.write(halo);
      response.end();
    }
  }
  else if(request.method==='POST'){
    if(request.url === '/action'){
      let body ='';
      response.on('data',(chunk)=>{
        data+=chunk;
      });
      response.on('end',()=>{
        const parseurl=new URLSearchParams(body);
      });
    }
  }
});
server.listen(8080,(error)=>{
  if(error){
    console.error('에러');
  }
  else{
    console.log('http://localhost:8080');
  }
});