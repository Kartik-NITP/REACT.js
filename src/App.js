import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Main from './Components/MainComponents';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();
class App extends Component {
  
  
  render() {
    return (
      <Provider store={store}>
      <BrowserRouter>
      <div>
        <Main />
      </div>
      </BrowserRouter>
      </Provider>
    );
  }
}
export default App
