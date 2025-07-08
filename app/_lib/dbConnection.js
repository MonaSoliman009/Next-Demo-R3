import mongoose from "mongoose";



export function dbConnection(){

    mongoose.connect(process.env.DB_URL).then(()=>{
        console.log("connected to db successfuly");
        
    }).catch((err)=>{
        console.log(err);
        
    })
}