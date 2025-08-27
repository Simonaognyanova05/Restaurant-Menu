import { db } from "../config/firebaseConfig";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid"; 

export async function createDish(name, description, category, priceLv, priceEuro) {
    try {
        const id = uuidv4(); 
        const newDish = {
            _id: id,
            name,
            description,
            category,
            priceLv: parseFloat(priceLv),
            priceEuro: parseFloat(priceEuro),
            createdAt: serverTimestamp(), // 🔥 автоматична дата от сървъра
        };

        await setDoc(doc(db, "dishes", id), newDish);
        return id; 
    } catch (error) {
        console.error("Error creating dish:", error);
        throw error;
    }
}
