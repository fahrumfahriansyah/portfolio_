import React from 'react'
import "./style.scss"
import CloseButton from 'react-bootstrap/CloseButton';
import { useSelector } from 'react-redux';
import axios from "axios"

const Logo = ({ src, title, bgcc, border, href, idData, ...rest }) => {
    const { data } = useSelector(state => state.global)
    const deleteTech = (event) => {
        if (window.confirm("Apakah anda yakin")) {
            axios.delete(`https://deb16b35-e085-4404-acf0-af86a4e7be1c-00-2x85sq0deyff1.global.replit.dev/v1/Technology/${event.target.dataset.id}`)
                .then(res => {
                    window.location.reload()
                }).catch(err => {
                    console.log("err di delete technology")
                    console.log(err)
                })
        }
    }



    return (
        <a href={href} style={{ color: "black", textDecoration: "none" }} >
            <div className='container_Logo' style={{ border, backgroundColor: bgcc }} >
                <div className='logo'>
                    <img src={src} alt='logo' {...rest}>
                    </img>
                    {data ? <CloseButton aria-label="Hide" data-id={idData} onClick={(event) => {
                        deleteTech(event)
                        event.preventDefault()
                    }} style={{ width: "1px" }} /> : false}
                    <h1  >{title}</h1>
                </div>
            </div >
        </a>
    )
}

export default Logo
