import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebaseConfig";

export async function login(email, password) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return await (userCredential.user).toJSON(); 
    } catch (error) {
        throw new Error(error.message);
    }
}
