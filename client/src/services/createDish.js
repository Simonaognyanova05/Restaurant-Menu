import { db } from "../config/firebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid"; 

export async function createDish(name, description, category, price) {
    try {
        const id = uuidv4(); 
        const newDish = {
            _id: id,
            name,
            description,
            category,
            price: parseFloat(price) 
        };
        await setDoc(doc(db, "dishes", id), newDish);
        return id; 
    } catch (error) {
        console.error("Error creating dish:", error);
        throw error;
    }
}
