import React from 'react'
import { Container, Nav, Navbar, Image } from "react-bootstrap";
import {  Facebook } from 'react-bootstrap-icons';
import 'bootstrap'


const TopNav = () => {
    return (
        <main>
            <Navbar  style={{backgroundColor:"#000000"}} variant="dark" expand="lg">
                <Navbar.Toggle aria-controls="simple-navbar" />
                <Navbar.Collapse id="simple-navbar">
                    <Container>
                        <Nav className="nav-auto d-inline-flex mx-auto">
                        
                            <Nav.Link href="/">หน้าแรก</Nav.Link>
                            <Nav.Link href="/wantedlist">ประกาศหมายจับ</Nav.Link>
                            <Nav.Link href="/duty">หน้าที่และพันธกิจ</Nav.Link>
                            <Nav.Link href="/about">เกี่ยวกับองค์กร</Nav.Link>
                            <Nav.Link href="/documentdownload">ดาวน์โหลดฟอร์ม</Nav.Link>

                            
                        </Nav>
                        
                        <Nav className="nav-auto d-inline-flex me-auto float-end">
                            <Nav.Link href="https://www.facebook.com/%E0%B8%A8%E0%B8%B9%E0%B8%99%E0%B8%A2%E0%B9%8C%E0%B8%9B%E0%B8%A3%E0%B8%B2%E0%B8%9A%E0%B8%9B%E0%B8%A3%E0%B8%B2%E0%B8%A1%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B8%A1%E0%B8%B5%E0%B8%AD%E0%B8%B4%E0%B8%97%E0%B8%98%E0%B8%B4%E0%B8%9E%E0%B8%A5-%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%9B%E0%B8%B7%E0%B8%99%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%88%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%A2%E0%B8%AA%E0%B8%B3%E0%B8%84%E0%B8%B1%E0%B8%8D-100473482197965" >ติดต่อเรา</Nav.Link>
                            <Navbar.Brand  href="https://www.facebook.com/%E0%B8%A8%E0%B8%B9%E0%B8%99%E0%B8%A2%E0%B9%8C%E0%B8%9B%E0%B8%A3%E0%B8%B2%E0%B8%9A%E0%B8%9B%E0%B8%A3%E0%B8%B2%E0%B8%A1%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B8%A1%E0%B8%B5%E0%B8%AD%E0%B8%B4%E0%B8%97%E0%B8%98%E0%B8%B4%E0%B8%9E%E0%B8%A5-%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%9B%E0%B8%B7%E0%B8%99%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%88%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%A2%E0%B8%AA%E0%B8%B3%E0%B8%84%E0%B8%B1%E0%B8%8D-100473482197965"><Facebook className="" /></Navbar.Brand>
                        </Nav>
                    </Container>
                </Navbar.Collapse>
            </Navbar>
        </main>
    )
}

export default TopNav

