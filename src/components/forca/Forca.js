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
    }

    onChange(){
        this.setState({
            palpite: this.refs.palpite.value
        })
    }

    onClick(){
        return this.state.palpite === this.state.resposta ? console.log("Acertou") : console.log("errou")
    }

    render(){
        return(
            <div>
                <h1> forca </h1>
                    <label>Digite uma palavra: </label>
                    <input type="text" ref="palpite" placeholder="informe a palavra" onChange={this.onChange} />
                    
                    <input type="submit" value="Continuar" name="btn_continuar" onClick={this.onClick}/>

                <p>Palavra sorteada: {this.state.resposta}</p>
                    
            </div>
            
        );
    }
}

export default Forca
