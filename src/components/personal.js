import React from 'react';
import { ShimmerSimpleGallery } from "react-shimmer-effects";
import { Row, Container, Col } from 'react-bootstrap'
import User from './personalinfo';
import { getwanted_list } from './neo4jconnection'
import * as stylecustom from '../css/index.module.css'

class Personallayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            loading: true,
        };

    }

    async componentDidMount() {
        const users = await getwanted_list()
        this.setState({ users, loading: false })
    }
    renderUsers() {
        const temparry = [];
        Array.from(this.state.users).forEach(record => {
            try {
                let name = record.get('p.name')
                let idcard = record.get('p.idcard')
                let charge = record.get('wanteddoc.charge')
                let courtname = record.get('wanteddoc.courtName')
                let caseid = record.get('crimecase.name')
                let casestation = record.get('crimecase.station')
                let key = idcard
                temparry.push(<User name={name} idcard={idcard} courtname={courtname}  charge={charge} caseid={caseid} casestation={casestation}  key={`${key}`} />);
            } catch (err) {
                console.error(err);
            }

        });
        return temparry;
    }

    render() {
        return (
                <Container fluid  class="justify-content-md-around" className={stylecustom.contentblog}>
                        <div className="text-center pt-4">
                            <h1>หมายจับ</h1>
                        </div>
                        
                        <Col>
                        <Row>
                                {this.state.loading || !this.state.users ? <ShimmerSimpleGallery  card imageHeight={100}  row={2} col={3} gap={30} caption /> : this.renderUsers()}
                                </Row>
                        </Col>
                        
                </Container>



        )
    }

}

export default Personallayout
