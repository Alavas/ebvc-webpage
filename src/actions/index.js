export const GET_OPCODE_LIST = () => {
	return async (dispatch) => {
		const login = await fetch(
			'https://gist.githubusercontent.com/Alavas/6ca6a9e3b49bc781f8ad49a807a82dcd/raw/88647c88399ce9303282cac913bcea554898437d/ebvc-opcodes.json'
		)
		const data = await login.json()
		dispatch(SET_OPCODE_LIST(data))
	}
}

export const SET_OPCODE_LIST = (opcodes) => ({
	type: 'SET_OPCODE_LIST',
	payload: opcodes,
})

export const SELECT_OCPCODE = (opcode) => ({
	type: 'SELECT_OPCODE',
	payload: opcode,
})
