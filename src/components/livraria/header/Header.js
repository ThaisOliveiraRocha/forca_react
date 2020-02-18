import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import logo from './../images/logo.png'

class Header extends Component {
    render(){
        return(
            <div>
                <nav className="navbar navbar-light bg-light">
                    <a className="navbar-brand">
                        <img src={logo} width="50" height="50" className="d-inline-block"/>
                        Livraria on-line
                    </a>
                </nav>
            </div>
        )
    }
}

export default Header
