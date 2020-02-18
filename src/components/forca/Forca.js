import React, {Component} from 'react'
import { randomWord } from './palavras/frutas';
import 'bootstrap/dist/css/bootstrap.min.css';

import step0 from "./images/0.jpg"
import step1 from "./images/1.jpg";
import step2 from "./images/2.jpg";
import step3 from "./images/3.jpg";
import step4 from "./images/4.jpg";
import step5 from "./images/5.jpg";
import step6 from "./images/6.jpg";

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
        images: [step0, step1, step2, step3, step4, step5, step6]
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
        return this.state.resposta.split("").map(bingo => (this.state.palpite.has(bingo) ? bingo : "_"))
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
        const altText = `${this.state.erros}/${this.props.maxErros} palpites errados`
        const venceu = this.guessedWord().join("") === this.state.resposta
        let teclado = this.generateButtons()

        if(venceu)
            teclado = "VOCÊ VENCEU"
        if(gameOver)
            teclado = "VOCÊ PERDEU"

        return(
            <div className='Hangman'>
                <nav className='navbar navbar-light justify-content-between'>
                    <p className='navbar-brand text-light'>
                        Forca
                    </p>
                    <p className='navbar-brand text-light'>
                        Palpites errados: {this.state.erros}
                    </p>
                </nav>
                <p className='text-center'>
					<img src={this.props.images[this.state.erros]} alt={altText} />
				</p>
                <p className='text-center text-light'>Adivinhe o nome da fruta</p>
                <p className='Hangman-word text-center'> 
                    {!gameOver ? this.guessedWord() : this.state.resposta}{" "} 
                </p>

                <p className='text-center text-warning mt-4'>{teclado}</p>
            </div>
        );
    }
}

export default Forca
