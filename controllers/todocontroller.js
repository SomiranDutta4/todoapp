const db=require('../config/posttask');
const Tasks=require('../models/todolistschema');
const express=require('express');

module.exports.servetask=function(req,res){
    Tasks.find({}).then(tasksfound=>{
        console.log("fetched data");
        return res.render('ToDo',{'tasks':tasksfound});
    }).catch(error=>{
        console.log("error finding database");
        return;
    });
}
module.exports.posttask=function(req,res){
    console.log(req.body);
    Tasks.create({
        Description:req.body.Description,
        Category:req.body.Category,
        Date:req.body.Date
    }).then(createdtask=>{
        console.log(createdtask);
        return res.redirect('back');
    }).catch(err=>{
        console.log(err);
        return res.redirect('back');
    })
}