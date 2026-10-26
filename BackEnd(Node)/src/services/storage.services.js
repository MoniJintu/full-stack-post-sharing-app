const Imagekit = require('@imagekit/nodejs') 

const client = new Imagekit({
    
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY
})

const uploadFile = async(buffer)=>{
    const response = await client.files.upload({
        file : buffer.toString('base64') ,
        fileName: 'file.jpg'
    })
    return response
}

module.exports = uploadFile;