import { configure, addDecorator } from '@storybook/react';
import React from 'react';

import GlobalStyle from '../src/style';

function withGlobalStyles(storyFn) {
    return (
        <React.Fragment>
            <GlobalStyle />
            {storyFn()}
        </React.Fragment>
    );
}

addDecorator(withGlobalStyles);

function loadStories() {
    const req = require.context('../src', true, /\.story\.js$/);
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
