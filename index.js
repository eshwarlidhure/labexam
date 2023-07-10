const express=require('express');
const config=require('config');
const mysql=require('mysql');
const emprelatedRoutes=require('./routes/emp');//./routes/emp



const app=express();
app.use((request, response, next)=>{
    response.setHeader('Access-Control-Allow-Origin',"*");
    response.setHeader('Access-Control-Allow-Headers',"*");
    response.setHeader('Access-Control-Allow-Methods', "*")
    next();
})
app.use(express.json());
app.use('/emp',emprelatedRoutes);

// app.listen(9999,()=>{
//     console.log("server is listing at 9999......")

// })
// 
const portno=config.get("PORT");
app.listen(portno,()=>{
    console.log("server is listing at "+portno+"......");

})


