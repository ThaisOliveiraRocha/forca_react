import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './carregaLista.css'

import Card from './Card'
import Livros from '../mock/livros.json'

class CarregaLista extends Component {
    render(){
        return(
            <div className="corpo">
                {Livros.map((livro, index) => 
                    <Card
                        livro={livro}
                        key={index} />
                )}
            </div>
        )
    }
}

export default CarregaLista
