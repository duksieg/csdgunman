import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import * as stylecustomMenu from "../css/index.module.css"
import helpus from '../images/helpus.jpg'

const OtherMenu=()=>{
    return(
        <Container fluid >
            <Row className={stylecustomMenu.contentblog2}>
                <Col md={6}>
                <a href="/helpus">
                <img src={helpus} class="fluid rounded float-start mt-3"></img>
                    </a>
                </Col>
            </Row>
        </Container>
        

    )
}

export default OtherMenu