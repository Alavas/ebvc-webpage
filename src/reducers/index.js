export const reducer = (
	state = {
		selected: '',
		opcodes: {},
	},
	action
) => {
	switch (action.type) {
		case 'SET_OPCODE_LIST':
			state = { ...state, opcodes: action.payload }
			break
		case 'SELECT_OPCODE':
			state = { ...state, selected: action.payload }
			break
		default:
			break
	}
	return state
}
