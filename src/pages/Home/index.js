import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavbarHome } from '../../components/Molekul/index'
import { Col, Row, Container } from 'react-bootstrap'
import axios from "axios"
import { Cardss, Gap } from '../../components';
import bunga from "../../assets/image/bunga.png"
import "./style.scss"
import CreateBlog from '../CreateBlog';
const Home = () => {
    const { mode, data } = useSelector(state => state.global)
    const dispatch = useDispatch()
    if (!data) {
        const dataId = sessionStorage.getItem("dataId")
        if (dataId) {
            dispatch({ type: "Admin", payload: dataId })
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            axios.delete(`https://serverPortfolio-2.fahrumfahriansy.repl.co/v1/Auth`)
                .then(response => {
                    console.log(response.data);
                })
                .catch(error => {
                    console.log("err di delete Auth")
                    console.log(error);
                });
        }, 1000 * 60 * 60); // setInterval akan dijalankan setiap 1 jam
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={`home_${mode}`}>
            <NavbarHome />
            <Container>
                {/* Stack the columns on mobile by making one full-width and the other half-width */}
                <Row>
                    <Col sm={8} >
                        <div className='Contain_home' >
                            <h1>Selamat datang</h1>
                            <p>Di sini Anda akan menemukan hasil karya yang saya banggakan dari berbagai proyek yang saya kerjakan menggunakan teknologi terkini seperti Javascript, HTML,Nodejs, React dan lainnya. Dari aplikasi web yang berkualitas hingga sistem yang mampu memudahkan proses bisnis, saya yakin Anda akan terkesan dengan kualitas dan inovasi yang saya berikan dalam setiap karya saya. Selamat menjelajahi dan jangan ragu untuk menghubungi saya jika Anda memiliki pertanyaan atau ingin bekerja sama dalam proyek yang akan datang </p>
                        </div>
                    </Col>
                    <Col sm={4} >
                        <div className='image_home'>
                            <img src={bunga} alt="bunga" height={100} style={{ marginTop: "100px", height: "400px" }} ></img>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className='Contain_project' >

                <div className='project_header'>
                    <h1>Projects</h1>
                    <div className='button_project'>
                        {data ? <Gap height={50} /> : false}
                        {data ? <CreateBlog /> : false}
                    </div>
                </div>
                <Cardss />
            </div>
        </div >
    )
}

export default Home
