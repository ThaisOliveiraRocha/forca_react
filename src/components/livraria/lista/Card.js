import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './card.css'

class Card extends Component {
    constructor(props){
        super(props)

        this.state = {
            imagem: '',
            titulo: '',
            genero: '',
            autor: '',
            ano: '',
            situacao: '',
            preco: 0,
            total: 0
        }

        this.livros = []
        this.onClick = this.onClick.bind(this)
    }

    componentDidMount(){
        const livro = this.props.livro
        let book = livro.imagem

        this.setState({
            imagem: require('../images/'+book),
            titulo: livro.titulo,
            genero: livro.genero,
            autor: livro.autor,
            ano: livro.ano,
            situacao: livro.situacao,
            preco: livro.preco
        })
    }

    onClick() {
        let titulo = this.state.titulo
        let preco = this.state.preco

        let vet_livros =  []
        vet_livros = JSON.parse(localStorage.getItem('livros'))
        let vet_auxiliar = []
        
        if(vet_livros){
            const existeTitulo = vet_livros.filter(livro => livro.titulo === titulo)

            if(existeTitulo.length){
                const index = vet_livros.findIndex(livro => livro.titulo === titulo)
                vet_auxiliar = [...vet_livros.slice(0, index),  {...vet_livros[index], qtd: vet_livros[index].qtd+1}, ...vet_livros.slice(index+1)]
                vet_livros = vet_auxiliar
            }
            else{
                vet_livros.push({titulo: titulo, valor: preco, qtd: 1})
            }
        }
        else {
            vet_livros = [{titulo: titulo, valor: preco, qtd: 1}]
        }

        localStorage.setItem('livros', JSON.stringify(vet_livros))
        this.props.func(vet_livros.reduce((aux, livro) => {
            aux = aux + livro.qtd
            return aux
        }, 0))
    }

    render(){ 
        const {livro} = this.props
        console.log("livros", livro)
        return(
            <div className="card col-sm-3">
                <img src={require(`../images/${livro.imagem}`)} className="imagem card-img-top align-self-center" alt=""/>
                <div className="card-body">
                    <h5 className="card-title" ref="titulo">{livro.titulo}</h5>
                </div>
                <ul className="list-group list-group-flux">
                    <li className="list-group-item">{livro.autor}</li>
                    <li className="list-group-item">{livro.ano}</li>
                    <li className="list-group-item">{livro.genero}</li>
                    <li className="list-group-item" ref="preco">R$ {livro.preco}</li>
                    <li className="list-group-item">{livro.situacao}</li>
                </ul>
                <div className="card-body align-self-center">
                    <button className="btn btn_card" type="submit" onClick={this.onClick}>Comprar</button>
                </div>
            </div>            
        )
    }
}

export default Card
