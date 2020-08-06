import React from 'react'
import OpCodes from './containers/OpCodes'
import Search from './components/Search'

const App = () => {
	return (
		<div className="site-wrapper">
			<header id="header">
				<h1>Eight-Bit Verilog Computer</h1>
			</header>
			<div id="content">
				<Search />
				<div className="opcodes-container">
					<OpCodes />
				</div>
			</div>
		</div>
	)
}

export default App
