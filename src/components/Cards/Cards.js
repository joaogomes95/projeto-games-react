
import axios  from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaHeart } from "react-icons/fa";
import '../Cards/Cards.css';
import { useNavigate } from 'react-router-dom';

export default function Cards(props) {

  const navigate = useNavigate();

  const goToGamePage = () => {
    navigate('/game', { state:props.id })
  }

  const wishGame = () => {
    const token = localStorage.token;
    const config = {
      headers: {  Authorization: `Bearer ${token}`}
    }

    const id = props.id;

    axios.get(`/game/wish/${id}`, config)
  }


  return (

    <div className="card card-container">
        <img className="img-card" onClick={goToGamePage} src={props.image} alt={props.title} />
        
      <div className="favo">
          <span>{props.title}</span>
      </div>
      <div className='ano'>
          <span>R$ {props.preco}</span>
          <button className="btn-like"onClick={wishGame}>
          <FaHeart />
          </button>
      </div>
    </div>    
  )
}



