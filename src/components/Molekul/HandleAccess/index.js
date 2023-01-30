import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import NavDropdown from 'react-bootstrap/NavDropdown'
import { useNavigate } from 'react-router-dom';
const HandleAccess = () => {
    const [show, setShow] = useState(false);
    const [Password, setPassword] = useState()
    const handleClose = () => setShow(false);
    const [error, setError] = useState(false)
    const history = useNavigate()
    const HandleAccess = () => {
        if (Password === "fahriganteng") {
            setShow(false)
            setError(false)
            history(`Access`)
        } else {
            setError(true)
            setShow(true)
        }
    }
    const handleShow = () => setShow(true);
    const Access = (a) => {
        setPassword(a)
    }
    return (
        <>
            <NavDropdown.Item onClick={() => handleShow()} >
                Access
            </NavDropdown.Item>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Acces Admin</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Access Admin"
                                autoFocus
                                onChange={(a) => {
                                    Access(a.target.value)
                                }}
                            />
                        </Form.Group>
                        {error ? <div className='data_error' >
                            <p>password salah</p>
                        </div> : false}
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={HandleAccess}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default HandleAccess
