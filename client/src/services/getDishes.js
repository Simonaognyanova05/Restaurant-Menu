import { db } from "../config/firebaseConfig";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";

export async function getDishes(category) {
    try {
        const dishesCollection = collection(db, "dishes");

        let q = query(
            dishesCollection,
            where("category", "==", category)
        );

        const querySnapshot = await getDocs(q);

        let dishes = [];
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            const createdAt = data.createdAt?.toDate
                ? data.createdAt.toDate()
                : null;

            dishes.push({ id: doc.id, ...data, createdAt });
        });

        // сортиране ръчно, ако няма createdAt
        dishes.sort((a, b) => {
            if (a.createdAt && b.createdAt) {
                return a.createdAt - b.createdAt; // 🔄 възходящо
            }
            if (a.createdAt) return 1;
            if (b.createdAt) return -1;
            return b.id.localeCompare(a.id);
        });


        return dishes;
    } catch (error) {
        console.error("Error fetching dishes:", error);
        throw error;
    }
}
