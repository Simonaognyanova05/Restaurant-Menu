import { db } from "../config/firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";

export async function editDish(name, description, category, price, dishId) {
    try {
        const dishDocRef = doc(db, "dishes", dishId);
        await updateDoc(dishDocRef, {
            name,
            description,
            category,
            price: parseFloat(price) // Уверете се, че цената е число
        });
    } catch (error) {
        console.error("Error updating dish:", error);
        throw error;
    }
}
