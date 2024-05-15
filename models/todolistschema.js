const mongoose=require('mongoose');
let todotasks=new mongoose.Schema({
    Description:{
        type:String,
        required:true
    },
    Category:{
        type:String,
        required:true
    },
    Date:{
        type:Date,
        required:true
    }
});

const Tasks=mongoose.model('Tasks',todotasks);
module.exports=Tasks;
