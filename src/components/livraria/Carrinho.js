import React, {Component} from 'react'
import Header from './header/Header'

class Carrinho extends Component {
    constructor(props){
        super(props)

        this.state = {
            vet_carrinho: [{
                titulo: '',
                valor: 0,
            }],
            total_compra: 0
        }

        this.montarTabela = this.montarTabela.bind(this)
    }

    componentWillMount(){
        let vet_livros = []
        let carrinho = [{
            livro: '',
            preco: ''
        }]
        vet_livros = JSON.parse(localStorage.getItem('livros'))
        let soma = 0
        
        for(let index = 0; index < vet_livros.length; index++){
            carrinho[index] = {
                titulo: vet_livros[index].titulo,
                preco: vet_livros[index].valor
            }
            
            console.log("titulo=> " + carrinho[index].titulo + " preco==> " + carrinho[index].preco)
            soma += parseFloat(vet_livros[index].valor)
        }

        this.setState({
            vet_carrinho: carrinho,
            total_compra: soma
        })
    }

    montarTabela(){
        console.log(this.state.vet_carrinho)
        const vet_itensCarrinho = this.state.vet_carrinho
        
        for(let index= 0; index < vet_itensCarrinho; index++){
            console.log("titulo: " + vet_itensCarrinho[index].titulo + " preco: " + vet_itensCarrinho[index].preco)
        }
    }

    render() {
        return(
            <div className="">
                <Header />
                <div className="container">
                    <div className="form">
                        <div className="rol">
                            <div className="col">
                                Titulo
                            </div>
                            <div className="col">
                                Preco
                            </div>
                            <div className="col">
                                <button type="button" className="btn btn-danger" name="excluir" onClick={this.montarTabela}>
                                    X
                                </button>
                            </div>
                        </div>
                        <div className="rol">
                            <div className="col">
                                <span>
                                    Total da compra: {this.state.total_compra}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Carrinho