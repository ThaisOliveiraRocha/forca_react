import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './carregaLista.css'

import book1 from '../images/book1.png'
import book2 from '../images/book2.png'
import book3 from '../images/book3.png'
import book4 from '../images/book4.png'
import book5 from '../images/book5.png'

class Card extends Component {
    constructor(props){
        super(props)

        this.state = {
            imagem: '',
            titulo: '',
            sinopse: '',
            autor: '',
            ano: '',
            situacao: '',
            preco: 0,
            total: 0,
            indice: 0
        }

        this.onClick = this.onClick.bind(this)
    }

    componentWillMount(){
        const livro = this.props.livro
        
        this.setState({
            imagem: livro.imagem,
            titulo: livro.titulo,
            sinopse: livro.sinopse,
            autor: livro.autor,
            ano: livro.ano,
            situacao: livro.situacao,
            preco: livro.preco
        })
    }

    onClick(){
        let atual = this.state.total
        let soma = 0
        soma = atual + this.refs.preco.value

        this.setState({
           total: soma
        })

        console.log(this.state.total)
    }

    render(){
        return(
            <div className="card col-sm-3">
                <img src={book2} className="imagem card-img-top align-self-center" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">{this.state.titulo}</h5>
                    <p className="card-text">{this.state.sinopse}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{this.state.autor}</li>
                    <li className="list-group-item">{this.state.ano} e {this.state.situacao}</li>
                    <li className="list-group-item" ref="preco" value={this.state.preco}>{this.state.preco}</li>
                </ul>
                <div className="card-body align-self-center">
                    <button className="btn btn-primary" type="submit" onClick={this.onClick}>Comprar</button>
                </div>
            </div>
        )
    }
}

export default Card
