//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyCOh16NRd-lawbjRhAY78dMtjeSfXqD2AI",
    authDomain: "kwitter-53648.firebaseapp.com",
    databaseURL: "https://kwitter-53648-default-rtdb.firebaseio.com",
    projectId: "kwitter-53648",
    storageBucket: "kwitter-53648.appspot.com",
    messagingSenderId: "933273644079",
    appId: "1:933273644079:web:7901c12366a934c5d72ada"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);


  loginName = localStorage.getItem("user_name");

document.getElementById("welcome_user").innerHTML = "Welcome " + loginName + "!";

function addRoom() {
    room_name = document.getElementById("RoomName_input").value;
    localStorage.setItem("Room", room_name);
    firebase.database().ref("/").child(room_name).update({
        purpose: "adding Room"
    });
    document.getElementById("RoomName_input").value = "";
    window.location = "community_page.html";

}

function logout() {
    window.location = "community_login.html"
    localStorage.removeItem("user_name");
    localStorage.removeItem("Room");
}



function getRoom() {

    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //Start code
            console.log("#Trending Room Name = " + Room_names);

            row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";

            document.getElementById("output").innerHTML += row;
            //End code
        });
    });
}
getRoom();

function redirectToRoomName(clicked_name) {
    console.log(clicked_name);
    localStorage.setItem("Room", clicked_name);
    window.location = "community_page.html";

}