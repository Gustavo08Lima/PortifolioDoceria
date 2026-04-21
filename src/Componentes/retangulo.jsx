import './Css/retangulo.css'
import { Link } from 'react-router-dom';


function SaibaMais (props){
    return (
        
        <div style={{display:'flex', gap:"50px"}}>

            <span className='squad'>
                <img className={props.estilo} src={props.candy} alt="" />
                <p>{props.text}</p> 
                <h4>{props.nome}</h4>
               
               
               
                {props.link && (
        <Link className="Linkando" to={props.caminho}>
          {props.link}
        </Link>
      )}
            </span>


        </div>
 
    )
}


export default SaibaMais