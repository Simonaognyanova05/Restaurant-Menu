import { useNavigate } from 'react-router-dom';
import '../static/css/style.css'
import { useAuth } from '../contexts/AuthContext';
import { login } from '../services/login';

export default function Login() {
    const navigate = useNavigate();
    const { onLogin } = useAuth();

    const loginHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const { username, password } = Object.fromEntries(formData);

        login(username, password)
            .then(res => {
                onLogin(res);
                navigate('/admin/create');
            })
            .catch(() => {
                console.log("You can't login!");
            });
    }
    return (
        <section>
            <div className="login-form">
                <h2>Влизане като администратор</h2>
                <form onSubmit={loginHandler}>
                    <label for="username">Потребителско име</label>
                    <input type="text" id="username" name="username" placeholder="Въведете потребителско име" />

                    <label for="password">Парола</label>
                    <input type="password" id="password" name="password" placeholder="Въведете парола" />

                    <button type="submit">Влизане</button>
                </form>
            </div>
        </section>
    );
}