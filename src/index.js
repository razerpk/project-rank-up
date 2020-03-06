import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import { Provider } from 'react-redux'
import App from './App'
import store from './store'
import { MuiThemeProvider } from '@material-ui/core/styles'
import theme from './theme'

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <App/>
      </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)

