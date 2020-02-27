import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import './carregaLista.css'

import Card from './Card'
import Livros from '../mock/livros.json'


class CarregaLista extends Component {
    render(){
        const buscarGenero = Livros.filter(livro => livro.genero === this.props.buscarLivro)
        return(
            <div className="corpo">
                {
                    buscarGenero.length ? 
                        buscarGenero.map((item, index) => 
                            <Card
                                livro={item}
                                key={index}
                                func={this.props.func} />) :
                        Livros.map((livro, index) => 
                            <Card
                                livro={livro}
                                key={index}
                                func={this.props.func} />)
                }
            </div>
        )
    }
}

export default CarregaLista
