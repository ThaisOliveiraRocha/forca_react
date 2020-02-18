import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import './home.css'

class Home extends Component {
    constructor(props){
        super(props)

        this.onClick = this.onClick.bind(this)
    }

    onClick(){
        console.log('lista')
        return <Link to="/lista" />
    }

    render(){
        return(
            <div>
                <h1>Home</h1>
                <div className="home">
                <div className="row">
                    <div className="col-sm-3">
                        <div className="card bg-transparent border-primary">
                            <h5 className="card-header bg-primary">Lista Itens</h5>
                            <div className="card-body">
                                <p className="card-text">Listar informações de usuário.</p>
                                <Link to="/lista" className="btn btn-primary">Lista Itens</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="card bg-transparent border-success">
                            <h5 className="card-header bg-success">Jogo da Forca</h5>
                            <div className="card-body">
                                <p className="card-text">Jogo da forca desenvolvido em React.</p>
                                <Link to="/forca" className="btn btn-success">Jogo da Forca</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="card bg-transparent border-danger">
                            <h5 className="card-header bg-danger">Livraria</h5>
                            <div className="card-body">
                                <p className="card-text">Sistema de venda de livros novos e usados.</p>
                                <Link to="/livraria" className="btn btn-danger">Livraria</Link>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                
                
            </div>
        )
    }
}

export default Home
