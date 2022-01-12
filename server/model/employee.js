
const mongoose = require('mongoose');


const EmployeeSchema = new mongoose.Schema({
  
    name : {
        type:String,
        required:true
    },
    salary : {
        type:String,
        required:true
    },
    address : {
        type:String,
        required:true
    },
    team : {
        type:String,
        required:true
    },
    gender : {
        type:String,
        required:true
    },
    date : {
        type:Date,
        default:Date.now
    }
});



module.exports = mongoose.model("Employee_Table", EmployeeSchema )  