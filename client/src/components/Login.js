import { useNavigate } from 'react-router-dom';
import '../static/css/style.css';
import { useAuth } from '../contexts/AuthContext';
import { login } from '../services/login';

export default function Login() {
    const navigate = useNavigate();
    const { onLogin } = useAuth();

    const loginHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const { email, password } = Object.fromEntries(formData);

        login(email, password)
            .then(res => {
                onLogin(res); 
                navigate('/admin/create');
            })
            .catch((error) => {
                console.error("Login failed:", error.message);
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

                    <button type="submit">Влизане</button>
                </form>
            </div>
        </section>
    );
}
