const express=require('express');
const dotenv=require('dotenv');
// const uploadRoute=require('./routes/uploadRoute');
// const userRoute=require('./routes/userRoute')
const cors=require('cors');
const mongoose=require('mongoose');
dotenv.config()

mongoose.connect(process.env.DBURI);

const app=express();
const port=process.env.PORT;

app.use(express.json());
app.use(cors());
app.use("/",uploadRoute)
app.use("/user",userRoute);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });