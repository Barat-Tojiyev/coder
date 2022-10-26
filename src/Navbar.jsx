import React, { Component } from 'react'
import { Card, Container, Danger, Description, Primary } from './Style/style'

export default class Navbar extends Component {
  render() {
    return (
      <div>
       <Container>
       <Card w='250px' h='200px' bg='#5BBFDE'>
        <Description  fs='30px'> Card Header</Description>
       </Card>
       <Card w='250px' h='200px' bg='#F1C954'>
        <Description color='#fff'  fs='30px'> Card Header</Description>
       </Card>
       <Card w='250px' h='200px' bg='#070'>
        <Description color='#fff'  fs='30px'> Card Header</Description>
       </Card>
       </Container>      

      </div>
    )
  }
}
