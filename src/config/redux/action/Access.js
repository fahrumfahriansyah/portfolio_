import axios from "axios"

export const ApiGetAccess = (setDataAccess) => {
    axios.get("https://deb16b35-e085-4404-acf0-af86a4e7be1c-00-2x85sq0deyff1.global.replit.dev/v1/Auth/login/getLogin")
        .then(response => {
            setDataAccess(response.data.response)
        }).catch(err => {
            console.log(" err di getLogin")
            console.log(err)
        })
}

export const ApiUpdateAccess = (data, setSuccess) => {
    axios.put(`https://deb16b35-e085-4404-acf0-af86a4e7be1c-00-2x85sq0deyff1.global.replit.dev/v1/Auth/${data}`)
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
    axios.delete(`https://deb16b35-e085-4404-acf0-af86a4e7be1c-00-2x85sq0deyff1.global.replit.dev/v1/Auth/${data}`)
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

