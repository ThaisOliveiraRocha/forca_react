import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from './header/Header'
import CarregaLista from './lista/CarregaLista'
import './livraria.css'

class Livraria extends Component {
    constructor(){
        super()
        this.state = {
            header: {},
        }
    }
    componentDidMount(){
        const header = this.refs.header;
        this.setState({
            header: header
        })
    }
    render(){
        return(
            <div className="livraria_todo">
                <Header ref='header' />
                <div className="livraria">                    
                    <CarregaLista func={this.state.header.atualizarQtdCarrinho}/>
                </div>
            </div>
        )
    }
}

export default Livraria
