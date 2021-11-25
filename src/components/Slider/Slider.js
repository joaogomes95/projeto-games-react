import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Slider(props) {
    return (
    <Carousel>
    <Carousel.Item>
        <img
        className="d-block w-100"
        src="https://www.arkade.com.br/wp-content/uploads/2018/11/Red-Dead-Redemption-2-Wallpaper-Full-HD-KeyArt-1920x10801.jpg"
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
        src="https://www.pixel4k.com/wp-content/uploads/2019/06/aloy-horizon-zero-dawn-videogame-2019-4k_1560534900.jpg"
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
        src="https://i.ytimg.com/vi/pgxRunUS0L8/maxresdefault.jpg"
        alt="Third slide"
        />

        <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
    </Carousel.Item>
    </Carousel>
    )
}