import React from 'react';
import ReactDOM from 'react-dom';
import Search from '../../src/index';


const title = 'Demo the fancy search';

ReactDOM.render(
  <div>{title}
  <Search/>
  </div>,
  document.getElementById('app')
);

module.hot.accept();