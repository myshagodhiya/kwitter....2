// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB21Z7DLacmTEjUaH1QK1kakVmlUxPEWyY",
  authDomain: "kwitter-7c432.firebaseapp.com",
  projectId: "kwitter-7c432",
  storageBucket: "kwitter-7c432.appspot.com",
  messagingSenderId: "506741456655",
  appId: "1:506741456655:web:7caf57fa160bb8d851087a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
