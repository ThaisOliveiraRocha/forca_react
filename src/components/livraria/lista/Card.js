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
            qtd_livros: 0,
            carrinho: [{
                nome_livro: '',
                valor: 0
            }]
        }

        this.qtd_livrosAdd = 0
        this.livros = []
        this.onClick = this.onClick.bind(this)
    }

    UNSAFE_componentWillMount(){
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
        let titulo = this.state.titulo
        let preco = this.state.preco

        let vet_livros = JSON.parse(localStorage.getItem('livros'))
        if(vet_livros)
            vet_livros[vet_livros.length] = {titulo: titulo, valor: preco}
        else
            vet_livros = [{titulo: titulo, valor: preco}]

        localStorage.setItem('livros', JSON.stringify(vet_livros))
        this.props.func(vet_livros.length)
    }

    render(){ 
        return(
            <div className="card col-sm-3">
                <img src={this.state.imagem} className="imagem card-img-top align-self-center" alt=""/>
                <div className="card-body">
                    <h5 className="card-title" ref="titulo">{this.state.titulo}</h5>
                </div>
                <ul className="list-group list-group-flux">
                    <li className="list-group-item">{this.state.autor}</li>
                    <li className="list-group-item">{this.state.ano}</li>
                    <a href="#" className="list-group-item list-group-item-action">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="text-muted">Sinopse</h5>
                        </div>
                        <p className="text-muted">{this.state.sinopse}</p>
                    </a>

                    <li className="list-group-item" ref="preco">R$ {this.state.preco}</li>
                    <li className="list-group-item">{this.state.situacao}</li>
                </ul>
                <div className="card-body align-self-center">
                    <button className="btn btn_card" type="submit" onClick={this.onClick}>Comprar</button>
                </div>
            </div>            
        )
    }
}

export default Card
