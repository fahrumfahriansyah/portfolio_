import axios from "axios"
export const ApiGetTech = (dispatch) => {
    axios.get("https://deb16b35-e085-4404-acf0-af86a4e7be1c-00-2x85sq0deyff1.global.replit.dev/v1/Technology/getAllTech")
        .then(response => {
            dispatch({ type: "dataTech", payload: response.data.Technology })
            console.log(response.data.Technology)
        }).catch(err => {
            console.log("err di getAllTech")
            console.log(err)
        })
}