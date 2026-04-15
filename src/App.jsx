import { useState } from 'react'
import "./Componentes/Css/App.css"

import PaginaProdutos from './Componentes/Produtos'
import Doces from './Componentes/Doces'
import Header from './Componentes/header'
import Footer from './Componentes/Footer'
import Paralax from './Componentes/paralax'

import Avaliacao from './Componentes/Avaliacoes'
import { BrowserRouter, Routes, Route } from 'react-router-dom'






function App() {
  return(
   

    <BrowserRouter>
    <Header/>

    <div style={{ height: '15vh' }}></div>
    <Routes>
      <Route path='/' element={

       <>
        <Paralax/> 
 
  <Avaliacao />
      </> 
  
      } />
      
      <Route path='/Produtos' element={<PaginaProdutos/>} /> 
      <Route path='/Doces' element={<Doces/>} /> 
    </Routes>

    <Footer/>
  </BrowserRouter>
  

  

)
}

export default App
