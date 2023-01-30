import React, { useEffect, useState } from 'react'
import { Card, Row, Col, Container, Form, InputGroup, Button } from 'react-bootstrap';
import { NavbarHome } from '../../components';
import Google from "../../assets/image/Google.png"
import "./style.scss"
import { useNavigate } from 'react-router-dom';
import doraemon from "../../assets/image/doraemon.png"
import doraemon_seram from "../../assets/image/doraemon-seram.png"
import { gsap } from 'gsap';
import axios from 'axios';
import { useDispatch } from 'react-redux';
const Login = () => {

    const history = useNavigate()
    const [doraemon_img, setDoraemon_img] = useState(false)
    const [valuePassword, setValuePassword] = useState(1)
    const [doraemonJht, setDoraemonJht] = useState(false)
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [value, setValue] = useState([])
    const dispatch = useDispatch()
    const animation = (a) => {
        setDoraemon_img(true)
        setValuePassword(a)
    }
    const Login = () => {
        setDoraemonJht(false)
        let data = { email, password }
        axios.post("https://serverPortfolio-2.fahrumfahriansy.repl.co/v1/Auth/login", data, {
            headers: {
                'content-type': 'application/x-www-form-urlencoded'
            }
        }).then(res => {
            const status = res.data.message
            if (status) {
                setValue([{ msg: "succes" }])
                const data = res.data.data
                sessionStorage.setItem("dataId", data._id)
                dispatch({ type: "Admin", payload: data._id })
                const dataId = sessionStorage.getItem("dataId")
                history(`/Home/${data._id || dataId}`)

            } else {
                setValue([{ msg: "akun tidak ada" }])
            }
        }).catch(err => {
            console.log("err di post login")
            let error = err.response.data.data
            setValue(error)
        })
    }




    useEffect(() => {
        if (doraemon_img) {
            gsap.set('.image_animate', {
                duration: 0, y: 0, opacity: 3, ease: "elastic"
            });
            gsap.to('.image_animate', {
                duration: 1, y: 100, opacity: 3,
            });
            gsap.set('.logoGoogle', {
                duration: 0, y: -110, opacity: 0,
            });
            gsap.to('.logoGoogle', {
                duration: 1, y: 0, opacity: 1, ease: "bounce"

            });
        }
        gsap.set('.H3_Login', {
            duration: 0, x: 110, opacity: 0,
        });
        gsap.to('.H3_Login', {
            duration: 1, x: 0, opacity: 1, ease: "elastic"

        });
        if (valuePassword.length === 8) {
            setDoraemonJht(true)
            gsap.set('.doraeman_jahat', {
                duration: 0, y: -60, opacity: 1, ease: "elastic"
            });
            gsap.to('.doraeman_jahat', {
                duration: 1, y: 0, opacity: 1,
            });
        }


    }, [doraemon_img, valuePassword.length])



    return (
        <div className='container_Login_ligth'>
            <NavbarHome />
            <Container className='Layout_Login' >
                <Row className="justify-content-md-center test">
                    <img src={doraemon} alt='logo goole' style={{ marginTop: "100px", width: "200px" }} className="image_animate"  ></img>
                    <Col sm="12" className='col_Login'>
                        <Card style={{ width: '18rem' }} className=' card_Login'  >
                            <Card.Body>
                                <img src={Google} alt='logo goole' width={80} className="logoGoogle" ></img>
                                <h3 className='H3_Login' >Login</h3>
                                {value.map(a => {
                                    return (<p key={a.msg} style={{ fontSize: "8px" }} >{a.msg}</p>)
                                })}
                                <hr></hr>
                                <>
                                    <Form.Label htmlFor="basic-url" className='text_Login' ><span>Gmail</span></Form.Label>
                                    <InputGroup className="mb-3">
                                        <Form.Control
                                            placeholder="masukan gmail"
                                            aria-label="Recipient's username"
                                            aria-describedby="basic-addon2"
                                            onChange={(a) => { setEmail(a.target.value) }}
                                        />
                                    </InputGroup>

                                    <Form.Label htmlFor="basic-url" className='text_Login' ><span>password</span></Form.Label>
                                    <InputGroup className="mb-3" onChange={(a) => { animation(a.target.value) }} >
                                        <Form.Control
                                            type={doraemonJht ? "text" : "password"}
                                            placeholder="masukan password"
                                            aria-label="password"
                                            aria-describedby="basic-addon2"
                                            onChange={(a) => { setPassword(a.target.value) }}
                                        />
                                    </InputGroup>
                                    <div className='Button_Login' >
                                        <Button variant="info" className='btn_Daftar' onClick={() => { history("/Register") }} >Daftar</Button>{' '}
                                        <Button variant="success" className='btn_Create' onClick={() => { Login() }} >Masuk</Button>{' '}
                                    </div>
                                </>

                            </Card.Body>
                        </Card>
                    </Col>
                    <img src={doraemon_seram} alt='logo goole' style={{ marginTop: "100px", width: "140px" }} className="doraeman_jahat"  ></img>
                </Row>

            </Container>
        </div >
    )
}

export default Login
