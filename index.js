const port=800;
const express=require('express');
const app=express();
app.use(express.static('assets'));
app.set('views','./views');
app.set('view engine','ejs');
// const path=require('path');
// app.use(express.json());
app.use(express.urlencoded());

app.use('/',require('./routes/index'));
app.listen(port,function(err){
    if(err){console.log("error setting up sever");
        return
    }else{
        console.log("successfully set up server with port:",port);
    }
})