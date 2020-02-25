import React, {Component} from 'react'

class ItemCarrinho extends Component {
    render(){
        return(
            <div>
                <ul className="list-group list-group-horizontal">
                    <li className="list-group-item">Titulo <b>{this.props.item.titulo}</b></li>
                    <li className="list-group-item">Preço <b>{this.props.item.preco}</b></li>
                </ul>
            </div>
        )
    }
}

export default ItemCarrinho
