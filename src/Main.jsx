import React, { Component } from 'react';
import Card1 from './Components/Card1';
import Card2 from './Components/Card2';
import { MainBox } from './Style/style';

class Main extends Component {
    render() {
        return (
            <div>
                <MainBox>
                    <Card1/>
                    <Card2/>
                </MainBox>
            </div>
        );
    }
}

export default Main;
