import { db } from "../config/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

export async function getDishById(dishId) {
    try {
        const dishRef = doc(db, "dishes", dishId);
        const dishSnap = await getDoc(dishRef);

        if (dishSnap.exists()) {
            return { id: dishSnap.id, ...dishSnap.data() };
        } else {
            throw new Error("Dish not found");
        }
    } catch (error) {
        console.error("Error fetching dish by id:", error);
        throw error;
    }
}
