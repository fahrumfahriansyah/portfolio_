
const modeId = (sessionStorage.getItem("mode"))
const initiliState = {
    mode: modeId ? modeId : "light",
    data: ""
}


const global = (state = initiliState, action) => {
    if (action.type === "mode") {
        return {
            ...state,
            mode: action.payload
        }
    }
    if (action.type === "Admin") {
        return {
            ...state,
            data: action.payload
        }
    }
    return state
}

export default global