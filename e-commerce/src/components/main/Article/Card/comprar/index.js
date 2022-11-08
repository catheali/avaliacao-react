import { Link } from "react-router-dom";
import "./index.css";
export default function Comprar(){
    return(
        <Link to="/produtos">
        <button className="bttn">Comprar</button>
        </Link>
    )
}