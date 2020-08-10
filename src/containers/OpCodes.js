import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import OpCode from '../components/OpCode'
import Search from '../components/Search'
import OpCodeTable from './OpCodeTable'

const OpCodes = () => {
	const opcodes = useSelector((state) => state.opcodes)
	const selected = useSelector((state) => state.selected)
	//Make sure that we start at the top of the page.
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	return (
		<div id="content">
			<div className="opcodes-container">
				<OpCodeTable opcodes={opcodes} />
				<Search />
				{Object.entries(opcodes).map((opcode, index) => (
					<OpCode
						key={index}
						opCode={opcode}
						selected={opcode[0] === selected}
					/>
				))}
			</div>
		</div>
	)
}

export default OpCodes
