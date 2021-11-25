import { useState } from 'react';
import Container from '../../components/Container/Container';
import axios from "axios";

export default function Register() {
    

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
  
    const handleSubmit = event => {
      event.preventDefault();
  
      const user = {
        name: name,
        email: email,
        nickname: nickname,
        password: password,
        passwordConfirmation: passwordConfirmation
      }
  
      axios.post('user/register', user)
      .then(response => console.log(response))
    }

        return (
            <Container>
                <form className='register-form' onSubmit={handleSubmit}>
                    <h3>Cadastrar Conta</h3>

                    <div className="form-group">
                        <label>Nome</label>
                        <input type="text" className="form-control" placeholder="Nome Completo" required 
                        onChange={event => setName(event.target.value)}
                        />
                    </div>  

                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="Digite seu e-mail" 
                        onChange={event => setEmail(event.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label>Nickname</label>
                        <input type="text" className="form-control" placeholder="Digite seu Nickname" required 
                        onChange={event => setNickname(event.target.value)}
                        />
                    </div>              

                
                    <div className="form-group">
                        <label>Senha</label>
                        <input type="password" className="form-control" placeholder="Digite sua senha" 
                        onChange={event => setPassword(event.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label>Confirmar Senha</label>
                        <input type="password" className="form-control" placeholder="Confirme sua senha" 
                        onChange={event => setPasswordConfirmation(event.target.value)}
                        />
                    </div>

                    <br></br>
                    <button type="submit" className="btn btn-dark btn-lg btn-block">Registrar</button>
                    
                    <p className="forgot-password text-right">
                        Já possui login? <a href="/Login">login!</a>
                    </p>
                </form>
            </Container>
        );
    
}