
import React from 'react'
import { Modal, Button ,Image} from 'react-bootstrap'
import 'bootstrap';
import { useState } from 'react'
import tempic from '../images/backfree500.png'



const User = ({ name, idcard, courtname,  charge,caseid,casestation }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div class="col-3 col-md-2 col-lg-3"  >
            <div className="d-flex mt-2">
                <div class="card bg-transparent mx-md-3 my-md-2 mx-lg-4 my-lg-2"  >
                    <img  class="card-img-top" src={tempic} />
                    <div class="card-body">
                        <div class="d-grid gap-2">
                        <Button class="bg-transparent" onClick={handleShow} >
                        <p class="card-text stretched-link" onClick={handleShow} style={{fontSize:'16px'},{fontSize:'2vmin'},{color:'#ffffff'}}>{name}</p>
                        </Button>
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={show} onHide={handleClose}
            centered>
                <Modal.Header >
                    <img src={tempic}  class="mx-auto" width="100px" height="100px"></img>
                </Modal.Header>
                <Modal.Body>
                    <h3>{name}</h3>
                    <p>สถานีรับผิดชอบ : {casestation}  คดีเลขที่ :{caseid}</p>
                    <p>สถานที่ออกหมาย :{courtname}</p>
                    <p>ข้อหา :{charge}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    )

}

export default User