import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { resetPassword } from '../services/resetPassword'; // твоята service функция
import '../static/css/style.css';

export default function ForgottenPass() {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await resetPassword(email);
            alert("Изпратихме ви имейл за възстановяване на паролата.");
            navigate("/admin/login");
        } catch (error) {
            if (error.code === 'auth/user-not-found') {
                alert("Не съществува потребител с този имейл.");
            } else if (error.code === 'auth/invalid-email') {
                alert("Невалиден имейл адрес.");
            } else {
                alert("Грешка: " + error.message);
            }
        }
    };

    return (
        <section>
            <div className="login-form">
                <h2>Промяна на парола</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Имейл</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Въведете имейл"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button type="submit">Изпрати имейл</button>
                </form>
            </div>
        </section>
    );
}
