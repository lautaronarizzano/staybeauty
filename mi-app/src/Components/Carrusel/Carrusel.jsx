import Carousel from 'react-bootstrap/Carousel';
import './Carrusel.css'

function Carrusel() {
  return (
    <Carousel variant="dark" className='carousel'>
      <Carousel.Item className='carousel'>
        <img
          className="d-block w-100 img-banner"
          src="https://www.shutterstock.com/image-photo/cosmetology-face-cleaning-female-beautiful-260nw-1870818715.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item className='carousel'>
        <img
          className="d-block w-100 img-banner"
          src="https://calmacentroestetico.com/wp-content/uploads/2015/07/LIMPIEZA-FACIAL-2a.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item className='carousel'>
        <img
          className="d-block w-100 img-banner"
          src="https://static.diariofemenino.com/uploads/belleza/138936-productos-limpieza-facial.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrusel;

