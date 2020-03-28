import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiLogIn} from 'react-icons/fi';

import api from '../../services/api';

import './styles.css'
import imgHeroes from '../../assets/heroes.png'
import logo from '../../assets/logo.svg'

export default function Logon(){
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleID(e){
        e.preventDefault();


        try {
            const response = await api.post('session', {id});
            
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongNome', response.data.nome);

            history.push('/profile');
        } catch (error) {
            alert('Deu erro, tente novamente!!');
        }
     
    }
    
    return(
        <div className="logon-container">
            <section className="form">
                <img src={logo} alt="Be The Hero"/>

                <form onSubmit={handleID}>
                    <h1>Faça seu Logon</h1>

                    <input placeholder="Sua ID"
                    value={id}
                    onChange={e => setId(e.target.value)}/>
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041"/>
                        Não tenho cadastro</Link>
                </form>

            </section>

            <img src={imgHeroes} alt="Heroes"/>
        </div>
    );
}