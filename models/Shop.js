const mongoose=require ('mongoose');

const  SellSchema= new mongoose.Schema({
    emailid:
    {
        type:String,

    },
    ownername:
    {
        type: String,
    },
    petType:
    {
        type: String,
        
    },
    BreedType:
    {
        type: String,
        
    },
    Age:
    {
        type: String,
        
    },
    Gender:
    {
        type: String,
        
    },
    medcert:
    {
        type: String,
        
    },
    photo:
    {
        type: String,
        
    },
    Landmark:
    {
        type: String,
        
    },
    District:
    {
        type: String,
        
    },
    Pincode:
    {
        type: Number,
        
    },
    State:
    {
        type: String,
        
    },
   

});


const Shop= mongoose.model("sell",SellSchema)
module.exports=Shop;