
import axios from "axios"
export const ApiGetAll = (pageApi, setloading, setError, setDataProject, setPageNum) => {
    axios.get(`https://deb16b35-e085-4404-acf0-af86a4e7be1c-00-2x85sq0deyff1.global.replit.dev/v1/Project/getAllProject?page=${pageApi || 1}&topage=${pageApi || 1}`)
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