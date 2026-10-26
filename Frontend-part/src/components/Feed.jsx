import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'

const Feed = () => {
  const location = useLocation()

  const [posts, setPosts] = useState([
    {
      _id: 1,
      image: "https://www.shutterstock.com/shutterstock/photos/2286554497/display_1500/stock-photo-random-pictures-cute-and-funny-2286554497.jpg",
      caption: "Beautiful image"
    }

  ])
  useEffect(() => {
    axios.get("http://localhost:3000/posts")
    .then((res)=>{
      console.log(res.data.posts)
      setPosts(res.data.posts)
    })
  }, [location.key])
  

  return (
    <div className='flex items-center justify-center h-screen w-full bg-gray-800'>
      <div className=' h-[90%] w-[93%] flex gap-8 justify-baseline items-baseline p-8 flex-wrap overflow-y-auto'>
        {posts.map((post) => {
          return(
            <div key={post._id} className=' h-[45%] w-[18%] text-center' >
            <img className='object-cover w-full h-[80%] rounded'  src={post.image} alt="This is alt" />
             <h3 className='my-2 text-white'>{post.caption}</h3>
          </div>
          )
        })}
        {/* <div className=' h-[45%] w-[18%] text-center' >
          <img className='object-cover w-full h-[80%] rounded' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTFhj3WcsI_gNq_LE0jwi1xoIDZcciJGnKWhITRz42ovugRB78pyiDY1ZH&s=10"/>
          <h3 className='my-2'>This is first Post</h3>
        </div> */}

      </div>

    </div>
  )
}

export default Feed
