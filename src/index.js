import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import App from './App'
import ReactGA from 'react-ga'

ReactGA.initialize('UA-108465458-4')
ReactGA.pageview(window.location.pathname + window.location.search)

ReactDOM.render(<App />, document.getElementById('root'))
