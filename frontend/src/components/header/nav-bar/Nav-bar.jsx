import React from 'react' ;
import {list_catalog} from '../../../helpers/Controler';
import Item from './Item';



function list_nav(){
      let html=list_catalog.map((item)=>
       <Item name={item.name}></Item>
       )
       return html;
}

export default function Nav() {
    return (
        <>
          {list_nav()}
        </>
   
 
    )
}