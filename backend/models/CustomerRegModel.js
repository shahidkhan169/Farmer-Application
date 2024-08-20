const mongoose=require('mongoose');

const customerRegSchema=new mongoose.Schema({
    name:{String:true,required:true},
    dob:{type:Date,required:true},
    gender:{type:String,required:true},
    phoneNUmber:{type:Number,required:true,unique:true},
    AadharNumber:{type:Number,required:true},
    village:{type:String},
    city:{type:String},
    district:{type:String,required:true},
    state:{type:String,required:true},
    postalcode:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true}
})

const customerReg=mongoose.model('FarmerRegistration',customerRegSchema);
module.exports=customerReg;