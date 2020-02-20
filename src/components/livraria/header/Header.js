import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom'

import '../livraria.css'
import logo from './../images/logo.png'
import carrinho from '../images/carrinho_mercado.png'

class Header extends Component {
    render(){
        return(
            <div className="corpo_header">
                <div className="row">
                    <div className="col-1">
                        <div className="circulo">
                            <img src={logo} className="imagemLogo" alt=""/>
                        </div>
                    </div>
                    <div className="col-6 coluna_txt">
                        <span className="texto">Livraria on-line</span>
                    </div>
                    <div className="col coluna_carrinho">
                        <div className="carrinho">
                            <img className="img_carrinho" src={carrinho} alt=""/>
                            <Link to="/carrinho" className="texto_carrinho">Meu Carrinho</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header
