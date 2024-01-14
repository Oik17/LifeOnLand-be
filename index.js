const express=require('express');
const dotenv=require('dotenv');
//const uploadRoute=require('./routes/uploadRoute');
const userRoute=require('./routes/userRoute')
const apiRoute=require('./routes/apiRoute')
const cors=require('cors');
const mongoose=require('mongoose');
dotenv.config()

mongoose.connect(process.env.DB_URI);

const app=express();
const port=process.env.PORT;

app.use(express.json());
app.use(cors());
//app.use("/",uploadRoute)
// app.use("/",(req,res)=>{
//   res.send("hello")
// })
app.use("/user",userRoute);
app.use("/api", apiRoute)
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });