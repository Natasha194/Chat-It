function move() {
    var name = document.getElementById("nameLogin").value;
    localStorage.setItem("login Name", name);
    window.location = "chatIt_room.html";
}