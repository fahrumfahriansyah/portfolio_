import { Container, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import "./style.scss"
import { gsap } from 'gsap';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HandleAccess from '../HandleAccess';
const NavbarHome = () => {
    const history = useNavigate()
    const expand = "sm"
    const judul = ["F", "A", "H", "R", "i", "A", "N", "S", "Y", "A", "H"]
    const { mode, data } = useSelector(state => state.global)
    const dispatch = useDispatch()
    const darkMode = () => {
        if (mode === "light") {
            sessionStorage.setItem("mode", "dark")
        } else {
            sessionStorage.setItem("mode", "light")
        }
        const modeId = (sessionStorage.getItem("mode"))
        dispatch({ type: "mode", payload: modeId })
    }

    useEffect(() => {
        gsap.set('.nav_gsap', {
            duration: 0, y: -110, opacity: 0, overwrite: 'none'
        });
        gsap.to('.nav_gsap', {
            duration: 1, y: 0, opacity: 1, overwrite: 'none'
        });


    }, []);


    const SetHome = () => {
        if (data) {
            const dataId = sessionStorage.getItem("dataId")
            history(`/Home/${data._id || dataId}`)
        } else {
            history("/Home")
        }
    }
    const Logout = () => {
        sessionStorage.removeItem("dataId")
        dispatch({ type: "Admin", payload: "" })
        console.log(data)
        history("/Home")
    }

    const About = () => {
        history("/About")
    }
    const Contact = () => {
        history("/Contacts")
    }
    const dataId = sessionStorage.getItem("dataId")
    const check = data || dataId
    return (
        <Navbar key={expand} bg={mode} variant={mode} expand={expand} className="mb-3 Header_project"  >
            <Container fluid>
                <Navbar.Brand href="#" className='judul_header'>
                    {judul.map((a, b) => {
                        return (<span key={b}>{a}</span>)
                    })}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-${expand}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                            Navbar
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body style={{ marginRight: "100px" }} >
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link className='nav_gsap' onClick={() => { SetHome() }} >Home</Nav.Link>
                            <Nav.Link className='nav_gsap' onClick={() => { About() }} >About</Nav.Link>
                            <Nav.Link className='nav_gsap' onClick={() => { Contact() }} >Contact</Nav.Link>
                            <NavDropdown
                                className='nav_gsap'
                                title="Setting"
                                id={`offcanvasNavbarDropdown-expand-${expand}`}
                            >
                                <NavDropdown.Item onClick={() => { darkMode() }} >
                                    Mode
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-brightness-high-fill" viewBox="0 0 16 16">
                                        <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                                    </svg>
                                </NavDropdown.Item>
                                {check ? <HandleAccess /> : false}

                                <NavDropdown.Divider />
                                {check ? <NavDropdown.Item onClick={() => { Logout() }} >
                                    Logout
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-door-open" viewBox="0 0 16 16">
                                        <path d="M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z" />
                                        <path d="M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13 2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117zM11.5 2H11v13h1V2.5a.5.5 0 0 0-.5-.5zM4 1.934V15h6V1.077l-6 .857z" />
                                    </svg>
                                </NavDropdown.Item> : <NavDropdown.Item onClick={() => { history("/Login") }} >
                                    Login_Admin
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-door-open" viewBox="0 0 16 16">
                                        <path d="M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z" />
                                        <path d="M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13 2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117zM11.5 2H11v13h1V2.5a.5.5 0 0 0-.5-.5zM4 1.934V15h6V1.077l-6 .857z" />
                                    </svg>
                                </NavDropdown.Item>}

                            </NavDropdown>
                        </Nav>

                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
}

export default NavbarHome
