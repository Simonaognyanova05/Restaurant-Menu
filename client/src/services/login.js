import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebaseConfig";

export async function login(email, password) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user.toJSON();
    } catch (error) {
        console.error("Firebase login error:", error); // Логване на грешката за отстраняване
        throw error; // Запазете оригиналната грешка за обработка в `catch`
    }
}
