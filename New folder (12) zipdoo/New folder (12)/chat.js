





    const firebaseConfig = {
        apiKey: "AIzaSyBgY4gAhB-I1kGH8IU-fRjJTE9mkYiqdWk",
        authDomain: "chatnationgns.firebaseapp.com",
        databaseURL: "https://chatnationgns-default-rtdb.firebaseio.com",
        projectId: "chatnationgns",
        storageBucket: "chatnationgns.appspot.com",
        messagingSenderId: "558921091626",
        appId: "1:558921091626:web:f3631f7dbe0d493746d153",
        measurementId: "G-HBR4QRJ2TG"
    };
      
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


    function chatsocial(){
    var usergeter=document.getElementById("Chat").value;
    firebase.database().ref("/").child(usergeter).update({
        purpose:"add user name"
    });
    }

var chatyy = localStorage.getItem("chat");

document.getElementById("Welcoming").innerHTML= "Welcome " + chatyy + "!";

function addchatnation(){
      var Chatt = document.getElementById("RoomCname").value;

      firebase.database().ref("/").child(Chatt).update({ 
            purpose : "adding room name" 
       });

      localStorage.setItem("Cchhaatt",Chatt); 
      window.location = "Chatterbox_Croom.html";

    }

function Datagetter() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("roomdisplayC").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Roomnames = childKey;
      //Start code

      console.log("Room Name - " + Roomnames);

      row = "<div class='room_name' id="+Roomnames+" onclick='redirectToRoomName(this.id)' >#"+ Roomnames +"</div><hr>";
       document.getElementById("roomdisplayC").innerHTML += row;
      //End code
      });
});
}
Datagetter();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("chaTT",name);
      window.location = "Chatterbox_Croom.html";
}






