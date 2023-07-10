const express=require("express");
var appForEmp=express.Router();
const mysql=require("mysql");
const config=require("config");
// var connection=mysql.createConnection({
//     host : 'localhost',
//     user:'root',
//     password:'manager',
//     database : 'wpt'
// })

var connection = mysql.createConnection({
    host     : config.get("host"),
    user     :  config.get("user"),
    password :  config.get("password"),
    database :  config.get("database")
   });
appForEmp.get("/",(request,response)=>{
    connection.query("select * from Employee",(error,result)=>{
        if(error==null)
        {
            var data=JSON.stringify(result)
            response.setHeader("Content-Type","application/json");
            response.write(data);
        }else{
            console.log(error);
            response.setHeader("Content-Type","application/json");
            response.write(error);
        }
        response.end();
    })
})
appForEmp.post("/",(request,response)=>{
    var query=`insert into Employee values(${request.body.id},'${request.body.e_name}','${request.body.email}','${request.body.password}',${request.body.emp_id},'${request.body.dname}','${request.body.doj}')`;
    connection.query(query,(error,result)=>{
        if(error==null)
        {
            var data=JSON.stringify(result)
            response.setHeader("Content-Type","application/json");
            response.write(data);
        }else{
            console.log(error);
            response.setHeader("Content-Type","application/json");
            response.write(error);
        }
        response.end();
    })
})

appForEmp.put("/:id",(request,response)=>{
    var query=`update Employee set dname='${request.body.dname}',doj='${request.body.doj}' where id=${request.params.id}`;
    connection.query(query,(error,result)=>{
        if(error==null){
            var data=JSON.stringify(result);
            response.getHeader("Content-Type","application/json");
            response.write(data);
        }else{
            console.log(error);
            response.setHeader("Content-Type","application/json");
            response.write(error);
        }
        response.end();
    })
})
appForEmp.delete("/:doj",(request,response)=>{
    var query=`delete from Employee where doj=${request.params.doj}`;
    connection.query(query,(error,result)=>{
        if(error==null){
            var data=JSON.stringify(result);
            response.getHeader("Content-Type","application/json");
            response.write(data);
        }else{
            console.log(error);
            response.setHeader("Content-Type","application/json");
            response.write(error);
        }
        response.end();
    })
})
module.exports=appForEmp;