import React, { Component } from "react"
import ReactDOM from 'react-dom'
import initialDispatches from './initialDispatches'
import { Provider } from "react-redux"
import store from "./store"
import './styles/styles.scss'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <h1>Holaaa!</h1>
      </Provider>
    );
  }
}
function renderApp () {
  ReactDOM.render(<App />, document.getElementById('app'))
}


initialDispatches(store);
renderApp();


