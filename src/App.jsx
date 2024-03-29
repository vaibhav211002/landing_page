import React from 'react'
import Home from './Home'
import About from './About'
import Blog from './Blog'
import Contact from './Contact'
import { BrowserRouter as Router , Routes , Link  ,Route } from 'react-router-dom'
import Navbar from './Navbar'

function App() {
  return (
    <div>
        <Router>
            <Navbar/>
            <Routes>    
                <Route exact path="/" element={<Home/>} />
                <Route path="/About"   element={<About/>} />
                <Route exact path="/Blog" element={<Blog/>} />
                <Route path="/Contact"   element={<Contact/>} />
            </Routes>
        </Router>
    </div>
  )
}

export default App