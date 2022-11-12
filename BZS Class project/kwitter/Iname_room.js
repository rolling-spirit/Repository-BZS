
//ADD YOUR FIREBASE LINKS HERE

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
      apiKey: "AIzaSyCR6Jb8Owi4av-dfm5dshrRH-0RHMxknTM",
      authDomain: "interappi.firebaseapp.com",
      databaseURL: "https://interappi-default-rtdb.firebaseio.com",
      projectId: "interappi",
      storageBucket: "interappi.appspot.com",
      messagingSenderId: "348565048498",
      appId: "1:348565048498:web:96142fb90db39263fa4dab",
      measurementId: "G-WVP0JNSEHK"
    };

firebase.initializeApp(firebaseConfig);

var Innname = localStorage.getItem("Iname");

document.getElementById("Hello").innerHTML= "Welcome " + Innname + "!";

function addIroom(){
      var Iroom = document.getElementById("RoomIname").value;

      firebase.database().ref("/").child(Iroom).update({ 
            purpose : "adding room name" 
      });

      localStorage.setItem("IIrroomm",Iroom); 
      window.location = "Ipage.html";

    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("roomdisplayI").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      console.log("Room Name - " + Room_names);

      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("roomdisplayI").innerHTML += row;
      //End code
      });
});
}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("IIroom",name);
      window.location = "Iname_page.html";
}



function Ilogout(){
localStorage.removeItem("Iname");
localStorage.removeItem("RoomIname");
window.location = "Idex.html";
}


