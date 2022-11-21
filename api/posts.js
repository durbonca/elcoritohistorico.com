import { collection, getDocs } from "firebase/firestore"; 
import { db } from "../utils/firebase";

export const getPosts = async () => {
    const querySnapshot = await getDocs(collection(db, "Posts"));
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    })
};