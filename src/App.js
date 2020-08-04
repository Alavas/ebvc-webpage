import React from 'react'
import OpCodes from './containers/OpCodes'

const App = () => {
	return (
		<div className="site-wrapper">
			<header>
				<h1>Eight-Bit Verilog Computer</h1>
			</header>
			<div className="opcodes-container">
				<OpCodes />
			</div>
		</div>
	)
}

export default App
