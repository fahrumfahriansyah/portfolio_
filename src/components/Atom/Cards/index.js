import React, { useState, useEffect } from 'react'
import AOS from 'aos';
import "aos/dist/aos.css";
import loadingImg from "../../../assets/image/loading.jpg"
import { Placeholder, Col, Row, Container, Card, Button, ButtonToolbar, ButtonGroup } from 'react-bootstrap'
import Logo from '../Logo'
import Tilt from 'react-vanilla-tilt'
import { ApiDelete } from '../../../config/redux/action/ApiDelete';
import "./style.scss"
import { useDispatch, useSelector } from 'react-redux';
import { CreateLogo } from '../../../pages';
import Gap from '../Gap';
import { ApiGetAll } from '../../../config/redux/action/ApiGetAll';
import { ApiGetTech } from '../../../config/redux/action/ApiGetTech';
import axios from 'axios';
const Cardss = () => {
    const { mode, data } = useSelector(state => state.global)
    const { dataTech } = useSelector(state => state.dataTech)
    const dispatch = useDispatch()
    const [background, setBgc] = useState("white")
    const [dataProject, setDataProject] = useState([])
    const [pageNumber, setPageNum] = useState(0)
    const [pageApi, setPageApi] = useState()
    const [loading, setloading] = useState(false)
    const [error, setError] = useState(false)
    const [loadDelete, setLoadDelete] = useState(false)
    const mouseEnter = (a) => {
        setBgc(a)
    }
    const setIsHovered = (a) => {
        setBgc("white")
    }
    const pageStart = (num) => {
        setPageApi(num)
    }
    useEffect(() => {
        AOS.init({
            easing: 'ease-in-out',
        });
        setloading(true)
        ApiGetAll(pageApi, setloading, setError, setDataProject, setPageNum)
        ApiGetTech(dispatch)


    }, [setError, setloading, pageApi, dispatch]);
    const buttonPage = []
    for (let b = 0; b < pageNumber; b++) {
        buttonPage.push(b + 1)
    }


    const deleteProject = (event) => {
        const dataId = sessionStorage.getItem("dataId")
        axios.get(`https://deb16b35-e085-4404-acf0-af86a4e7be1c-00-2x85sq0deyff1.global.replit.dev/v1/Auth/login/${data || dataId}`)
            .then(res => {
                let data = res.data.response.Admin.Access
                if (data) {
                    const idDelete = event.target.dataset.id;
                    ApiDelete(idDelete, setLoadDelete)

                } else {
                    alert("akun anda belum di Setujui oleh Admin    ")
                }
            }).catch(err => {
                console.log("error di pengambilan data Login")
                console.log(err)
            })

    }
    if (loading || loadDelete) {
        return (
            <Container>
                <Row >
                    {dataProject.map(data => {
                        return (
                            <Col key={data._id} sm={4}>
                                <div className="d-flex justify-content-around" style={{ marginBottom: "50%" }} >
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={loadingImg} />
                                        <Card.Body>
                                            <Placeholder as={Card.Title} animation="glow">
                                                <Placeholder xs={6} />
                                            </Placeholder>
                                            <Placeholder as={Card.Text} animation="glow">
                                                <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                                                <Placeholder xs={6} /> <Placeholder xs={8} />
                                            </Placeholder>
                                            <Placeholder.Button variant="primary" xs={6} />
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        );
    }
    if (error) {
        return (
            <div>
                <h2 style={{ margin: "20px auto", textAlign: "center" }} >Project error</h2>
            </div>
        )
    }

    const dataId = sessionStorage.getItem("dataId")
    const check = data || dataId
    return (
        <Container className={`project_card_${mode}`}  >
            <Row >
                {dataProject.map(data => {
                    const text = data.project
                    return (
                        <Col key={data._id} sm={4} style={{ display: "flex", alignItems: "stretch" }} >
                            <Tilt options={{ scale: 2, max: 50, glare: true, reverse: false, speed: 200 }}

                                className='global' data-tilt style={{ backgroundColor: "none", width: "max-content" }} >
                                <Card style={{ width: '18rem' }} data-aos="fade-up-right" data-aos-offset="100" className='card_3d' >
                                    <Card.Img variant="top" src={`https://deb16b35-e085-4404-acf0-af86a4e7be1c-00-2x85sq0deyff1.global.replit.dev/${data.image}`} className="image_card" />
                                    <Card.Body >
                                        <Card.Title className="title_card" >{text.judul}</Card.Title>
                                        <Card.Text className="text-card" style={{ padding: "10px", objectFit: "contain", width: "60%" }} >
                                            {text.body}
                                        </Card.Text>
                                        <div className='button_project' style={{ padding: "10px", objectFit: "contain", width: "60%" }} >
                                            <Button variant="primary" className="button_card" href={text.link} >Start</Button>
                                            {check ? <Button data-id={data._id} variant="danger" className="button_card" onClick={deleteProject} >Delete</Button> : false}
                                        </div>

                                    </Card.Body>
                                </Card>
                            </Tilt>
                        </Col>)
                })}

                <Col sm={12} >
                    <ButtonToolbar aria-label="Toolbar with button groups" className='project_button' data-aos="flip-up" data-aos-offset="0" >
                        <ButtonGroup className="me-2 project_button_grup" aria-label="First group">
                            {buttonPage.map((a) => {
                                return (<Button onClick={() => pageStart(a)} key={a} >{a}</Button>)
                            })}
                        </ButtonGroup>
                    </ButtonToolbar>
                </Col>
            </Row>
            <Row className='mt-5' >
                <Col sm={12}>
                    {data ? <CreateLogo /> : false}
                    {data ? <Gap height={40} /> : false}
                    <div className='Header_techonology' >
                        <h3>Techonology</h3>

                        <hr></hr>
                        <div className='Container_Logo'  >
                            {dataTech.map((data) => {
                                const dataTech = data.Technology
                                return (
                                    <Logo idData={data._id} key={data._id} id={dataTech.bgc} href={dataTech.link} src={`https://deb16b35-e085-4404-acf0-af86a4e7be1c-00-2x85sq0deyff1.global.replit.dev/${data.image}`} title={dataTech.judul} bgcc={background === dataTech.bgc ? background : "white"} border={`1px solid ${dataTech.bgc}`} onMouseEnter={(a) => mouseEnter(a.target.id)} onMouseLeave={(a) => setIsHovered(a.target.id)} data-aos="flip-left" data-aos-offset="0" />
                                )
                            })}

                        </div>

                    </div>
                </Col>


            </Row>
        </Container >
    )
}

export default Cardss
