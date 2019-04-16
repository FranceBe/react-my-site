import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import { palette } from '../palette';

const ColorsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
`;
const ColorContainer = styled.div`
  display: flex;
  flex: 1 1 100%;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 200px;
  padding: 10px;
  text-align: center;
`;
const Color = styled.div`
  display: flex;
  background-color: ${props => props.color};
  height: 100px;
  width: 100px;
  border: 1px solid grey;
  margin-right: 20px;
`;

const namesOfColors = Object.keys(palette);

const arrayOfColors = Object.values(palette);
const myPalette = arrayOfColors.map((color, i) => {

    return (
        <div>
            {namesOfColors[i]}
            <Color color={color} key={`color-${color}`} />
        </div>
    );
});



storiesOf('Colors', module)
    .add('Palette', () => (
        <ColorsContainer>
            <ColorContainer>
                {myPalette}
            </ColorContainer>
        </ColorsContainer>
    ));
