import React from 'react'

const OpCode = ({ opCode, selected }) => {
	let example = opCode[1].example
	if (example) {
		example = example.split(',')
	}
	return (
		<div
			id={opCode[0]}
			className="opcode-container"
			style={{ display: opCode[1].implemented ? null : 'none' }}
		>
			<div
				className="opcode-name"
				style={{
					backgroundColor: selected ? 'limegreen' : null,
					borderTopLeftRadius: '0.5rem',
					borderBottomLeftRadius: '0.5rem',
				}}
			>
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
			<div className="opcode-example">
				<span role="img" aria-label="wrench">
					&#128295;
				</span>
				I'm working on the examples...
			</div>
		</div>
	)
}

export default OpCode
