const firebaseConfig =
 { apiKey: "AIzaSyDudSwtd9fOm4tTaaPHFhwp_I_ojjuf0YU", 
 authDomain: "practice-27c18.firebaseapp.com",
  databaseURL: "https://practice-27c18-default-rtdb.firebaseio.com",
   projectId: "practice-27c18", 
   storageBucket: "practice-27c18.appspot.com",
    messagingSenderId: "692026397843",
     appId: "1:692026397843:web:e7f52402c99d64c54da966" };
      // Initialize Firebase 
const app = initializeApp(firebaseConfig);
  
//ADD YOUR FIREBASE LINKS
function Adduser(){
    user_name=document.getElementById("userName").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    });
}