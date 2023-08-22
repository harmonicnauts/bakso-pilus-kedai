import {
  collection,
  doc,
  // getDoc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";
import { firestore } from "../firebase.config";

export const saveItem = async (data) => {
  await setDoc(doc(firestore, 'foodItems', `${Date.now()}`), data, { merge: true });
};

// export const getPesanan = async (id) => {

// };

export const getAllFoodItems = async () => {
  const items = await getDocs(
    query(collection(firestore, "foodItems"), orderBy("id", "desc"))
  );
  return items.docs.map((doc) => doc.data());
};


export const saveOrders = async (data) => {
  await setDoc(doc(firestore, 'transactions', `${data.id}`), data, { merge: true });
};

// export const downloadImage = async (data) => {
//   const storage = getStorage();
//   getDownloadURL(ref(storage, 'Images/contoh_qris.png'))
//     .then((url) => {
//       // `url` is the download URL for 'images/stars.jpg'

//       // This can be downloaded directly:
//       const xhr = new XMLHttpRequest();
//       xhr.responseType = 'blob';
//       xhr.onload = (event) => {
//         const blob = xhr.response;
//       };
//       xhr.open('GET', url);
//       xhr.send();

//     })
//     .catch((error) => {
//       // Handle any errors
//       console.log(error);
//     });
// };