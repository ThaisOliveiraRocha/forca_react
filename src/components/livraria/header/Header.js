import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import '../livraria.css'
import logo from './../images/logo.png'

class Header extends Component {
    render(){
        return(
            <div className="header">
                <nav className="navbar">
                    <div className="corpo_header">

                    </div>
                        <div className="circulo">
                            <img src={logo} className="imagemLogo d-inline-block" alt=""/>
                        </div>
                        <span className="texto">Livraria on-line</span>
                </nav>
            </div>
        )
    }
}

export default Header
