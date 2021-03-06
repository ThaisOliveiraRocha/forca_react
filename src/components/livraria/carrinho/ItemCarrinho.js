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
                    R${this.props.item.preco}
                </div>
                <div className="quantidade">
                    {this.props.item.qtd}
                </div>
                <div className="btnLista">
                    <button type="button" className="btn btnFuncao btn-danger" name="removerItem">
                        Remover
                    </button>
                </div>
            </div>
        )
    }
}

export default ItemCarrinho
