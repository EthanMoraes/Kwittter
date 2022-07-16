const firebaseConfig = {
      apiKey: "AIzaSyAYQ3BsMTpkENzD2B-47iFIrWkHKMSHicg",
      authDomain: "kwitter-c7816.firebaseapp.com",
      databaseURL: "https://kwitter-c7816-default-rtdb.firebaseio.com",
      projectId: "kwitter-c7816",
      storageBucket: "kwitter-c7816.appspot.com",
      messagingSenderId: "1018936717814",
      appId: "1:1018936717814:web:b6fbb297503d673422d7d7"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      firebase_massages_id = childKey;
      massage_data = childDat
      //Start code
      console.log(firebase_massages_id);
      console.log(message_data);
      name = message_data ['name'];
      massage = massage_dta['message'];
      like = massage_data['like'];
      name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
      massage_with_tag = "<h4 class='message_h4'>" + massage + "</h4>";
      likr_button ="<button class='btn btn-warning' id="+firebase_massage_id+" valuse="+like+" onclick='updateLike(this.id)'>";
      row = name_with_tag + massage_with_tag +Like_button + span_with_tag;
      document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").ariaValueMax;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";     
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
          window.location.replace("index.html");
}
function updateLike(massage_id)
{
      console.log("clicked o n like button - " + massage_id);
      button_id = massage_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(massage_id).updated({
            like : updated_likes
      });
}