import React, { Component } from "react";
import {  Container, Button, Description,Card } from "./Style/style";

export default class App extends Component {
    constructor(props){
        super(props)
        this.state={
            sign:false
        }

    }
  render() {
    return (
      <div>
        <Container>
             <Button onClick={()=>this.setState({sign:!this.state.sign})} type='primary'>{
                
                    this.state.sign ? 'Login':'Register'
                
             }
             </Button> 
           
            <Description>Salom React</Description>
            <Card></Card>         
           
       
        </Container>
        
      </div>
    );
  }
}
