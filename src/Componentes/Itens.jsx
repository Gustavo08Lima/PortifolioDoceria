
import "./Css/itens.css"

function Itens (props) {
    return (
    

        <div className="caixa">
          <span> <img className={`caixa2 ${props.estilo}`}  
           src={props.imagem} alt="" />
           {props.text} </span>  
        </div>
        

    )
}

export default Itens