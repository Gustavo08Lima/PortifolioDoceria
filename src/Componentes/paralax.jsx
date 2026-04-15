import img from "../assets/fundo.avif"
import './Css/paralax.css'


function Paralax () {

    return (
     <div className="parallax">
        <span className="title"></span>
            <img className="paralax" src={img} alt="" />
            
     </div>
    )

}

export default Paralax

