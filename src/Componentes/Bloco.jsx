import Itens from "./Itens"
import './Css/bloco.css'


function Bloco(props) {


    return(
        
        <span  style={{display:'flex', alignItems:'center'}  }>
            <Itens  imagem={props.img}  estilo="testes"/> 
        <p className="Descri">{props.text}</p>
        
        </span>
        
    )
   
}

export default Bloco