const mongoose=require('mongoose')

//define the mongodb connection url
// const mongoURL1='mongodb://localhost:27017/hotels'
const mongoURL='mongodb+srv://vermamuskan181:Muskan7074@cluster0.9sqclgh.mongodb.net/';
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