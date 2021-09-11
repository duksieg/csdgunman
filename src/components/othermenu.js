import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import * as stylecustomMenu from "../css/index.module.css"
import helpus from '../images/helpus.jpg'

const OtherMenu=()=>{
    return(
        <Container fluid className={stylecustomMenu.contentblog2} >
                <div class="d-flex px-3 my-md-5 justify-content-around" >
                <a href="/report" class="w-auto h-100">
                <img src={helpus} class="fluid h-auto rounded mt-3"/>
                 </a>
                <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3D173498394895473%26id%3D100473482197965&show_text=false&width=500" 
                 
                class="overflow-hidden mt-3 w-25" scrolling="no" 
                allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                     
                </div>
        </Container>
        

    )
}

export default OtherMenu