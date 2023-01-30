import React from 'react'
import './style.scss'
import earth from "../../assets/image/earth1.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, } from 'react-bootstrap';
import Tilt from 'react-vanilla-tilt'
import { useNavigate } from 'react-router-dom';
const Open = () => {
    const history = useNavigate()
    return (
        <Container className='Open' >
            <Row>
                <Col sm={4}>
                    <Tilt options={{ scale: 2, max: 30, glare: true, reverse: false, speed: 200 }}

                        className='global' data-tilt style={{ backgroundColor: "none" }}>
                        <img src={earth} alt='earth' ></img>
                    </Tilt>
                </Col>
                <Col sm={8}>
                    <div className='container'>
                        <h1>Hello World</h1>
                        <p><strong>Selamat datang di portfolio saya</strong>  . Di sini Anda akan melihat beberapa proyek yang telah saya kerjakan dan hasil karya saya. Saya berharap Anda akan menyukai apa yang Anda lihat dan terinspirasi oleh kreativitas saya. Silakan menjelajahi dan jangan ragu untuk menghubungi saya jika Anda memiliki pertanyaan atau komentar.</p>
                        <div className='button_home'>
                            {'>>>'} <Button variant="primary" onClick={() => history("index.html/Home")} >Letsgo</Button>
                        </div>
                    </div>
                </Col>

            </Row>
        </Container >

    )
}

export default Open
