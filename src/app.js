import React, { Component } from "react"
import ReactDOM from 'react-dom'
import initialDispatches from './initialDispatches'
import { Provider } from "react-redux"
import AppRouter from './AppRouter'
import store from "./store/store"
import './styles/styles.scss'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppRouter />
      </Provider>
    );
  }
}
function renderApp () {
  ReactDOM.render(<App />, document.getElementById('app'))
}

initialDispatches(store)
renderApp()


