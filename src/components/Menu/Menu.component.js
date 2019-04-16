import React from 'react';
import styled from 'styled-components';

import { elements } from '../../styles/elements';

const MenuContainer = styled.div`
  display: flex;
  flex: 1 1 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 10px;
  height: ${elements.menu.default_height};
  background-color: ${elements.menu.background_color};
`;

export class Menu extends React.PureComponent {
  render() {
    return(
        <React.Fragment>
          <MenuContainer>
            {this.props.children}
          </MenuContainer>
        </React.Fragment>
    );
  }
}

export default Menu;
