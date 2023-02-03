const express=require('express')
const app=express();
const bodyParser=require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
const http=require('http'); 
const fs=require ('fs')
const server=http.createServer((req,res)=>{
const login=fs.readFile('login.html',(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
    res.write(data)
    res.end();
})
fs.readFile('user.txt',(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    else{
        console.log(data);
    }
    // res.write(data);
    // res.end();
})


// if(login===user){
//     fs.write("User loged in successfully");
// }
// else{
//    fs.writeFile ("Invalid credentials")
// }
})
const port=process.env.PORT || 7001; 
server.listen(port,()=>{
    console.log(`The server is running on port ${port}`);
})

