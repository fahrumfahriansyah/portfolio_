import React, { useEffect, useState } from 'react'
import { Spinner, Card, Row, Col, Container, Form, InputGroup, Button } from 'react-bootstrap';
import "./style.scss"
import { gsap } from 'gsap';
import { NavbarHome } from '../../components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
const Register = () => {
    const history = useNavigate()
    useEffect(() => {
        gsap.set('h3', {
            duration: 0, y: -110, opacity: 0, overwrite: 'none'
            , ease: "bounce"
        });
        gsap.to('h3', {
            duration: 1, y: 0, opacity: 1, overwrite: 'none', ease: "elastic"
        });
        gsap.set('.text_register', {
            duration: 0, x: -110, opacity: 0, overwrite: 'none'
            , ease: "bounce"
        });
        gsap.to('.text_register', {
            duration: 1, x: 0, opacity: 1, overwrite: 'none', ease: "elastic"
        });
        gsap.set('.btn_Login', {
            duration: 0, y: -110, opacity: 0, overwrite: 'none'
            , ease: "bounce"
        });
        gsap.to('.btn_Login', {
            duration: 1, y: 0, opacity: 1, overwrite: 'none', ease: "elastic"
        });
        gsap.set('.btn_Create', {
            duration: 0, y: 110, opacity: 0, overwrite: 'none'
            , ease: "bounce"
        });
        gsap.to('.btn_Create', {
            duration: 1, y: 0, opacity: 1, overwrite: 'none', ease: "elastic"
        });

    }, []);

    const [fullName, setFullName] = useState()
    const [lastName, setlastName] = useState()
    const [email, setemail] = useState()
    const [password, setPasword] = useState()
    const [error, setEror] = useState([])
    const [True, setTrue] = useState(false)

    const Create = () => {

        const data = {
            fullName: fullName,
            lastName: lastName,
            email: email,
            password: password
        }

        axios.post('https://serverPortfolio-2.fahrumfahriansy.repl.co/v1/Auth/register', data, {
            headers: {
                'content-type': 'application/x-www-form-urlencoded'
            }
        })
            .then(response => {
                // jika permintaan terkirim dengan sukses, lakukan sesuatu di sini
                setTrue(true)
                setTimeout(function () {
                    setTrue(false)
                    setEror([{ msg: "suucess fulll" }])
                }, 1500)
                setTimeout(function () {
                    history("/login")
                }, 2500)
            })
            .catch(error => {
                const check = error.response.data.data
                setEror(check)
                console.log(error)
                console.log("error di post Register")
            })
    }
    if (True) {
        return (
            <div className='container_register_ligth'>
                <Container className='Layout_register' >
                    <div className='loader_daftar'>
                        <Spinner animation="border" size="sm" />
                        <Spinner animation="border" />
                        <Spinner animation="grow" size="sm" />
                        <Spinner animation="grow" />
                    </div>
                </Container>
            </div>
        )
    }

    return (
        <div className='container_register_ligth'>
            <NavbarHome />
            <Container className='Layout_register' >
                <Row className="justify-content-md-center">
                    <Col sm="12" className='col_register'>
                        <Card style={{ width: '70%' }} className=' card_register'  >
                            <Card.Body>
                                <h3 className='H3_register' >Register</h3>
                                {error.map(a => {
                                    return (<h6>{a.msg || false}</h6>)
                                })}
                                <hr></hr>
                                <>
                                    <Form.Label htmlFor="basic-url" className='text_register' ><span>Nama Depan</span></Form.Label>
                                    <InputGroup className="mb-3">
                                        <Form.Control
                                            type="text"
                                            placeholder="Masukan nama depan anda"
                                            aria-label="Username"
                                            aria-describedby="basic-addon1"
                                            onChange={(a) => setFullName(a.target.value)}
                                        />
                                    </InputGroup>
                                    <Form.Label htmlFor="basic-url" className='text_register' ><span>Nama Belakang</span></Form.Label>
                                    <InputGroup className="mb-3">
                                        <Form.Control
                                            type="text"
                                            placeholder="Masukan nama belakang anda"
                                            aria-label="Username"
                                            aria-describedby="basic-addon1"
                                            onChange={(a) => setlastName(a.target.value)}
                                        />
                                    </InputGroup>
                                    <Form.Label htmlFor="basic-url" className='text_register' ><span>Gmail</span></Form.Label>
                                    <InputGroup className="mb-3">
                                        <Form.Control
                                            type="gmail"
                                            placeholder="masukan gmail"
                                            aria-label="Recipient's username"
                                            aria-describedby="basic-addon2"
                                            onChange={(a) => setemail(a.target.value)}

                                        />
                                    </InputGroup>

                                    <Form.Label htmlFor="basic-url" className='text_register' ><span>password</span></Form.Label>
                                    <InputGroup className="mb-3">
                                        <Form.Control
                                            type="password"
                                            placeholder="masukan password"
                                            aria-label="password"
                                            aria-describedby="basic-addon2"
                                            onChange={(a) => setPasword(a.target.value)}

                                        />
                                    </InputGroup>
                                    <div className='Button_Register' >
                                        <Button variant="info" className='btn_Login' onClick={() => { history("/Login") }} >Login</Button>{' '}
                                        <Button variant="success" className='btn_Create' onClick={() => Create()}>Create</Button>{' '}
                                    </div>
                                </>

                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Register
