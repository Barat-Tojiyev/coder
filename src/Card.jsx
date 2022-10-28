import React, { Component } from "react";
import Music from './Image/icon-music.svg'
import { CardBox, CardImage, CardInput, CardMain, Description } from "./Style/style";

class Card extends Component {
  constructor (props){
    super(props)
    this.state={
      lastName:''
    }
  }
  render() {
    const onLastName =(e)=>{
      const {value}=e.target
      this.setState({lastName:value})
    }
    return (
      <div>
        <CardBox w="250px" h="350px" bg="#fff">
          <CardImage />

          <Description 
          color="#1F2B52"
           fw="600"
           text='center'
            mt="10px">
            Order Summory
          </Description>
          <Description 
          fs='10px'
          text='center'
          mt='10px'
          color="#999"          
          w='70%'
          ml='15%'>
         
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
            nihil deserunt est? Minima explicabo.            
          </Description>
          <CardMain>
            <div>
                <img src={Music} width='40' alt="#" />
            </div>
            <div>
            <Description 
            fs='12px' fw='600'>Annual Plan</Description>
            <Description
            fs='10px'
            color='#555'>$ 59.99/year</Description>
           
            </div>
            <Description
            fs='10px'
            fw='600'>
                <a href="#sd">Change</a>
            </Description>


          </CardMain>
          <CardInput onChange={onLastName} placeholder="lastname"/>
          <Description>Lastname: {this.state.lastName}</Description>
        </CardBox>
      </div>
    );
  }
}

export default Card;
