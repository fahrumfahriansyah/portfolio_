import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Toast from 'react-bootstrap/Toast';
import axios from "axios"
import "./style.scss"
import { useSelector } from 'react-redux';
const CreateBlog = () => {

    const [show, setShow] = useState(false);
    const [judul, setJudul] = useState()
    const [body, setBody] = useState()
    const [link, setLink] = useState()
    const [image, setImage] = useState()
    const [imageUrl, setImageUrl] = useState()
    const [success, setSucces] = useState(false)
    const [data, setData] = useState()
    const [message, setMessage] = useState([])
    const valueData = useSelector(state => state.global)


    const handleClose = () => setShow(false);
    const handleShow = () => {
        const dataId = sessionStorage.getItem("dataId")
        axios.get(`https://deb16b35-e085-4404-acf0-af86a4e7be1c-00-2x85sq0deyff1.global.replit.dev/v1/Auth/login/${valueData.data || dataId}`)
            .then(res => {
                let data = res.data.response.Admin.Access
                if (data) {
                    setShow(true)
                } else {
                    alert("akun anda belum di Setujui oleh Admin    ")
                }
            }).catch(err => {
                console.log("err di get login")
                console.log(err)
            })

    };
    const handleSave = () => {
        setShow(true)
        const data = new FormData()
        data.append("judul", judul)
        data.append("body", body)
        data.append("link", link)
        data.append("image", image)
        axios.post("https://deb16b35-e085-4404-acf0-af86a4e7be1c-00-2x85sq0deyff1.global.replit.dev/v1/Project/CreateProject", data, {
            headers: {
                "content-type": "multipart/form-data"
            }
        }).then(response => {

            setData(response.data.Project.project)
            setSucces(true)

        }).catch(err => {
            setMessage(err.response.data.data.notValid)
            console.log(err.response.data.data)
        })
    };

    const imageSet = (a) => {
        setImage(a)
        setImageUrl(URL.createObjectURL(a))
    }
    if (success) {
        setTimeout(function () {
            setSucces(false)
            setBody(false)
            setData(false)
            setImage(false)
            setImageUrl(false)
            setJudul(false)
            setLink(false)
            setMessage([])
        }, 2000)
        setTimeout(function () {
            setShow(false)
            window.location.reload()
        }, 0)
        return (
            <Toast className='data_succes'>
                <Toast.Header onClick={() => { setSucces(false) }}>
                    <strong className="me-auto bg_succes" style={{ color: "black", opacity: 0.8 }} >success fulll</strong>
                    <small style={{ color: "black", opacity: 0.9 }} >Create ${data.judul}</small>
                </Toast.Header>
                <Toast.Body style={{ color: "black", opacity: 0.8 }} >${data.body}</Toast.Body>
            </Toast>
        )
    }
    console.log(image)
    console.log(success)
    return (
        <>
            <Button variant="success" onClick={handleShow}>
                Create Project
            </Button>

            <Modal show={show} onHide={handleClose}  >
                <Modal.Header closeButton>
                    <Modal.Title>Create Project</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        {imageUrl ? <img src={imageUrl} style={{ width: "50%", marginBottom: "10px" }} alt="gambar"></img> : false}
                        <input type={"file"} onChange={(a) => { imageSet(a.target.files[0]) }} ></input>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Judul</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Create Project"
                                autoFocus
                                onChange={(a) => { setJudul(a.target.value) }}
                            />
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Keterangan Project</Form.Label>
                            <Form.Control as="textarea" rows={3}
                                type="text"
                                placeholder="Create"
                                autoFocus
                                onChange={(a) => { setBody(a.target.value) }}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Link Project</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Create Link "
                                autoFocus
                                onChange={(a) => { setLink(a.target.value) }}
                            />
                        </Form.Group>
                        {message.map((data) => {
                            return (
                                <div className='data_error' >
                                    <p>{data.msg ? data.msg : false}</p>
                                </div>
                            )
                        })}

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        Save Project
                    </Button>
                </Modal.Footer>
            </Modal>
        </>

    )
}

export default CreateBlog
