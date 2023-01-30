import axios from "axios"

export const ApiDelete = (idDelete, setLoadDelete) => {
    if (window.confirm("Apakah anda yakin")) {
        axios.delete(`https://serverPortfolio-2.fahrumfahriansy.repl.co/v1/Project/${idDelete}`)
            .then(response => {
                console.log(response)
                setTimeout(function () {
                    window.location.reload(true)
                }, 0)
                setLoadDelete(true)//!ini ada jika di local

            }).catch(err => {
                console.log("err di delete Project")
                console.log(err)
            })
    }
}