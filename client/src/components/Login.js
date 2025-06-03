import '../static/css/style.css'

export default function Login() {
    return (
        <section>
            <div className="login-form">
                <h2>Влизане като администратор</h2>
                <form>
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