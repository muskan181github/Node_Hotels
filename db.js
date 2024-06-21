const mongoose=require('mongoose')
require('dotenv').config();
//define the mongodb connection url
const mongodbUrl=process.env.DB_URL;

//setUp mongoose
mongoose.connect(mongodbUrl,{
  useNewURLparser:true,//required parameters
  useUnifiedTopology:true
})
const db=mongoose.connection;
db.on('connected',()=>{
  console.log('Connected to MongoDB server')
})
db.on('disconnected',()=>{
  console.log('disConnected to MongoDB server')
})
db.on('error',(err)=>{
  console.error('Error to MongoDB server',err)
})
module.exports=db;