import Itens from './Itens'
import Bloco from './Bloco'
import './Css/Sobre.css'

import Boloc from "../assets/BoloC.jpg"
import cup from "../assets/confeiteiro.jpg"


import Paralax from './paralax'


function Doces() {
  return (
    <>
    <Paralax imagem={Boloc}/>

    
    <div className='Fundo'>

      <h3>Quem Somos</h3>

      <span className='Sobr'>
        <img className='pessoa' src={cup} alt="" />
        <p className='Perfil'>
      "CASA,Onde o afeto se torna sabor. <br /> Nascemos para transformar seus momentos mais especiais em memórias inesquecíveis. Criamos bolos artesanais com alma, onde cada detalhe é uma escolha feita com sensibilidade e cada ingrediente carrega uma intenção. Longe das produções em série, nossa confeitaria celebra a presença e o cuidado. Porque um bolo é mais que um doce; é um gesto de amor materializado. Se você acredita na beleza de celebrar a vida, você está em casa."
        </p>
      </span>

     
    </div>
   </>
  )
}

export default Doces