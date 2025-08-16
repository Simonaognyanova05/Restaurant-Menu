import { db } from "../config/firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";

export async function editDish(name, description, category, priceLv, priceEuro, dishId) {
    try {
        const dishDocRef = doc(db, "dishes", dishId);
        await updateDoc(dishDocRef, {
            name,
            description,
            category,
            priceLv: parseFloat(priceLv),
            priceEuro: parseFloat(priceEuro),
        });
    } catch (error) {
        console.error("Error updating dish:", error);
        throw error;
    }
}
