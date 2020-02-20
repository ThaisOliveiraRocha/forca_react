import React, {Component} from 'react'

class Carrinho extends Component {
    constructor(props){
        super(props)

        this.state = {
            titulo: '',
            valor: 0,
            total_compra: 0
        }
    }

    componentWillMount(){
        let vet_livros = []
        vet_livros = JSON.parse(localStorage.getItem('livros'))
        let soma = 0
        
        if(vet_livros.length > 0){
            for(let index = 0; index <= vet_livros.length; index++){
                soma += parseFloat(vet_livros[index].valor)   
                console.log("valor: " + vet_livros[index].valor + "soma atual" + soma)
            }
        }

        this.setState({
            total_compra: soma
        })
    }

    render() {
        return(
            <div className="container">
                <ul className="list-group">
                    <li className="list-group-item" >Titulos</li>
                    <li className="list-group-item">Total da compra: {this.state.total_compra}</li>
                </ul>
            </div>
        )
    }
}

export default Carrinho