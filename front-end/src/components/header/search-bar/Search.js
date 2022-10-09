import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
let search=()=>{
    return(
        <>
       <from  className="search-form">
            <input type="search" placeholder="Search" name="search" className="search"></input>
            <FontAwesomeIcon icon={faSearch} />
       </from>
        </>
    )
}
export default search;