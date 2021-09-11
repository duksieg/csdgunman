import React from 'react';
import { ShimmerSimpleGallery } from "react-shimmer-effects";
import { Row, Container, Col } from 'react-bootstrap'
import 'react-bootstrap/dist/react-bootstrap'
import  {getwanted_list} from './getpersonal.js'
import User from './personalcard';
import * as stylecustomPersonal from '../css/index.module.css'

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
                
                let name = record['p.name']
                let idcard = record['p.idcard']
                let charge = record['wanteddoc.charge']
                let courtname = record['wanteddoc.courtName']
                let caseid = record['crimecase.name']
                let casestation = record['crimecase.station']
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
                <Container fluid className={stylecustomPersonal.contentblog} >
                    <div class="justify-content-center py-3 text-center"  >
                        <div className="text-center pt-4">
                            <h1>รายชื่อผู้มีหมายจับ</h1>
                        </div>
                        
                        <Col>
                        <Row>
                                {this.state.loading || !this.state.users ? <ShimmerSimpleGallery  card imageHeight={100}  row={2} col={3} gap={30} caption /> : this.renderUsers()}
                                </Row>
                        </Col>
                        </div>
                </Container>



        )
    }

}

export default Personallayout
