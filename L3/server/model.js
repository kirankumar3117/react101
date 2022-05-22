const mongoose=require("mongoose");

const homeSchema=new mongoose.Schema({
    name:{type:String,required:true},
    image:{type:String,required:true},
    food:{type:Array},
    offer:{type:Number,required:true},
    price:{type:Number,required:true},
    min:{type:Number,required:true},
    rating:{type:Number,required:true},
    id:{type:Number,required:true},

    //star:{type:Number,required:true},

},{
    versionKey:false
});

const Fooddata= mongoose.model("food",homeSchema);

module.exports=Fooddata;

