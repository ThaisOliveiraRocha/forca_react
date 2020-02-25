import React, {Component} from 'react'
import './itemCarrinho.css'

class ItemCarrinho extends Component {
    render(){
        return(
            <div className="col colunaItem">
                <span className="campo">
                    Titulo
                </span>
                <span className="textoItem">
                    {this.props.item.titulo}
                </span>
                <span className="campo">
                    Preço
                </span>
                <span className="textoItem">
                    {this.props.item.preco}
                </span>
                <button type="button" className="btn btn-danger" name="excluir">
                    remover
                </button>
            </div>
        )
    }
}

export default ItemCarrinho

/* <ul className="list-group list-group-horizontal">
                    <li className="list-group-item">Titulo <b>{this.props.item.titulo}</b></li>
                    <li className="list-group-item">Preço <b>{this.props.item.preco}</b></li>
                </ul> */