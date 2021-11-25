import Card  from 'react-bootstrap/Card'
import axios  from 'axios'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import Container from '../Container/Container'
import 'bootstrap/dist/css/bootstrap.min.css';
import { GrLike } from "react-icons/gr";
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
            <img onClick={goToGamePage} src={props.image} alt={props.nome} />
            <div className="favo">
                <span>{props.nome}</span>
            </div>
            <div className='ano'>
                <span>R$ {props.preco}</span>
                <button onClick={wishGame}>
                <FaHeart />
                </button>
            </div>
        </div>

    




    
  )
}



