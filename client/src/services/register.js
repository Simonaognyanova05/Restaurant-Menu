import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebaseConfig";

export async function register(email, password) {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        alert("Успешна регистрация!");
    } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
            alert("Потребител с този имейл вече съществува!");
        } else {
            alert("Грешка при регистрация: " + error.message);
        }
    }
}
