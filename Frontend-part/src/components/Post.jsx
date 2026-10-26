import axios from 'axios'
import React, { use, useState } from 'react'
import {useNavigate} from 'react-router-dom'


const Post = () => {
    const navigate = useNavigate()

    const [imgData, setImgData] = useState(null)

    const [caption, setCaption] = useState("")

    const submitForm = async(e)=>{
        e.preventDefault()

        const formData = new FormData()
        formData.append("image", imgData)
        formData.append("Caption", caption)

        await axios.post("http://localhost:3000/create-post" , formData)
        .then((res)=>{
            console.log(res)
        })
        navigate("/feed")
        
    }
    const captionChanging=(e)=>{
        setCaption(e.target.value)
    }
    const imageHandler =(e)=>{
        setImgData(e.target.files[0])
    }
    return (
        <div className='flex justify-center items-center w-full h-screen bg-mist-800 text-gray-200'>
            <div className='flex flex-col items-center  '>
            <h1 className='font-bold text-2xl'>Create Post</h1>
            <form onSubmit={(e)=>{
                submitForm(e)
            }}
             className="space-y-5 my-10 flex flex-col items-center">
                <input
                    type="file"
                    accept='image/*'
                    onChange={(e)=>{
                        imageHandler(e)
                    }}
                    className="w-full rounded-lg border border-gray-400 p-2 text-sm text-gray-400 file:px-4   file:text-white"
                />
                <input
                onChange={(e)=>{
                    captionChanging(e)
                }}
                 type="text" 
                 placeholder='Enter Caption'
                 value={caption}
                 className='border border-gray-400  w-full h-8 px-4 py-2 rounded-lg' 
                 />
                 <button className='bg-slate-600 rounded-lg py-1 px-3'>Submit</button>
            </form>
        </div>
        </div>
    )
}

export default Post
