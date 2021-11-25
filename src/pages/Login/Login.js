import Container from '../../components/Container/Container'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import axios from "axios";

export default function Login () {  
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = event => {
        event.preventDefault();

        const login = {
            email: email,
            password: password
        }

        axios.post('/auth/login', login)
        .then(response => {
            const token = response.data.token;
            localStorage.setItem('token', token);
        })
    }
    return (
        <Container>
            <form onSubmit={handleSubmit}>

                <h3>Fazer Login</h3>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" required 
                        onChange={event => setEmail(event.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" 
                        onChange={event => setPassword(event.target.value)}
                    />
                </div>                
                <ul/>
                
                <button type="submit" className="btn btn-dark btn-lg btn-block">Login</button>
                <ul/>
                <p className="forgot-password text-right">
                    Ainda não possui login? <a href="/Register">Cadastrar</a>
                </p>
            </form>
    </Container>    
    );    
}