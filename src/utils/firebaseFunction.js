import { collection, doc, getDocs, orderBy, query, setDoc } from "firebase/firestore"
import { firestore } from "../firebase.config"

// saving new Item
export const saveItem = async (data) => {
    await setDoc(doc(firestore, "foodItems", `${Date.now()}`), data, {
        merge : true
    });
};

// getall food Items
export const getAllFoodItems = async () => {
    const items = await getDocs(
        query(collection(firestore, "foodItems"), orderBy("id", "desc"))
    );
    // console.log("items :- ", items);
    return items.docs.map((doc) => doc.data());
}