import React from 'react'
import ReactDOM from 'react-dom'
import ReactGA from 'react-ga'
import { Provider } from 'react-redux'
import { store } from './store'
import App from './App'
import './styles/index.css'

ReactGA.initialize('UA-108465458-4')
ReactGA.pageview(window.location.pathname + window.location.search)

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)
