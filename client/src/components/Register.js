import { useNavigate } from 'react-router-dom';
import '../static/css/style.css';
import { useAuth } from '../contexts/AuthContext';
import { login } from '../services/login';
import { useState } from 'react';

export default function Register() {

    return (
        <section>
            <div className="login-form">
                <h2>Създаване на администратор</h2>
                <form>
                    <label htmlFor="email">Имейл</label>
                    <input type="email" id="email" name="email" placeholder="Въведете имейл" required />

                    <label htmlFor="password">Парола</label>
                    <input type="password" id="password" name="password" placeholder="Въведете парола" required />
                    <label htmlFor="rePass">Повторете паролата</label>
                    <input type="rePass" id="rePass" name="rePass" placeholder="Повторете паролата" required />
                    {/* {errorMessage && <p className="error-message">{errorMessage}</p>} */}
                    <button type="submit">Регистрация</button>
                </form>
            </div>
        </section>
    );
}
