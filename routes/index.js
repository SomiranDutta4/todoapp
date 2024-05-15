const express=require('express');
const mainroute=express.Router();
console.log("router is set");
controller=require('../controllers/todocontroller');

mainroute.get('/',controller.servetask);
mainroute.post('/',controller.posttask);

module.exports=mainroute;