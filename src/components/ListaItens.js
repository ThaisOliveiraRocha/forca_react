import React, { Component } from 'react';

class ListaItens extends Component {
    constructor(props){
        super(props)

        this.handleFNameChange=this.handleFNameChange.bind(this)
        this.handleLNameChange=this.handleLNameChange.bind(this)
        this.handleClick=this.handleClick.bind(this)

        this.state ={
            fName: '',
            lName: ''
        }
    }
   
      handleFNameChange(event){
        this.setState({fName: this.refs.fName.value});
      }
   
      handleLNameChange(event){
        this.setState({lName: this.refs.lName.value});
      }
   
      handleClick(){
          var fullName = this.state.fName + ' ' + this.state.lName;
          this.setState({Name:fullName});
      }
   
      render(){
          return(
              <div>
                  <h2>Ezzz</h2>
                  <hr />
   
                  <label>First Name: </label>
                  <input type="text" ref="fName" onChange={this.handleFNameChange}  />
                  <br />
   
                  <label>Last Name: </label>
                  <input type="text" ref="lName" onChange={this.handleLNameChange}  />
                  <br />
   
                  <input type="button" onClick={this.handleClick} value="Submit" />
   
                  <hr />
   
                  <h3>Nome: </h3> {this.state.Name}
              </div>
          );
      }
}

export default ListaItens;
