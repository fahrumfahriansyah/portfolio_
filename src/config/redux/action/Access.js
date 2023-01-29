import axios from "axios"

export const ApiGetAccess = (setDataAccess) => {
    axios.get("https://serverPortfolio-2.fahrumfahriansy.repl.co/v1/Auth/login/getLogin")
        .then(response => {
            setDataAccess(response.data.response)
        }).catch(err => {
            console.log(" err di getLogin")
            console.log(err)
        })
}

export const ApiUpdateAccess = (data, setSuccess) => {
    axios.put(`https://serverPortfolio-2.fahrumfahriansy.repl.co/v1/Auth/${data}`)
        .then(res => {
            setSuccess(true)
            setTimeout(function () {
                setSuccess(false)
            }, 3000)
        }).catch(err => {
            setSuccess(false)
            alert("error")
            console.log("err di update Access")
            console.log(err)
        })
}

export const ApiDeleteAccess = (data, setRemove) => {
    axios.delete(`https://serverPortfolio-2.fahrumfahriansy.repl.co/v1/Auth/${data}`)
        .then(res => {
            setRemove(true)
            setTimeout(function () {
                setRemove(false)
            }, 3000)
        }).catch(err => {
            console.log("err di delete Access")
            setRemove(false)
        })
}

