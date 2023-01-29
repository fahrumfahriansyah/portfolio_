const initiliState = {
    dataTech: []
}

const dataTech = (state = initiliState, action) => {
    if (action.type === "dataTech") {
        return {
            ...state,
            dataTech: action.payload
        }
    }
    return state
}

export default dataTech