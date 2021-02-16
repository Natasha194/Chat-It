function move() {
    var name = document.getElementById("nameLogin").value;
    localStorage.setItem("login Name", name);
    window.location = "chatIt_room.html";
}



window.addEventListener("keydown", my_keydown);

function my_keydown(e) {

    keypressed = e.keyCode;
    console.log(keypressed);
    
    
    if (keypressed == "13") {
          move();
          console.log("login");
      }
}
