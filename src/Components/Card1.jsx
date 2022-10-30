import React, { Component } from "react";
import { Box1, Description } from "../Style/style";

export default class Card1 extends Component {
  render() {
    return (
      <div>
        <Box1>
            <Box1.Card>
          <Description color="#fff" fs="50px" fw="600"      >
            Learn to code by watching others
          </Description>
          <Description color="#fff" mt='20px' >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
            autem culpa et architecto repellat quibusdam ex nam asperiores,
            praesentium deleniti, earum quo quod id, minima atque possimus
            incidunt beatae exercitationem.
          </Description>
            </Box1.Card>
        </Box1>
      </div>
    );
  }
}
