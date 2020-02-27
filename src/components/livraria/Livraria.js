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
            busca: ''
        }

        this.procurarLivro = this.procurarLivro.bind(this)
    }
    
    componentDidMount(){
        const header = this.refs.header;
        this.setState({
            header: header
        })
    }

    procurarLivro(){
        let itemBusca = this.refs.info.value
        this.setState({
            busca: itemBusca
        })
        console.log("buscou por ", itemBusca)
    }

    render(){
        return(
            <div className="livraria_todo">
                <Header ref='header' />
                <div className="livraria">
                    <div className="pesquisar">
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Informe o gênero do livro" aria-label="Search" ref="info" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="button" onClick={this.procurarLivro}>Search</button>
                        </form>
                    </div>                    
                    <CarregaLista func={this.state.header.atualizarQtdCarrinho} buscarLivro={this.state.busca}/>
                </div>
            </div>
        )
    }
}

export default Livraria
