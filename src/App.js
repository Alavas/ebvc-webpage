import React, { useEffect } from 'react'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	NavLink,
} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import About from './components/About'
import OpCodes from './containers/OpCodes'
import Compiler from './components/Compiler'
import Contact from './components/Contact'
import { GET_OPCODE_LIST } from './actions'

const App = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(GET_OPCODE_LIST())
	}, [dispatch])
	const handleDropDown = () => {
		if (window.innerHeight < 500 || window.innerWidth < 500) {
			const dropdownNav = document.getElementById('nav')
			if (dropdownNav.style.display === 'flex') {
				dropdownNav.style.display = 'none'
			} else {
				dropdownNav.style.display = 'flex'
			}
		}
	}
	return (
		<div className="site-wrapper">
			<Router>
				<header id="header">
					<h1>
						<span
							role="img"
							aria-label="computer"
							className="dropdown"
							onClick={() => handleDropDown()}
						>
							&#128187;
						</span>
						Eight-Bit Verilog Computer
					</h1>
					<div id="nav" className="dropdown-nav">
						<NavLink
							exact
							activeStyle={{ backgroundColor: 'grey', color: 'white' }}
							className="nav-link"
							to="/"
							onClick={() => handleDropDown()}
						>
							About
						</NavLink>
						<NavLink
							activeStyle={{ backgroundColor: 'grey', color: 'white' }}
							className="nav-link"
							to="/opcodes"
							onClick={() => handleDropDown()}
						>
							OpCodes
						</NavLink>
						<NavLink
							activeStyle={{ backgroundColor: 'grey', color: 'white' }}
							className="nav-link"
							to="/compiler"
							onClick={() => handleDropDown()}
						>
							Compiler
						</NavLink>
						<NavLink
							activeStyle={{ backgroundColor: 'grey', color: 'white' }}
							className="nav-link"
							to="/contact"
							onClick={() => handleDropDown()}
						>
							Contact
						</NavLink>
					</div>
				</header>
				<Switch>
					<Route path="/opcodes">
						<OpCodes />
					</Route>
					<Route path="/compiler">
						<Compiler />
					</Route>
					<Route path="/contact">
						<Contact />
					</Route>
					<Route path="/">
						<About />
					</Route>
				</Switch>
			</Router>
			<div id="footer">
				Copyright &copy; 2020{' '}
				<a href="https://www.justinsavala.com">Justin Savala</a>
			</div>
		</div>
	)
}

export default App
