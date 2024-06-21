const mongoose=require('mongoose')

//define the mongodb connection url
const mongoURL='mongodb://localhost:27017/hotels'
//setUp mongoose
mongoose.connect(mongoURL,{
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