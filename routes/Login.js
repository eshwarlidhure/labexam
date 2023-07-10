const express = require('express');
const atob = require('atob');

const appForLogin = express.Router();

appForLogin.post("/", (request, response)=>{
    console.log("Login credentials received from Client ")
    console.log(request.body)
    console.log(request.body.credentials);
    var decoded =  atob(request.body.credentials);
    console.log(decoded);

    var credentials = JSON.parse(decoded);
    console.log(credentials);
    
    if(credentials.username == "eshwar" &&
           credentials.password =="eshwar@123")
        {
            response.setHeader("Content-Type",
                                "application/json");
            var reply = {"isValid": "true"}
            response.write(JSON.stringify(reply));

        }
        else
        {
            response.setHeader("Content-Type",
            "application/json");
            var reply = {"isValid": "false"}
            response.write(JSON.stringify(reply))
        }

    response.end();
})

module.exports = appForLogin;