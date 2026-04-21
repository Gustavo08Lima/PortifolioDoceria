
import './Css/avaliacao.css'
import bolo from '../assets/Doces.jpg'
import cup from '../assets/cake.jpg'
import muffin from '../assets/muffin.jpg'
import Pcake from '../assets/piece-cake.jpg'
import M from '../assets/Mulher1.jpg'
import M1 from '../assets/mulher2.jpg'
import H from '../assets/homem.jpg'
import SaibaMais from './retangulo'
import { Link } from 'react-router-dom';


function Avaliacao () {

    return (
     
     <div className='secao'>

  <h3>Doces</h3>
         <div className='lista' style={{display:'flex', justifyContent:'center', gap: '5px', width:'100%'}}>
          
            <SaibaMais
             estilo="tamanho"
             candy={cup}
             text="Bolos artísticos e personalizados trabalhados exclusivamente com buttercream." 
             link="Saiba Mais"
             caminho="/Produtos"/>
            <SaibaMais
             estilo="tamanho"
             candy={muffin}
             text="Cupcakes recheados decorados com buttercream e detalhes decorativos em pasta americana." 
             link="Saiba Mais"
             caminho="/Produtos"/>
            <SaibaMais
            estilo="tamanho"
            candy={Pcake}
             text="Brigadeiros artesanais produzidos  com chocolate nobre e sem adição de nenhum aditivo e/ou conservante." 
             link="Saiba Mais"
             caminho="/Produtos"/>
            
         </div>

        <div id='Sobre'>
            <img className="imagem" src={bolo} alt="" />

            <span className='esc'>

                    <p>
                    Nascemos do desejo de transformar 
                    momentos em memórias.
                    Criamos bolos que encantam aos olhos, mas principalmente, tocam a alma.
                    Cada detalhe é pensado com intenção.
                    Cada escolha é feita com sensibilidade.
                    Cada criação carrega cuidado.
                    Se você acredita que celebrar é um ato de amor, você está no lugar certo.
                    </p>
                    <Link to="/Sobre" className='Linkando '>Saiba mais</Link>

            </span>
            
               
        </div>

        <div className='av'>
           
            <SaibaMais
             text="A cada bolo tem um história a ser contada e
            a Mônica soube desenhar essa história da forma mais linda possível. Sou extremamente Grata 
            a ela por estar comigo e abraçar sempre as minhas ideias e grata também a minha irmã que me apresentou o instagram e 
            eu pude conhecer de perto a arte em forma de bolos!" 
             estilo="exp"
             candy={M}
             nome="Cintia"/>
        
            <SaibaMais
             text="A minha experiência com o CASA Ateliê e a Mônica foi excelente desde
              o primeiro contato. Ela escuta os desejos dos clientes e ainda sugere melhorias.
              Quando o primeiro bolo chegou quase não acreditamos a lindeza, e o sabor então? Amamos! " 
              estilo="exp"
              candy={M1}
              nome="Angela"/>
        
            <SaibaMais
             text="trabalho incrível e impecável, do atendimento, a criação, até a fatia de bolo! Que por 
             sinal, QUE BOLO! Além de lindos, são realmente gostosos" 
              estilo="exp"
              candy={H}
              nome="Linea"/>
              
        
        </div>
     </div>
     
    )

}

export default Avaliacao

