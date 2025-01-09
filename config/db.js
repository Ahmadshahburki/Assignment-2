const mongoose=require('mongoose');

//connect to db

async function Connectdb(){
    console.log("connecting to db....");
    try{
        const conn=await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports=Connectdb;