import React from 'react';
import { storiesOf } from '@storybook/react';
import Menu from '../';
import Button from '../../Button';

storiesOf('Menu', module)
    .add('Default', () => (
        <Menu>
            <Button>
                coucou
            </Button>
            <Button>
                coucou
            </Button>
            <Button>
                coucou
            </Button>
            <Button>
                coucou
            </Button>
            <Button>
                coucou
            </Button>
            <Button>
                coucou
            </Button>
            <Button>
                coucou
            </Button>
        </Menu>
    ));
