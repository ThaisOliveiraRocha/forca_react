import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './carregaLista.css'
import logo from '../images/logo.png'

class CarregaLista extends Component {
    render(){
        return(
            <div className="card col-sm-3">
                <img src={logo} className="imagem card-img-top align-self-center" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Cras justo odio</li>
                    <li className="list-group-item">Dapibus ac facilisis in</li>
                    <li className="list-group-item">Vestibulum at eros</li>
                </ul>
                <div className="card-body">
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                </div>
            </div>
        )
    }
}

export default CarregaLista
