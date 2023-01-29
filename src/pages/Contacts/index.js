import React from 'react'
import "./style.scss"
import { Container, Row, Col, Figure } from 'react-bootstrap';
import whatsap from "../../assets/image/background/whatsap.png"
import instragram from "../../assets/image/background/inst.png"
import github from "../../assets/image/background/github.png"
import ListGroup from 'react-bootstrap/ListGroup';
import NavbarHome from '../../components/Molekul/Navbar'
import { useSelector } from 'react-redux';

const Contacts = () => {
    const { mode } = useSelector(state => state.global)
    const modeId = (sessionStorage.getItem("mode"))
    const check = mode || modeId
    return (
        <div className={`Container_Contact_${check}`}>
            <NavbarHome />
            <Container className='contain' >
                <Row className="row_contain" >
                    <Col sm={12}>

                        <div className='contain' >
                            <div className='judul'>
                                <h4>Contact Me</h4>
                                <hr></hr>
                            </div>
                            <div className='list'>
                                <ListGroup variant="flush">

                                    <ListGroup.Item action variant={`${check}`} >Gmail : fahrumfahriansyah1@gmail.com</ListGroup.Item>
                                    <ListGroup.Item action variant={`${check}`} >Gmail : fahrumfahriansyah@gmail.com</ListGroup.Item>
                                    <ListGroup.Item action variant={`${check}`} ></ListGroup.Item>
                                </ListGroup>
                            </div>
                            <div className="row_Akun" >

                                <div  >
                                    <a href="https://wa.me/6285710247164">
                                        <Figure  >
                                            <Figure.Image
                                                width={50}
                                                height={50}
                                                alt="whatsap"
                                                src={whatsap}
                                            />
                                        </Figure>
                                    </a>
                                </div>
                                <div >
                                    <a href="https://www.instagram.com/siii_pahriii">

                                        <Figure>
                                            <Figure.Image
                                                width={50}
                                                height={50}
                                                alt="instragram"
                                                src={instragram}
                                            />
                                        </Figure>
                                    </a>

                                </div>
                                <div >
                                    <a href="https://github.com/Fahriansyahh">

                                        <Figure>
                                            <Figure.Image
                                                width={50}
                                                height={50}
                                                alt="github"
                                                src={github}
                                            />
                                        </Figure>
                                    </a>

                                </div>
                                <div >
                                    <a href="https://github.com/fahrumfahriansyah">

                                        <Figure>
                                            <Figure.Image
                                                width={50}
                                                height={50}
                                                alt="github"
                                                src={github}
                                            />
                                        </Figure>
                                    </a>

                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Contacts
