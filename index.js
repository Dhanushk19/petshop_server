const express=require('express');
const mongoose=require('mongoose');
const app=express();
const cors= require('cors');

const ShopModel=require('./models/Shop.js');

app.use(express.json());
app.use(cors());

require("dotenv").config();


mongoose.connect("mongodb+srv://Dhanush:20itr019@Cluster1.dkben6h.mongodb.net/petshop?retryWrites=true&w=majority",
{
    usenewUrlParser:true,
});




app.post("/insert",async (req,res)=>{
   const emailid=req.body.emailid
   const ownername=req.body.ownername
    const petType=req.body.petType
    const BreedType=req.body.BreedType
    const Age=req.body.Age
    const Gender=req.body.Gender
    const medcert=req.body.medcert
    const photo=req.body.photo
    const Landmark=req.body.Landmark
    const District=req.body.District
    const Pincode=req.body.Pincode
    const State=req.body.State


    const shop=new ShopModel({
        emailid:emailid,
        ownername:ownername,
        petType: petType,
        BreedType:BreedType,
        Age:Age,
        Gender :Gender,
        medcert:medcert,
        photo:photo,
        Landmark :Landmark,
        District :District,
        Pincode:Pincode,
        State:State});

    try{
        await shop.save();
        console.log(shop);
        res.send("inserted data");
    }
    catch(err)
    {
        console.log(err);
    }
});

//show
app.get("/show",async (req,res)=>{
    ShopModel.find({}, (err, result) => {
        if (err) {
            res.send(err)
        }
        res.json(result);
    })

})
app.get("/more/:id",async (req,res)=>{
    const {id}=req.params
    
    const more=await ShopModel.findById(id)
    res.status(200).json(more)

})

app.post("/delete", async (req, res) => {
    
    const emailid1 = req.body.emailid;
    const petType1 =req.body.petType;
    const breedType1=req.body.breedType;
    const photo=req.body.photo;
    
    const result = await ShopModel.findOneAndDelete({$and: [{emailid :emailid1},{petType :petType1},{breedType:breedType1},{photo:photo}]  });
    console.log(result);
    console.log("deleted");
    res.end();
})

app.listen( process.env.PORT || 3001,()=>{
    console.log("Server running in the port 3001...");

});