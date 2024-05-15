const express=require('express');
const todoRouter=express.Router();
const todocontroller=require('../controllers/todocontroller');

todoRouter.get('/Task',todocontroller.servetask);
module.exports=todoRouter;