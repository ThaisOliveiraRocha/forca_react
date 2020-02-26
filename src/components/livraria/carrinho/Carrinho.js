import React, {Component} from 'react'
import Header from '../header/Header'
import ItemCarrinho from '../carrinho/ItemCarrinho'
import './itemCarrinho.css'

class Carrinho extends Component {
    constructor(props){
        super(props)

        this.state = {
            vet_carrinho: [{
                titulo: '',
                valor: 0
            }],
            total_compra: 0
        }

        this.onClick = this.onClick.bind(this)
    }

    componentWillMount(){
        let vet_livros = []
        let carrinho = [{
            titulo: '',
            preco: ''
        }]
        vet_livros = JSON.parse(localStorage.getItem('livros'))
        let soma = 0

        for(let index=0; index < vet_livros.length; index++){
            carrinho[index] = {
                titulo:  vet_livros[index].titulo,
                preco: vet_livros[index].valor
            }
            soma += parseFloat(vet_livros[index].valor)
        }

        this.setState({
            vet_carrinho: carrinho,
            total_compra: soma
        })
    }

    onClick() {
        alert('Compra finalizada com sucesso!')
    }

    render() {
        return(
            <div className="componente">
                <div className="header">
                    <Header />
                </div>
                <div className="corpoCarrinho list-group">
                    {
                        this.state.vet_carrinho.map((item, index) => 
                            <ItemCarrinho
                                item={item}
                                key={index}
                            />
                        )
                    }
                </div>
                <div className="footer">
                    <div className="textoTotal">
                        <span>
                            Total da compra: {this.state.total_compra}
                        </span>
                    </div>
                    <div className="btnFinalizar">
                        <button type="button" className="btn btn-success" onClick={this.onClick}>
                            Finalizar compra
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Carrinho