import { db } from "../config/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";

export async function getDishes(category) {
    try {
        const dishesCollection = collection(db, "dishes");
        const q = query(dishesCollection, where("category", "==", category));
        const querySnapshot = await getDocs(q);

        let dishes = [];
        querySnapshot.forEach((doc) => {
            dishes.push({ id: doc.id, ...doc.data() });
        });

        return dishes;
    } catch (error) {
        console.error("Error fetching dishes:", error);
        throw error;
    }
}
