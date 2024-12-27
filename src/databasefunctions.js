import { db } from "./firebase.js";
import { collection, onSnapshot, addDoc, serverTimestamp, query, orderBy } from "firebase/firestore";

// Define the collection reference
const postCollectionRef = collection(db, "posts");

// Define the query for ordering posts
const postCollectionQuery = query(postCollectionRef, orderBy("timestamp", "desc"));

// Subscribe to posts
export const subscribeToPosts = (callback) => {
 return onSnapshot(postCollectionQuery, (snapshot) => {
  const filteredData = snapshot.docs.map((doc) => {
   const timestamp = doc.data().timestamp?.toDate() || null;

   // Extract time in HH:MM format
   const time = timestamp
    ? `${timestamp.getHours().toString().padStart(2, "0")}:${timestamp.getMinutes().toString().padStart(2, "0")}`
    : null;

   return {
    ...doc.data(),
    id: doc.id,
    timestamp: time, // Replace timestamp with time-only
   };
  });
  callback(filteredData); // Pass the filtered data to the provided callback
 });
};


// Submit a new post
export const submitPost = async (message, displayName, email, photoUrl) => {
 try {
  await addDoc(postCollectionRef, {
   name: displayName,
   description: email,
   message: message,
   photoUrl: photoUrl || '',
   timestamp: serverTimestamp(),
  });
 } catch (err) {
  console.error("Error submitting post:", err);
 }
};
