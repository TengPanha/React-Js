import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
function SlideShow() {
    return (
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://image1.apartmentfinder.com/i2/AKcTEYVoMhZQePZ3-WgfMCuHW3Ny-XeMyalMTtRekmg/110/image.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfmiaVj69mvo9M9PhWZ0A8hImppSC125jRixQUffKRY9OlUOVjd2uARCSoIKsjFYZVSe0&usqp=CAU"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSQWy_yFgCRLwsedMiMHWKUMgDlmwLZ7hobkDqazF4rJ6FHQDmHLnHHQNdWVqsEUK2mo0&usqp=CAU"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    )
}

export default SlideShow