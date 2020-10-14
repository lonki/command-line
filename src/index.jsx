import '@babel/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

// Import root app
import App from 'components/app';

const render = () => {
  ReactDOM.render(
    <App />,
    document.getElementById('app'),
  );
};

render();
