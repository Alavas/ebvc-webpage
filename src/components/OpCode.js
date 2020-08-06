import React from 'react'

const OpCode = ({ opCode }) => {
	let example = opCode[1].example
	if (example) {
		example = example.split(',')
	}
	console.log(example)
	return (
		<div id={opCode[0]} className="opcode-container">
			<div className="opcode-name">
				<h1>{opCode[0]}</h1>
			</div>
			<div className="opcode-description">
				<p>{opCode[1].description}</p>
			</div>
			<div className="opcode-data">
				<table>
					<thead>
						<tr>
							<th>Category</th>
							<th>Hex Code</th>
							<th>Length (Bytes)</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>{opCode[1].category}</td>
							<td>0x{opCode[1].hexcode}</td>
							<td>{opCode[1].length}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default OpCode
