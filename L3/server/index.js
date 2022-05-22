const express=require("express");

const app=express();

const Foodcontroller=require("./controler")

const cors=require("cors")


app.use(cors());

app.use(express.json());

app.use("/food",Foodcontroller)

module.exports=app