import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "../utils/firebase";

export const getPosts = async () => {
  const docRef = doc(db, "posts", "1aQkAFOz1De0vGfW3hZv");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
}
};
