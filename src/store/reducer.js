const initialState = {
    result: []
}

const reducer = (state = initialState, action) => {

    if(action.type === 'ADD_RESULT') {
        return {
            ...state,
            result: state.result.concat(action.value)
        }
    }

    return state
}
export default reducer