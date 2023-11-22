const express=require("express")
const mongoose=require('mongoose')
const cors=require('cors')
require('dotenv').config()
const bodyParser=require('body-parser')
const Routes=require('./routes/routes.js')


const app=express()
const PORT=process.env.PORT||8000

//middleware 
app.use(express.json())                                                                        
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log(`databse connected`))
.catch(err=>console.log("error while connnecting database",err));


app.use('/',Routes)


app.listen(PORT,()=>console.log(`backend is running on port ${PORT}`))