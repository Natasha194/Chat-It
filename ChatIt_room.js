//ADD YOUR FIREBASE LINKS HERE

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCH-81OZM4mUTwzeDncIJJ6hnKDpvqJ7zE",
    authDomain: "chatter-821e7.firebaseapp.com",
    databaseURL: "https://chatter-821e7-default-rtdb.firebaseio.com",
    projectId: "chatter-821e7",
    storageBucket: "chatter-821e7.appspot.com",
    messagingSenderId: "1014630785848",
    appId: "1:1014630785848:web:9617c896e45bf85d5797cd"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function name() {
var username = localStorage.getItem("login Name");

document.getElementById("welcomeLabel").innerHTML = "Welcome " + username + "!!";
}

function addRoom() {
    var roomName = document.getElementById("roomName").value;
    firebase.database().ref("/").child(roomName).update({purpose: "adding_room_name"});
    localStorage.setItem("room name", roomName);
    window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    
    console.log(Room_names);
   
    row = "<div class='room_name' id='+ Room_names +' onclick='redirectToRoomName(this.id)'>#" + Room_names
    + "</div> <hr>";

    document.getElemengtById("TRN").innerHTML += row;

    

    //End code
    });});}
getData();


//new

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("name", name);
    window.location = "kwitter_page.html";
}



