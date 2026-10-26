const express = require("express")
const multer = require('multer')
const uploadFile = require('./services/storage.services')
const postModel = require('./models/post.models')
const cors = require("cors")

const app = express()


// middleware
app.use(express.json())
app.use(cors())
const uploads = multer({storage: multer.memoryStorage()})

//create post api
app.post("/create-post",uploads.single('image'), async(req,res)=>{
    console.log(req.body.Caption)
    console.log(req.file)
    const result = await uploadFile(req.file.buffer)
    
    const post = await postModel.create({
        image : result.url,
        caption : req.body.Caption
    })
    
    res.status(201).json({
        message : 'image and caption uploaded',
        post
    })
})

//creating the get api
app.get("/posts", async(req,res)=>{
    const posts = await postModel.find()

    res.status(200).json({
        message : 'displaying posts',
        posts
    })
})


module.exports = app