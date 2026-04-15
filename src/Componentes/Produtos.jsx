import Itens from './Itens'
import Bloco from './Bloco'
import './Css/produtos.css'
import cup from "../assets/cupcake.webp"
import muffin from "../assets/muffin.jpg"
import cake from "../assets/cake.jpg"
import Pcake from "../assets/piece-cake.jpg"
import brigadeiro from "../assets/brigadeir.jpg"
import brigadeiroW from "../assets/brigadeir-white.jpg"


function PaginaProdutos() {
  return (
    <>

    <div style={{ height: '15vh' }}></div>
    <h1 style={{display:'flex', alignItems:'center',justifyContent:'center', marginBottom:'5rem'}}>Opções</h1>
     <span  className='Categorias'  style={{display:'flex'}}> 
      
     <a href="#bolo"><Itens text="Bolo" imagem={cake}/></a> 
     <a href="#Cup"><Itens text="Cupcakes" imagem={cup}/></a>
     <a href="#Brigadeiro"><Itens text="Brigadeiros" imagem={brigadeiro}/></a> 
      </span>

      
    
    
     <div className='doces' >
      <br />
      <h1 id='bolo'>Bolos</h1>
      <span> 
      <Bloco text="Fatia de bolo de chocolate artesanal, com massa úmida e densa, generosamente recheada e coberta por uma ganache de chocolate acetinada, finalizada com um morango fresco suculento que traz equilíbrio e sofisticação à sobremesa." img={cake}/> 
      <Bloco text="Uma fatia requintada de Tiramisù artesanal, montada em camadas impecáveis de pão de ló embebido em café e creme leve de mascarpone, finalizada com uma generosa chuva de cacau em pó e calda de chocolate belga para uma experiência clássica e equilibrada." img={Pcake}/>
      </span>
       <br />
      <h1 id='Cup'>Cupcakes</h1>
      <span className='Cup'> 
      <Bloco text="Cupcakes temáticos de Páscoa, decorados com um delicado swirl de buttercream rosa claro, granulados coloridos e charmosas orelhas de coelho em pasta americana, apresentados em um suporte de madeira que ressalta o cuidado artesanal e a doçura da celebração." img={cup}/> 
      <Bloco text="Muffin fofinho e dourado, polvilhado com açúcar de confeiteiro e generosamente coroado por groselhas vermelhas e pretas frescas, finalizado com um toque de hortelã para uma explosão de sabor frutado e refrescante." img={muffin}/>
      </span>
       <br />
      <h1 id='Brigadeiro'>Brigadeiros</h1>
      <span > 
      <Bloco text="Muffin fofinho e dourado, polvilhado com açúcar de confeiteiro e generosamente coroado por groselhas vermelhas e pretas frescas, finalizado com um toque de hortelã para uma explosão de sabor frutado e refrescante." img={brigadeiro}/> 
      <Bloco text="Brigadeiro gourmet artesanal de textura cremosa, envolto em generosos confeitos de chocolate ao leite crocantes, apresentado em uma delicada forminha amarela que realça seu visual clássico e irresistível." img={brigadeiroW}/>
      </span>
       <br />
     
     </div>
    </>
  )
}

export default PaginaProdutos