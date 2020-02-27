import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom'

import '../livraria.css'
import book from './../images/book_novo.svg'
import carrinho from '../images/carrinho_mercado.png'

const livros = JSON.parse(localStorage.getItem('livros'))

class Header extends Component {
    constructor (props){
        super(props)

        this.state = {
            qtd_carrinho: 0
        }

        this.atualizarQtdCarrinho = this.atualizarQtdCarrinho.bind(this);
        this.onClick = this.onClick.bind(this)
    }

    componentDidMount(){
        let tam = 0

        if(livros)
            tam =livros.reduce((aux, livro) => {
                aux = aux + livro.qtd
                return aux
            }, 0)

        this.setState({
            qtd_carrinho: tam
        })
        
    }

    atualizarQtdCarrinho(n){
        this.setState({
            qtd_carrinho: n,
        })
    }

    onClick() {
        if(this.state.qtd_carrinho > 0)
            window.location.href = '/carrinho'
        else
            window.location.href = '/livraria'
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
                            <Link to="/carrinho" className="texto_carrinho" onClick={this.onClick}>
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
