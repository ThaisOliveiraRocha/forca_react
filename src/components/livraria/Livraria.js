import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from './header/Header'
import CarregaLista from './lista/CarregaLista'
import './livraria.css'

class Livraria extends Component {
    render(){
        return(
            <div className="livraria">
                <Header />
                <CarregaLista />
            </div>
        )
    }
}

export default Livraria
