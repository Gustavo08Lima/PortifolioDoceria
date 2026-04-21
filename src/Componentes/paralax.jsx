import img from "../assets/fundo.avif"
import './Css/paralax.css'


function Paralax (props) {

    return (
     <div className="parallax">
        <span className="title"></span>
            <img className="paralax" src={props.imagem} alt="" />
            
     </div>
    )

}

export default Paralax

