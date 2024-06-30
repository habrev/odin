const http=require('http');
const fs=require('fs');
// const path= require('path')



const server = http.createServer((req,res) => {
  let path = './public/'
  switch(req.url){
    case '/':
      path+='index.html';
      break;
    case '/about':
      path+='about.html';
      break;
    case '/contactme':
      path+='contactme.html';
      break;
    default:
      path+='404.html';
      break;
  }
  console.log(req.url , req.method);
  res.setHeader('content-type', 'text/html')
  fs.readFile(path, (err,data)=>{
    if(err){
      console.log(err);
      res.end();    

    }else {
      res.write(data);
      res.end();
    }
  
  } )
  
}
)
server.listen(8080, () =>{
  console.log('the port listen on port 8080')

})
