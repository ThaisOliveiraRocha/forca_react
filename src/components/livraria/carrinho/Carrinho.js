import React, {Component} from 'react'
import Header from '../header/Header'
import ItemCarrinho from '../carrinho/ItemCarrinho'
import './itemCarrinho.css'
import lixeiraIcone from '../images/excluir.png'

class Carrinho extends Component {
    constructor(props){
        super(props)

        this.state = {
            vet_carrinho: [{
                titulo: '',
                valor: 0,
                qtd: 0
            }],
            total_compra: 0
        }

        this.onClickFinalizar = this.onClickFinalizar.bind(this)
        this.onClickCancelar = this.onClickCancelar.bind(this)
    }

    componentWillMount(){
        let vet_livros = []
        let carrinho = [{
            titulo: '',
            preco: '',
            qtd: 0
        }]
        vet_livros = JSON.parse(localStorage.getItem('livros'))
        let soma = 0

        for(let index=0; index < vet_livros.length; index++){
            carrinho[index] = {
                titulo:  vet_livros[index].titulo,
                preco: vet_livros[index].valor,
                qtd: vet_livros[index].qtd
            }
            let valItem = parseFloat(vet_livros[index].valor)
            let qtdItens = parseFloat(vet_livros[index].qtd)
            soma += (valItem * qtdItens)
        }

        this.setState({
            vet_carrinho: carrinho,
            total_compra: soma
        })
    }

    onClickFinalizar() {
        alert('Compra finalizada com sucesso!')

        localStorage.removeItem('livros')
        window.location.href = '/livraria'
    }

    onClickCancelar() {
        alert('Compra cancelada!')

        localStorage.removeItem('livros')
        window.location.href = '/livraria'
    }

    render() {
        return(
            <div className="componente">
                <div className="header">
                    <Header />
                </div>
                <div className="corpoCarrinho list-group">
                    <div className="cabecalho list-group-item">
                        <span>Título</span>
                        <span>Preço</span>
                        <span>Quantidade</span>
                        <img src = {lixeiraIcone} className="lixeira"/>
                    </div>
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
                            Total da compra: R${this.state.total_compra}
                        </span>
                    </div>
                    <div className="">
                        <button type="button" className="btn btnOperacao btn-success" onClick={this.onClickFinalizar}>
                            Finalizar
                        </button>
                        <button type="button" className="btn btnOperacao btn-danger" onClick={this.onClickCancelar}>
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Carrinho
