
import axios from "axios"
export const ApiGetAll = (pageApi, setloading, setError, setDataProject, setPageNum) => {
    axios.get(`https://serverPortfolio-2.fahrumfahriansy.repl.co/v1/Project/getAllProject?page=${pageApi || 1}&topage=${pageApi || 1}`)
        .then(result => {
            setloading(false)
            setError(false)
            setDataProject(result.data.data)
            setPageNum(result.data.pageNum)
        }).catch(err => {
            setError(true)
            setloading(false)
            console.log("err di get berdasarkan update")
            console.log(err)
        })
}