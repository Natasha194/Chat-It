//YOUR FIREBASE LINKS

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


  var user__name = localStorage.getItem("login Name");
  var room__name = localStorage.getItem("room name");


function getData() { firebase.database().ref("/"+room__name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code


console.log(firebase_message_id);
console.log(message_data);
var name = message_data['name'];
var message = message_data['message'];
var like = message_data['like'];
var nameWithTag = "<h4>" + name + "<img src='161294566646643466.png' class='user_tick'> </h4>";
var messageWithTag = "<h4 style=color: black>" + message + "</h4>";
var likeButton = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
var spanWithTag = "<span class='glyphicon glyphicon-thumbs-up'> Like: " + like + "</span> </button> <hr>";

var row = nameWithTag + messageWithTag + likeButton + spanWithTag;
document.getElementById("output").innerHTML += row;


//End code
    } });  }); }
getData()


function send() {
     var msg = document.getElementById("msg").value;

     firebase.database().ref(room__name).push({
           name: user__name,
           message: msg,
           like: 0
    });

    document.getElementById("msg").value = "";
}


function logout() {
    localStorage.removeItem("login Name");
    localStorage.removeItem("room name");
    window.location = "index.html";
}


function updateLike(message_id) {
    console.log(message_id);
    button_id = message_id;
    var likes = document.getElementById(button_id).value;
    var updatedLikes = Number(likes) + 1;
    console.log(updatedLikes);
    firebase.database().ref(room__name).child(message_id).update({like: updatedLikes});
}

var value = localStorage.getItem("room name");


function thing() {
    document.getElementById("nameName").innerHTML = value;
}



window.addEventListener("keydown", my_keydown);

function my_keydown(e) {

      keypressed = e.keyCode;
      console.log(keypressed);
      
      
      if (keypressed == "13") {
            send();
            console.log("send");
        }
}
