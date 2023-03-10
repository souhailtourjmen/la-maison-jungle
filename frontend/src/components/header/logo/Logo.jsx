import logoimg from '../../../assets/img/logo.webp'
import {Link} from "react-router-dom";
export default function logo () {

    return (
        <div className="logo">
            <Link to="/"><img src={logoimg}></img></Link>
        </div>
    )
}
