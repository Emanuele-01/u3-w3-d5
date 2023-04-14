import { Button, Col, Form, Nav, Navbar, Row } from "react-bootstrap"
import Spotify_Logo from '../asset/Spotify_Logo.png'

const MyLeftbar = () => {

    return(
        <Row>
        <Col xs={3}>
            <Nav className="bg-dark nav">
                <Navbar.Brand>
                    <img width='120px' src={Spotify_Logo} alt="logo Spotify" className="p-2 mt-2 ms-2" />
                </Navbar.Brand>
                <Nav.Link className="mt-2 mb-2 text-white fs-3">Home</Nav.Link>
                <Nav.Link className="mt-2 mb-2 text-white fs-3">Preferiti</Nav.Link>
                <Nav.Link className="mt-2 mb-2">
                    <Form>
                        <div className="d-flex">
                        <Form.Control type="text" placeholder="Search" />
                        <Button className="border border-white" type="submit" variant="dark">GO</Button>
                        </div>
                    </Form>
                </Nav.Link>
            </Nav>
        </Col>
        </Row>
    )
}

export default MyLeftbar;