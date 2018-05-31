import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import ListContainer from './list/ListContainer.js'



ReactDOM.render(<ListContainer/>, document.getElementById('five-things'));
registerServiceWorker();
