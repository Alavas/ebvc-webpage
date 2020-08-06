import React, { useState } from 'react'

const Search = () => {
	const [name, setName] = useState('')

	const handleSubmit = (evt) => {
		evt.preventDefault()
		const opcode = document.getElementById(name.toUpperCase())
		//If nothing is entered go to the top.
		console.log(name)
		if (name === '') {
			setName('')
			window.scrollTo({ top: 0, behavior: 'smooth' })
		} else if (opcode) {
			const yOffset = -90
			const y =
				opcode.getBoundingClientRect().top + window.pageYOffset + yOffset

			window.scrollTo({ top: y, behavior: 'smooth' })
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
						onChange={(e) => setName(e.target.value)}
					/>
				</label>
				<input type="submit" value="Search" />
			</form>
		</div>
	)
}

export default Search
