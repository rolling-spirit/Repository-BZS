//ADD YOUR FIREBASE LINKS
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmD_JJxvgKBtRXlSNoGfycAsUlh17Hgmo",
  authDomain: "protest-61245.firebaseapp.com",
  databaseURL: "https://protest-61245-default-rtdb.firebaseio.com",
  projectId: "protest-61245",
  storageBucket: "protest-61245.appspot.com",
  messagingSenderId: "939841150054",
  appId: "1:939841150054:web:f3be8e4f6b6af71fd021a7"
};
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("chat");
document.getElementById("Welcoming").innerHTML = "Welcome " + user_name + "!";

function addchatnation() {
  room_name = document.getElementById("RoomCname").value;

  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name",
  });
  

  localStorage.setItem("room_name", room_name);

  window.location = "Chatterbox_Croom.html";
}

function Datagetter() {
  firebase
    .database()
    .ref("/")
    .on("value", function (snapshot) {
      document.getElementById("roomdisplayC").innerHTML = "";
      snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        Room_names = childKey;
        console.log("Room Name - " + Room_names);
        row =
          "<div class='room_name' id=" +
          Room_names +
          " onclick='redirectToRoomName(this.id)' >#" +
          Room_names +
          "</div><hr>";

        document.getElementById("roomdisplayC").innerHTML += row;
      });
    });
}

Datagetter();

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "Chatterbox_Croom.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}
