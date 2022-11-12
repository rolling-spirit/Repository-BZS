//YOUR FIREBASE LINKS

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

var Iroom = localStorage.getItem("IIrroomm");


function Isend(){
      var Imesg = document.getElementById("Imessage").value;
      firebase.database().ref(Iroom).push({
          Iname:Innname,
          Imsg:Imesg,
          Ilike:0  
      });
      document.getElementById("Imessage").innerHTML="";
}



function getData() { firebase.database().ref("/"+Iroom).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
