import { useNavigate } from 'react-router-dom';
import '../static/css/style.css';
import { useAuth } from '../contexts/AuthContext';
import { login } from '../services/login';
import { useState } from 'react';

export default function Login() {
    const navigate = useNavigate();
    const { onLogin } = useAuth();
    const [errorMessage, setErrorMessage] = useState("");

    const loginHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const { email, password } = Object.fromEntries(formData);

        login(email, password)
            .then((res) => {
                onLogin(res);
                navigate('/admin/create');
            })
            .catch((error) => {
                console.error("Login error:", error);
                if (error.code) {
                    switch (error.code) {
                        case 'auth/user-not-found':
                            setErrorMessage('Потребител с този имейл не е намерен.');
                            break;
                        case 'auth/wrong-password':
                            setErrorMessage('Грешна парола. Моля, опитайте отново.');
                            break;
                        case 'auth/invalid-email-verified':
                            setErrorMessage('Невалиден имейл адрес.');
                            break;
                        case 'auth/too-many-requests':
                            setErrorMessage('Твърде много неуспешни опити. Моля, опитайте отново по-късно.');
                            break;
                        default:
                            setErrorMessage('Грешна парола или имейл. Моля, опитайте отново.');
                    }
                } else {
                    setErrorMessage('Възникна неочаквана грешка. Моля, опитайте отново.');
                }
            });
    };

    return (
        <section>
            <div className="login-form">
                <h2>Влизане като администратор</h2>
                <form onSubmit={loginHandler}>
                    <label htmlFor="email">Имейл</label>
                    <input type="email" id="email" name="email" placeholder="Въведете имейл" required />

                    <label htmlFor="password">Парола</label>
                    <input type="password" id="password" name="password" placeholder="Въведете парола" required />

                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                    <button type="submit">Влизане</button>
                </form>
            </div>
        </section>
    );
}
