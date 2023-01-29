import React, { useState } from 'react'
import { Container, Row, Col, Card, ListGroup, CloseButton, Button, Toast } from 'react-bootstrap';
import "./style.scss"
import { NavbarHome } from '../../components';
import { useSelector } from 'react-redux';
import { ApiGetAccess, ApiUpdateAccess, ApiDeleteAccess } from '../../config/redux/action/Access.js';
const Access = () => {
    const { mode } = useSelector(state => state.global)
    const [dataAccess, setDataAccess] = useState([])
    const [success, setSuccess] = useState(false)
    const [remove, setRemove] = useState(false)
    ApiGetAccess(setDataAccess)
    const handleAcces = (data) => {
        ApiUpdateAccess(data, setSuccess)
    }
    const handloRemove = (data) => {
        ApiDeleteAccess(data, setRemove)
    }
    const check = success || remove
    return (
        <div className={`containerAccess${mode}`}>
            <NavbarHome />

            <Container className='cardAcces' >
                {check ? <Toast className='ToastAccess'>
                    <Toast.Header  >
                        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                        <strong className="me-auto">{success ? "Access" : "delete"}</strong>
                        <small> {success ? "Access Di terima" : "delete success"}</small>
                    </Toast.Header>
                    <Toast.Body>
                        {success ? "Anda Telah Menerima Access kepada Orang Lain" : `delete telah di lakukan`}
                    </Toast.Body>
                </Toast> : false}
                <ListGroup as="ol" numbered className='AccesNumber'>
                    {dataAccess.map((data) => {
                        const Admin = data.Admin
                        const name = data.name
                        const device = Admin.device
                        return (
                            <ListGroup.Item key={data._id} className='ListAcces' >
                                <Row sm={12} className="RowAcces" >
                                    <Col>
                                        <Card style={{ width: '80%' }} className="bodyAcces" >
                                            <CloseButton className='close' onClick={() => { handloRemove(data._id) }} />
                                            <Card.Body>
                                                <Card.Title>{name.fullName}</Card.Title>
                                                <Card.Subtitle className="mb-2 text-muted">{name.lastName}</Card.Subtitle>
                                                <ListGroup variant="flush" style={{ fontSize: "10px" }} >
                                                    <ListGroup.Item>
                                                        <ul>
                                                            <li>{data.email}</li>
                                                            <li>{data.password}</li>
                                                        </ul>
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                        <ul>
                                                            <li>loginTime : {data.Admin.loginTime}</li>
                                                            <li>Browser : {device.browser}</li>
                                                            <li>version : {device.version}</li>
                                                            <li>Source : {device.source}</li>

                                                        </ul>
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                        <ul>
                                                            <li>operasi sistem :{device.os}</li>
                                                            <li>platform :{device.platform}</li>
                                                        </ul>
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                                                </ListGroup>
                                                <Button variant="outline-success" className='ButtonAcces' onClick={() => {
                                                    handleAcces(data._id)
                                                }}  >Access</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </ListGroup.Item>)
                    })}
                </ListGroup>

            </Container>
        </div >
    );
}

export default Access
