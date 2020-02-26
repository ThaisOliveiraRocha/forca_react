import React, {Component} from 'react'
import './itemCarrinho.css'

class ItemCarrinho extends Component {
    render(){
        return(
            <div className="item list-group-item">
                <div className="titulo">
                    {this.props.item.titulo}
                </div>
                <div className="preco">
                    {this.props.item.preco}
                </div>
                <div className="btnRemover">
                    <button type="button" className="btn btn-danger" name="removerItem">
                        remover
                    </button>
                </div>
            </div>
        )
    }
}

export default ItemCarrinho
