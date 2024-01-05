import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from "axios"
import { useSelector } from 'react-redux';
const CreateBlog = () => {
    const [judul, setJudul] = useState()
    const [link, setLink] = useState()
    const [bgc, setBgc] = useState()
    const [image, imageSet] = useState()
    const [imageUrl, setImageUrl] = useState()
    const [show, setShow] = useState(false);
    const [error, setError] = useState([])
    const handleClose = () => setShow(false);
    const valueData = useSelector(state => state.global)
    const imageFunc = (images) => {
        imageSet(images)
        setImageUrl(URL.createObjectURL(images))
    }
    const handleSave = () => {
        if (!bgc) {
            setBgc("black")
        }

        const data = new FormData()
        data.append("image", image)
        data.append("judul", judul)
        data.append("link", link)
        data.append("bgc", bgc)
        axios.post("https://deb16b35-e085-4404-acf0-af86a4e7be1c-00-2x85sq0deyff1.global.replit.dev/v1/Technology/CreateTech", data, {
            headers: {
                "content-type": "multipart/form-data"
            }
        }).then(response => {
            setShow(false)
            window.location.reload()
        }).catch(err => {
            setShow(true)
            console.log("err di post Tech")
            setError(err.response.data.data.notValid)
        })


        setShow(true);
    }
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

    return (
        <>
            <Button variant="success" onClick={handleShow}>
                Create Techonology
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Techonology</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        {imageUrl ? <img src={imageUrl} style={{ width: "50%", marginBottom: "10px" }} alt="gambar"></img> : false}
                        <input type={"file"} onChange={(a) => { imageFunc(a.target.files[0]) }} ></input>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Create judul</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Judul Technology"
                                autoFocus
                                onChange={(a) => { setJudul(a.target.value) }}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Create Link</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Link Technology"
                                autoFocus
                                onChange={(a) => { setLink(a.target.value) }}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Create background</Form.Label>
                            <Form.Control
                                type="color"
                                autoFocus
                                onChange={(a) => { setBgc(a.target.value) }}
                            />
                        </Form.Group>
                    </Form>
                    {error.map((data) => {
                        return (
                            <div className='data_error' >
                                <p>{data.msg ? data.msg : false}</p>
                            </div>
                        )
                    })}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>

    )
}

export default CreateBlog
