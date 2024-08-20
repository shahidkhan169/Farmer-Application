const mongoose=require('mongoose')

const farmerproduct=new mongoose.Schema({
    prodid:{type:String,required:true},
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'FarmerReg',required: true },
    prodname:{type:String,required:true},
    type:{type:String,required:true},
    quantity:{type:String,required:true},
    type:{type:String,required:true},   
    price:{type:String,required:true},
    cultivatedDate:{type:Date,required:true},
    expiryDate:{type:Date,required:true}
})

const farmerProd=mongoose.model('FarmerProduct',farmerproduct);
module.exports=farmerProd;