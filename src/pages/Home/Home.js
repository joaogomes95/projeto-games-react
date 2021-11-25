import Slider from "../../components/Slider/Slider";
import Search from "../../components/Search/Search";
import Container from "../../components/Container/Container";
import Cards from "../../components/Cards/Cards";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useState, useEffect } from "react";

export default function Home() {

    const [games, setGames] = useState([]);
    const [mounted, setMouted] = useState(false);

    const getData = async () => {
        await axios.get('/game/findMany')
        .then(response => {
            if(mounted){
                setGames(response.data)
            }
        })
    }

    useEffect(() => {
        setMouted(true)
        getData()        
    }, [mounted])

    // console.log(games)

    return(
        <div className="home">
            <Slider/>                
            <Search/>
            <Container title='Destaques'>
                {
                    games.map(game => (
                        <Cards
                            id={game.id}
                            image={game.image}
                            title={game.name}
                            preco={game.price}
                            key={game.id}
                        />
                    )
                )}

            </Container>
        </div>
    )
}