import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from "../../components/Button"

const Title = styled.h1`
  text-align: center;
`;
const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImageContainer = styled.div`
  flex: 1 0 50%;
  background-image: url("https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-9/10999640_787087604732799_3439044700468612779_n.jpg?_nc_cat=106&_nc_ht=scontent-cdt1-1.xx&oh=7d5a5666d4f01f0a401d537f62b802ed&oe=5D0D0B33");
  background-repeat: no-repeat;
  height: 520px;
`;

export class HomePage extends React.PureComponent {
    render() {
        return(
            <div>
                <Title>
                    Bienvenu dans mon univers trop trop trop perso :)
                </Title>
                <MenuContainer>
                    <ImageContainer>
                        <Link
                            to="/about"
                        >
                            Mon parcours
                        </Link>
                        <Button> Le passé </Button>
                    </ImageContainer>
                </MenuContainer>
            </div>
        );
    }
}

export default HomePage;
