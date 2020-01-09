import React, {Component} from 'react';
import './Menu.css'
//aqui se muestra la informacion de la data de product sobre la imagen, el nombre del producto y precio.
class Menu extends Component{
    
    render(){
        return  <div className="button-container">
            <button 
             onClick={this.props.clickItem.bind(this, this.props.infoproduct)}>
              <img  src={this.props.infoproduct.img} alt="icon"/>
              <div>
                <h6>{this.props.infoproduct.product}</h6>
                <h6>{this.props.infoproduct.price}</h6>
              </div>
            </button>
        </div>
        
    }
}


export default Menu;