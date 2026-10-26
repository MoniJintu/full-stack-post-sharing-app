import React from 'react'
import{BrowserRouter, Route, Routes} from 'react-router-dom'
import Post from './components/Post'
import Feed from './components/Feed'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/post' element= {<Post/>}/>
        <Route path='/feed' element= {<Feed/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
