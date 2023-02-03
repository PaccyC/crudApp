const readline=require('readline');
var url = require('url');
const http=require('http'); 
const fs=require ('fs')
const server=http.createServer( async(req,res)=>{
 if(req.url == "/"){
        console.log("At the home route");
       fs.readFile("work.html",(err,data)=>{
            if(err){
                console.log(err);
            }
            else{
            res.write(data)
            res.end()
            }
        });
      
    }
    else{
        var q = url.parse(req.url , true);
       var rd = readline.createInterface({ 
            input: fs.createReadStream("./user.txt"),
            crlfDelay : Infinity
         })

         var credential = [];

         for await(const line of rd){
            credential.push(line);
         }

        if(q.query.email == credential[0] && q.query.password == credential[1]){
            console.log('The creadentials are true');
            res.write("The creadentials are true")
            res.end();
        }else{
            console.log("Invalid creadentials");
            res.write("Invalid creadentials")
            res.end();
        }

        res.end()
    }
})
const port=process.env.PORT || 7003; 
server.listen(port,()=>{
    console.log(`The server is running on port ${port}`);
}) 
















// if (req.method ==='POST') {
//     let body = '';
//      req.on('data', chunk => { 
//         body += chunk.toString();
//      }); 
//     }
//         req.on('end', () => {
//      const credentials = qs.parse(); 
// const{username,password}=credentials;

// if(username==="abayisengaaimepacifique@gmail.com" && password==="abayisenga@07"){
// res.write("User loged in successfully") 
// res.end();
// }
// else{
// res.write("Invalid Credentials");
// res.end();
// }
//         })