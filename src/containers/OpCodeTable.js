import React from 'react'
import { useDispatch } from 'react-redux'
import OpCodeTooltip from '../components/OpCodeTooltip'
import { SELECT_OCPCODE } from '../actions'

const zeroEff = [...Array(16).keys()]

const OpCodeTable = ({ opcodes }) => {
	const dispatch = useDispatch()
	const handleClick = (selected) => {
		dispatch(SELECT_OCPCODE(selected[0]))
		const opcode = document.getElementById(selected[0])
		opcode.scrollIntoView({
			behavior: 'smooth',
			block: 'center',
			inline: 'center',
		})
	}
	return (
		<div className="opcode-table">
			<h1>Table O'Instructions</h1>
			<table>
				<thead>
					<tr style={{ backgroundColor: 'lightyellow' }}>
						<th>High</th>
						<th colSpan="16">Low-Nibble</th>
					</tr>
				</thead>
				<tbody>
					<tr style={{ backgroundColor: 'lightblue' }}>
						<td></td>
						{[...Array(16).keys()].map((x, index) => (
							<td key={index}>
								<span role="img" aria-label="question mark">
									&#10067;
								</span>
								{x.toString(16).toUpperCase()}
							</td>
						))}
					</tr>
					{zeroEff.map((r, index) => (
						<tr key={index}>
							<td style={{ backgroundColor: 'lightblue' }}>
								{r.toString(16).toUpperCase()}
								<span role="img" aria-label="question mark">
									&#10067;
								</span>
							</td>
							{zeroEff.map((c, index) => {
								const currentHex =
									r.toString(16).toUpperCase() +
									c.toString(16).toUpperCase()
								const found = Object.entries(opcodes).find(
									(x) => x[1].hexcode === currentHex
								)
								if (found) {
									return (
										<td
											onClick={
												found[1].implemented
													? () => handleClick(found)
													: null
											}
											key={index}
											className="hasTooltip"
											style={{
												textDecoration: found[1].implemented
													? null
													: 'line-through',
											}}
										>
											{found[0]}
											<div className="tooltip">
												<OpCodeTooltip opcode={found} />
											</div>
										</td>
									)
								} else {
									return (
										<td
											key={index}
											style={{
												backgroundColor: 'grey',
												cursor: 'not-allowed',
											}}
										></td>
									)
								}
							})}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default OpCodeTable
