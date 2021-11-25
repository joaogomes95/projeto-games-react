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
    </Carousel.Item>
    <Carousel.Item>
        <img
        className="d-block w-100"
        src="https://www.pixel4k.com/wp-content/uploads/2019/06/aloy-horizon-zero-dawn-videogame-2019-4k_1560534900.jpg"
        alt="Second slide"
        />        
    </Carousel.Item>
    <Carousel.Item>
        <img
        className="d-block w-100"
        src="https://i.ytimg.com/vi/pgxRunUS0L8/maxresdefault.jpg"
        alt="Third slide"
        />        
    </Carousel.Item>
    </Carousel>
    )
}