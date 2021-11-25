import Container from '../../components/Container/Container';
import Cards from '../../components/Cards/Cards';
import {  useState, useEffect} from 'react';
import axios from 'axios';

export default function WishList(){

    const [wishlist, setWishlist] = useState([]);
    const [mounted, setMounted] = useState(false);
    const [notLogged, setNotLogged] = useState(true);

    useEffect(() => {
        setMounted(true)

        if(localStorage.token) {
            const token = localStorage.token;

            const config = {
                headers: {  Authorization: `Bearer ${token}`}
            }

            axios.get('/game/myWishList', config)
            .then(response => {
                setNotLogged(false)
                setWishlist(response.data.games)
            })
        }
    }, [mounted])

    return(
        
        <Container title='Meu Favoritos'>   
            {
                wishlist.map (game => (
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
    )
}