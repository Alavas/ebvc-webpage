import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { SELECT_OCPCODE } from '../actions'

const Search = () => {
	const [name, setName] = useState('')
	const dispatch = useDispatch()
	const handleSubmit = (evt) => {
		evt.preventDefault()
		const opcode = document.getElementById(name)
		//If nothing is entered go to the top.
		if (name === '') {
			setName('')
			dispatch(SELECT_OCPCODE(''))
			window.scrollTo({ top: 0, behavior: 'smooth' })
		} else if (opcode) {
			dispatch(SELECT_OCPCODE(name))
			opcode.scrollIntoView({
				behavior: 'smooth',
				block: 'center',
				inline: 'center',
			})
		}
	}
	return (
		<div className="search-container">
			<form onSubmit={handleSubmit}>
				<label>
					Find Opcode
					<input
						type="text"
						value={name}
						onFocus={() => setName('')}
						onBlur={() => setName('')}
						onChange={(e) => setName(e.target.value.toUpperCase())}
					/>
				</label>
				<input type="submit" value="Search" />
			</form>
		</div>
	)
}

export default Search
