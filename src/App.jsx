
import "./Componentes/Css/App.css"
import img from "./assets/fundo.avif"
import PaginaProdutos from './Componentes/Produtos'
import Doces from './Componentes/Sobre'
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
        <Paralax imagem={img}/> 
 
  <Avaliacao />
      </> 
  
      } />
      
      <Route path='/Produtos' element={<PaginaProdutos/>} /> 
      <Route path='/Sobre' element={<Doces/>} /> 
    </Routes>

    <Footer/>
  </BrowserRouter>
  

  

)
}

export default App
