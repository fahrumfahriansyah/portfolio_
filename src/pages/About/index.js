import React, { useEffect } from 'react'
import { Container, Row, Col, Figure, Accordion, ListGroup } from 'react-bootstrap';
import "./style.scss"
import NavbarHome from '../../components/Molekul/Navbar'
import fahri from "../../assets/image/background/fahri.jpg"
import AOS from 'aos';
import Tilt from 'react-vanilla-tilt'
import { gsap } from 'gsap';
import { useSelector } from 'react-redux';
const About = () => {
    const { mode } = useSelector(state => state.global)

    useEffect(() => {
        AOS.init({
            easing: 'ease-in-out',
        });
        gsap.set('.span1', {
            duration: 0, y: -110, opacity: 0, overwrite: 'none'
        });
        gsap.to('.span1', {
            duration: 1, y: 0, opacity: 1, overwrite: 'none'
        });

        gsap.set('.figure_image', {
            duration: 0, y: -200, opacity: 1, overwrite: 'none'
        });
        gsap.to('.figure_image', {
            duration: 1, y: 0, opacity: 1, overwrite: 'none'
        });
    })
    const modeId = (sessionStorage.getItem("mode"))
    const check = mode || modeId
    return (

        <div className={`container_about_${check}`} >
            <NavbarHome />
            <Container className='container_grid' >
                <Row>
                    <Col sm={12} >
                        <div className="figure_About">
                            <Figure >
                                <Tilt options={{ scale: 2, max: 80, glare: false, reverse: false, speed: 200 }}
                                    style={{ borderRadius: "50%", backgroundColor: "transparent" }}
                                >
                                    <Figure.Image
                                        width={200}
                                        height={180}
                                        alt="171x180"
                                        src={fahri}
                                        className="figure_image"
                                    />
                                </Tilt>
                            </Figure>
                            <Figure.Caption className='text_figure' >
                                <span className='span1' >M.Fahri</span><spa className='span2' >ansyah</spa>
                            </Figure.Caption>
                        </div>
                    </Col>
                </Row>

                <Row className='text_About'  >
                    <Col sm={6}>
                        <p style={{ textAlign: "center" }} className="p1" >Saya, M. Fahriansyah, adalah seorang web developer muda berusia 19 tahun. Saat ini saya sedang kuliah di Universitas Pamulang dan tinggal di Tangerang Selatan, tepatnya di Bintaro. Selama ini, saya telah mengembangkan kemampuan saya dalam pembuatan website dan aplikasi web yang berkualitas dan inovatif. Saya senang bekerja dengan teknologi terbaru dan selalu ingin belajar lebih banyak untuk meningkatkan kompetensi saya. Saya berharap dapat bekerja sama dengan Anda dalam proyek yang akan datang dan membawa solusi yang inovatif untuk permasalahan Anda.</p></Col>
                    <Col sm={6}><p style={{ textAlign: "center" }} className="p2" >Selain mengembangkan kemampuan saya dalam pembuatan website dan aplikasi web, saya juga memiliki pengalaman dalam bekerja dengan teknologi seperti Javascript, HTML, CSS, Node.js dan React. Saya juga memahami konsep dasar pemrograman dan arsitektur aplikasi. Saya sangat tertarik dalam pembuatan aplikasi yang responsif dan mudah digunakan, serta memperhatikan aspek keamanan dan performa. Saya berdedikasi untuk menyelesaikan proyek yang diberikan dengan baik dan tepat waktu, serta selalu siap untuk belajar dan berkembang dalam bidang ini.</p></Col>
                </Row>
                <Row className='list_About' >
                    <Col sm={4} >
                        <Accordion defaultActiveKey="0" data-aos="zoom-in-right" >
                            <Accordion.Item eventKey="0">
                                <Accordion.Header className="header_list" style={{ fontFamily: "Helvetica, sans-serif" }}>Study</Accordion.Header>
                                <Accordion.Body>
                                    <ListGroup style={{ fontFamily: "Georgia, 'Times New Roman', Times, serif", fontSize: "14px" }}>
                                        <ListGroup.Item >Sekolah Dasar : Nurul Falah</ListGroup.Item>
                                        <ListGroup.Item>Sekolah Menengah Pertama : Al Saadah</ListGroup.Item>
                                        <ListGroup.Item>Sekolah Menengah Kejuruan : SMK Letris Indonesia 1</ListGroup.Item>
                                        <ListGroup.Item>Universitas : Universitas Pamulang</ListGroup.Item>
                                    </ListGroup>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                    </Col>
                    <Col sm={4} >
                        <Accordion defaultActiveKey="0" data-aos="zoom-out-down" >
                            <Accordion.Item eventKey="0">
                                <Accordion.Header className="header_list" style={{ fontFamily: "Helvetica, sans-serif" }}>Hoby</Accordion.Header>
                                <Accordion.Body>
                                    <ListGroup as="ol" numbered style={{ fontFamily: "Georgia, 'Times New Roman', Times, serif", fontSize: "14px" }} >
                                        <ListGroup.Item as="li">
                                            Travelling</ListGroup.Item>
                                        <ListGroup.Item as="li">belajar</ListGroup.Item>
                                    </ListGroup>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                    <Col sm={4} >
                        <Accordion defaultActiveKey="0" data-aos="zoom-in-left" >
                            <Accordion.Item eventKey="0">

                                <Accordion.Header className="header_list" style={{ fontFamily: "Helvetica, sans-serif" }} >Characteristic</Accordion.Header>
                                <Accordion.Body >
                                    <ListGroup style={{ fontFamily: "Georgia, 'Times New Roman', Times, serif", fontSize: "14px" }} >
                                        <ListGroup.Item>Selalu ingin tau</ListGroup.Item>

                                    </ListGroup>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
            </Container >
        </div >
    )
}

export default About
