import { db } from "../config/firebaseConfig";
import { doc, deleteDoc } from "firebase/firestore";

export async function deleteDish(dishId) {
    try {
        const dishRef = doc(db, "dishes", dishId);
        await deleteDoc(dishRef);
        console.log(`Dish with ID ${dishId} deleted successfully`);
    } catch (error) {
        console.error("Error deleting dish:", error);
        throw error;
    }
}
