const mongoose = require('mongoose');

const connectDB = async()=>{
    try{
        //mongodb connection string
        const conn = await mongoose.connect(process.env.DATA_URI, {
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useFindAndModify:false,
            useCreateIndex:true
        })
        console.log(`MongoDB connected : ${conn.connection.host}`);
    }catch(e){
        console.log(e);
        process.exit(1);
    }
}

module.exports = connectDB;