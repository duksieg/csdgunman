import React from 'react'
import 'bootstrap'
import { Carousel } from 'react-bootstrap'
import testimg from '../images/ศปอร.jpg'
import testimg2 from '../images/transbackground.jpg'
const Carouselblog = () => {

    return (
        <Carousel variant="dark" class="mx-auto py-md-2 my-md-2">
            <Carousel.Item>
                <img
                    className="mx-auto d-block w-70 "
                    height="auto"
                    src={testimg}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="mx-auto d-block  w-70"
                    height="auto"
                    src={testimg2}
                    alt="Second slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="mx-auto d-block w-70"
                    height="auto"
                    src={testimg2}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    )

}
export default Carouselblog