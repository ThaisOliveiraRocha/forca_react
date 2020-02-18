import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './carregaLista.css'
import logo from '../images/logo.png'

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
            preco: 0
        }
    }
    render(){
        return(
            <div className="card col-sm-3">
                <img src={logo} className="imagem card-img-top align-self-center" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">Titulo</h5>
                    <p className="card-text">sinopse</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">autor</li>
                    <li className="list-group-item">ano e situação</li>
                    <li className="list-group-item">Preço</li>
                </ul>
                <div className="card-body align-self-center">
                    <button class="btn btn-primary" type="submit">Comprar</button>
                </div>
            </div>
        )
    }
}

export default Card
