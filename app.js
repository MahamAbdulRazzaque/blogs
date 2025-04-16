
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBxXQDKyr4DhqGw7Bgsr4av6ecP_cu8pok",
    authDomain: "blogs-af06b.firebaseapp.com",
    projectId: "blogs-af06b",
    storageBucket: "blogs-af06b.firebasestorage.app",
    messagingSenderId: "248357695734",
    appId: "1:248357695734:web:d2b10349fcc88a50d57cd7",
    measurementId: "G-XXN5PFD3P5"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
