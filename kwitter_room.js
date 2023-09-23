var firebaseConfig = {
    apiKey: "AIzaSyCSdLngBaLV0dqmt_p8RLZL0m8GUzZ41Hg",
    authDomain: "kwitter-cf913.firebaseapp.com",
    databaseURL: "https://kwitter-cf913-default-rtdb.firebaseio.com",
    projectId: "kwitter-cf913",
    storageBucket: "kwitter-cf913.appspot.com",
    messagingSenderId: "1061728970282",
    appId: "1:1061728970282:web:9d3183a86729bb0f498553"
  };
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML="welcome "+ user_name +"!";

function addRoom()
{
    room_name = document.getElementById("room_name").value;


    firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id" + Room_names + "onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
    document.getElementById("output").innerHTML += row;
    });});}
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}