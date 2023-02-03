
const mysql=require('mysql');
const dotenv=require('dotenv')
dotenv.config();
const instance=null
const connection=mysql.createConnection({
    host:process.env.HOST,
    user:process.env.USER,
    password:process.env.PASSWORD,
    database:process.env.DATABASE,
    port:process.env.DB_PORT
});
connection.connect((err)=>{
    if(err){
        console.log(err.message);
    }
    console.log('db '+ connection.state);
})

class DbService{
    static getServiceInstance(){
        return  instance ? instance : new DbService()
          }
  insertData(fname,lname,password,email,image){
   const query="INSERT INTO credentials(fname,lname,password,email) values (?,?,?,?)";
        connection.query(query,[fname,lname,password,email,image],(err,result)=>{
    if(err) console.log("error found");
    
    else{
    console.log("data entered successfully");
    }
        })
    
 }

 deleteProfile(fname,lname,password,email){
    const query=`ALTER TABLE credentials DROP  `
 }
}


module.exports=DbService;