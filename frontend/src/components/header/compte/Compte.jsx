import { FaRegUser } from "react-icons/fa";
import {Link} from "react-router-dom";
let Compte=()=>{
    return(
        <>
            <Link className="signin" to="/signin"><FaRegUser/>SignIn</Link>
        </>
        )
}
export default Compte;