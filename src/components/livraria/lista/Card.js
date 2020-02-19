import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './card.css'

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
        let book = livro.imagem

        this.setState({
            imagem: require('../images/'+book),
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
        console.log(this.props.livro.imagem)

        return(
            <div className="card col-sm-3">
                <img src={this.state.imagem} className="imagem card-img-top align-self-center" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">{this.state.titulo}</h5>
                </div>
                <ul className="list-group list-group-flux">
                    <li className="list-group-item">{this.state.autor}</li>
                    <li className="list-group-item">{this.state.ano}</li>
                    <li className="list-group-item">{this.state.sinopse}</li>
                </ul>
                <ul className="list-group list-group-horizontal align-item-streach">
                    <li className="list-group-item" ref="preco" value={this.state.preco}>R$ {this.state.preco}</li>
                    <li className="list-group-item">{this.state.situacao}</li>
                </ul>
                <div className="card-body align-self-center">
                    <button className="btn" type="submit" onClick={this.onClick}>Comprar</button>
                </div>
            </div>
        )
    }
}

export default Card
