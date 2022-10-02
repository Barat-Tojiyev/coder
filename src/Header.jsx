import React, { Component } from 'react'
import Aside from './Aside'

export default class Header extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <Aside title='Aside Header'/>
        </div>
    )
  }
}
