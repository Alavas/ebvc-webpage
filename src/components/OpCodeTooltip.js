import React from 'react'

const OpCodeTooltip = ({ opcode }) => {
	return (
		<React.Fragment>
			<p>Hex &#x27A1; 0x{opcode[1].hexcode}</p>
			<p>{opcode[1].description}</p>
			{opcode[1].implemented ? (
				<p>Click for more...</p>
			) : (
				<p>Not Implemented</p>
			)}
		</React.Fragment>
	)
}

export default OpCodeTooltip
