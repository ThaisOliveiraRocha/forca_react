import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './header/Header'
import CarregaLista from './lista/CarregaLista'

class Livraria extends Component {
    render(){
        return(
            <div className="">
                <Header />
                <CarregaLista />
            </div>
        )
    }
}

export default Livraria
