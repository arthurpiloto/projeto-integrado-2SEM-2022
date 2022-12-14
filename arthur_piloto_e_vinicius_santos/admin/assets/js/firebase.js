import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyBCxcbq_nQJXySaEY6uhGcDxQXzKTGghRY",
    authDomain: "projeto-pizzaria-900fd.firebaseapp.com",
    projectId: "projeto-pizzaria-900fd",
    storageBucket: "projeto-pizzaria-900fd.appspot.com",
    messagingSenderId: "782045974597",
    appId: "1:782045974597:web:fa784b7b7f56be1f81932c",
    measurementId: "G-TNYF98R6K4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import { getStorage, ref, uploadBytes, getDownloadURL  } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-storage.js"

const uploadImage =  async (image, name) => {
    const storage = getStorage(app);

    const mountainsRef = ref(storage, `images/${name}.jpg`);
    

    await uploadBytes(mountainsRef, image)

    return await getDownloadURL(mountainsRef)
   
} 

export {
  uploadImage
}