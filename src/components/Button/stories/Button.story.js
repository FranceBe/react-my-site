import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../';

storiesOf('Button', module)
    .add('Default', () => (
      <Button> Button </Button>
    ))
    .add('disabled', () => (
        <Button
            disabled
        >
            Disabled
        </Button>
    ));
