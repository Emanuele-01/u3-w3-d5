import { Col, Nav, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const MyHome = () => {
    return(
        <Row>
            <Col xs={2}>
                <Nav className="d-flex flex-column align-items-stretch bg-dark">
                    <Navbar.Brand>
                        <Link> </Link>
                    </Navbar.Brand>
                </Nav>
            </Col>
        </Row>
    )
        
    
}

export default MyHome;