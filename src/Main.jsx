import React, { Component } from 'react';
import Aside from './Aside';
import Section from './Section'

class Main extends Component {
    render() {
        return (
            <div className='main'>
            <Aside title='Aside Main'/>
            <Section/>
            </div>
        );
    }
}

export default Main;
