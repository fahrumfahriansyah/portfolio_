import axios from "axios"
export const ApiGetTech = (dispatch) => {
    axios.get("https://serverPortfolio-2.fahrumfahriansy.repl.co/v1/Technology/getAllTech")
        .then(response => {
            dispatch({ type: "dataTech", payload: response.data.Technology })
            console.log(response.data.Technology)
        }).catch(err => {
            console.log("err di getAllTech")
            console.log(err)
        })
}