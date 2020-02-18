import React, {Component} from 'react'
import { randomWord } from './palavras/frutas';

class Forca extends Component{
    constructor(props) {
        super(props)

        this.state = {
            erros: 0,
            palpite: new Set(),
            resposta: randomWord()
        }

        this.onChange = this.onChange.bind(this)
        this.onClick = this.onClick.bind(this)
        this.guessedWord = this.guessedWord.bind(this)
        this.handleGuess = this.handleGuess.bind(this)
    }

    static defaultProps = {
        maxErros: 6,
    }

    onChange(){
        this.setState({
            palpite: this.refs.palpite.value
        })
    }

    onClick(){
        return this.state.palpite === this.state.resposta ? console.log("Acertou") : console.log("errou")
    }

    guessedWord(){
        return this.state.resposta.split("").map(bingo => (this.state.palpite.has(bingo) ? bingo : " _ "))
    }

    handleGuess(event) {
        let letra = event.target.value
        this.setState(st=>({
            palpite: st.palpite.add(letra),
            erros: st.erros + (st.resposta.includes(letra) ? 0 : 1)
        }))
    }

    generateButtons() {
        return "abcdefghijklmnopqrstuvwxyz".split("").map(letra => (
			<button
				key={letra}
				value={letra}
				onClick={this.handleGuess}
				disabled={this.state.palpite.has(letra)}
			>
				{letra}
			</button>
		))
    }

    render(){
        const gameOver = this.state.erros >= this.props.maxErros
        const altText = `${this.state.erros}/${this.props.maxErros} wrong guesses`
        const venceu = this.guessedWord().join("") === this.state.resposta
        let teclado = this.generateButtons()

        if(venceu)
            teclado = "YOU WON"
        if(gameOver)
            teclado = "YOU LOST"

        return(
            <div>
                <h1> forca </h1>
                <span className='navbar-text text-primary'>Palpites errados: {this.state.erros}</span>
                <label>Digite o nome de uma fruta </label>

                <p> {!gameOver ? this.guessedWord() : this.state.resposta}{" "} </p>
                <p>{teclado}</p>

                <p>Palavra sorteada: {this.state.resposta}</p>
                <p>{altText}</p>
                    
            </div>
            
        );
    }
}

export default Forca
