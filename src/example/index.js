import React from 'react';
import ReactDOM from 'react-dom';
import {Search} from '../lib/search';

const App = () => (
  <div>
    <Search/>
  </div>
);
ReactDOM.render(<App />, document.getElementById('root'));