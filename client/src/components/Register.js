import { Form, useNavigate } from 'react-router-dom';
import '../static/css/style.css';
import { useAuth } from '../contexts/AuthContext';
import { register } from '../services/register';
import { useState } from 'react';

export default function Register() {
    const navigate = useNavigate();
    const registerHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const { email, password, rePass } = Object.fromEntries(formData);

        if (password !== rePass) {
            alert('Паролите не съвпадат!');
            return;
        };
        if (password.length < 6) {
            alert('Вашата парола е слаба!');
            return;
        };

        try {
            await register(email, password);
            navigate('/admin/register');
        }catch(e){
            alert("Възникна грешка! Моля, опитайте по-късно!");
        }
    }
return (
    <section>
        <div className="login-form">
            <h2>Създаване на администратор</h2>
            <form onSubmit={registerHandler}>
                <label htmlFor="email">Имейл</label>
                <input type="email" id="email" name="email" placeholder="Въведете имейл" required />

                <label htmlFor="password">Парола</label>
                <input type="password" id="password" name="password" placeholder="Въведете парола" required />
                <label htmlFor="rePass">Повторете паролата</label>
                <input type="password" id="rePass" name="rePass" placeholder="Повторете паролата" required />
                {/* {errorMessage && <p className="error-message">{errorMessage}</p>} */}
                <button type="submit">Регистрация</button>
            </form>
        </div>
    </section>
);
}
