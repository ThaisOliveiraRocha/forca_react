import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom'

import '../livraria.css'
import book from './../images/book_novo.svg'


import carrinho from '../images/carrinho_mercado.png'

class Header extends Component {
    constructor (props){
        super(props)

        this.state = {
            qtd_carrinho: 0
        }

        this.atualizarQtdCarrinho = this.atualizarQtdCarrinho.bind(this);
    }

    componentDidMount(){
        const vet_carrinho = JSON.parse(localStorage.getItem('livros'))
        let tam = 0

        if(vet_carrinho)
            tam = vet_carrinho.length

        this.setState({
            qtd_carrinho: tam
        })
        
    }

    atualizarQtdCarrinho(n){
        this.setState({
            qtd_carrinho: n,
        })
    }

    render(){
        return(
            <div className="corpo_header">
                <div className="row">
                    <div className="col-1">
                        <div className="">
                            <img src={book} className="imagemLogo" alt=""/>
                        </div>
                    </div>
                    <div className="col-6 coluna_txt">
                        <span className="texto">Livraria on-line</span>
                    </div>
                    <div className="col coluna_carrinho">
                        <div className="carrinho">
                            <img className="img_carrinho" src={carrinho} alt=""/>
                            <Link to="/carrinho" className="texto_carrinho">
                                Meu Carrinho
                                <span className="badge badge-danger badge-pill">{this.state.qtd_carrinho}</span>    
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header
