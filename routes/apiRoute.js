const express = require('express');
const router = express.Router();
const getNews= require("../controllers/news")

router.get("/news", async (req,res) =>{
    getNews(req,res);
})

module.exports=router