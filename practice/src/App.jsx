import React from 'react'
import Home from './pages/Home'
import Product from './pages/Product'
import { Routes,Route } from "react-router-dom";
import Nav from './components/Nav'
import About from './pages/About';
import Courses from './pages/Courses';
import AnyCourse, {  } from "./pages/AnyCourse";
import CourseDetail, {  } from "./pages/CourseDetail";
import NotFound, {  } from "./pages/NotFound";
import Men from "./pages/Men";
import Women from "./pages/Women";



const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/product/men' element={<Men />} />
        <Route path='/product/women' element={<Women />} />

        <Route path='/courses/:id' element={<AnyCourse/>}/>
        <Route path='/courses/:id/details' element={<CourseDetail/>}/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default App
