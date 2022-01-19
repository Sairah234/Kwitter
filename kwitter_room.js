 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyAbYSkIU3_3TvgXQqPwX5_aj9-popeny0U",
  authDomain: "covid-19-hexh.firebaseapp.com",
  databaseURL: "https://covid-19-hexh-default-rtdb.firebaseio.com",
  projectId: "covid-19-hexh",
  storageBucket: "covid-19-hexh.appspot.com",
  messagingSenderId: "4412140256",
  appId: "1:4412140256:web:ebb9c5a8669e666a6d3e85"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome"+user_name+"!";
function addRoom()
{
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose:"Adding room name"
  });
  localStorage.setItem("room_name",room_name);
  window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name-"+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML +=row;

      //End code
      });});}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html"
}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}

