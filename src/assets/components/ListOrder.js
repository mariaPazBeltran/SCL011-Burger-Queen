import React from 'react';
import "./ListOrder.css"
//este componente muestra la tabla con el pedido realizado (enlistando los productos)
const ListOrder=(props)=>{
    let getProducts = Array.from(props.Products)
    return (
       <table className="Command">
         <thead>
           <tr>
           <td>Productos</td>
           
           </tr>
         </thead>
         <tbody>
           { getProducts.map((element, index) => {  
            return(
            <tr key={index}>
            <td>{element.product}</td>
           
          </tr>
            )
      })}
         </tbody>
       </table>
    );
  }
export default ListOrder;