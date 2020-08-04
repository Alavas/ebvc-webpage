import React, { useState, useEffect } from 'react'
import OpCode from '../components/OpCode'

const gistURL =
	'https://gist.githubusercontent.com/Alavas/6ca6a9e3b49bc781f8ad49a807a82dcd/raw/2fe730575f79504601c35d132f1c74f5044b884c/ebvc-opcodes.json'

const OpCodes = () => {
	const [instructions, setInstructions] = useState({})
	useEffect(() => {
		fetch(gistURL)
			.then((response) => response.json())
			.then((res) => setInstructions(res))
	}, [])
	return (
		<React.Fragment>
			{Object.entries(instructions).map((instruction, index) => (
				<OpCode key={index} opCode={instruction} />
			))}
		</React.Fragment>
	)
}

export default OpCodes
