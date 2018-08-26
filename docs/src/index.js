import React, { Component, PureComponent } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Main from './containers/Main.jsx';
import store from './store/store';
import '../../src/main.css';
import './index.css';

class Hello extends (PureComponent || Component) {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>      
    );
  };
}

ReactDOM.render(<Hello />, document.getElementById('app'));
