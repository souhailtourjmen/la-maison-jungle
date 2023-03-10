import {Link} from "react-router-dom";
export default function Item(param) {
    let link="/"+param.name;
    return(
        <>
            <Link to={link}><h3>{param.name}</h3></Link>
        </>
          
        )
}