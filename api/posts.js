import { collection, getDocs } from "firebase/firestore";
import { db } from "../utils/firebase";

export const getPosts = () => {
  db.collection("Posts")
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        console.log(`${doc.id} => ${doc.data()}`);
      });
    });
};
