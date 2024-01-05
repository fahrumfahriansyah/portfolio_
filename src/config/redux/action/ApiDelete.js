import axios from "axios"

export const ApiDelete = (idDelete, setLoadDelete) => {
    if (window.confirm("Apakah anda yakin")) {
        axios.delete(`https://deb16b35-e085-4404-acf0-af86a4e7be1c-00-2x85sq0deyff1.global.replit.dev/v1/Project/${idDelete}`)
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