import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './carregaLista.css'

import Card from './Card'

class CarregaLista extends Component {
    render(){
        return(
            <div className="corpo">
                <Card />
            </div>
        )
    }
}

export default CarregaLista
