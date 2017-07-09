
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDSpLwA_dJgGIBWzg_DQ5eL5xXszTp2XVE",
    authDomain: "trains-bfa3d.firebaseapp.com",
    databaseURL: "https://trains-bfa3d.firebaseio.com",
    projectId: "trains-bfa3d",
    storageBucket: "trains-bfa3d.appspot.com",
    messagingSenderId: "634873071153"
  };
  firebase.initializeApp(config);
  var database = firebase.database();

//storing variables for later use
var name = "";
var dest = "";
var time = 0;
var freq = 0;

//capture button click
$("#addTrain").on("click",function(){

  //prevents page refresh
  event.preventDefault();

  //logic for storing and retrieving user input
  name = $("#nameForm").val().trim();
  dest = $("#destForm").val().trim();
  time = $("#timeForm").val().trim();
  freq = $("#freqForm").val().trim();

  firebase.database().ref().push({
    name:name,
    dest:dest,
    time:time,
    freq:freq
});
});

firebase.database().ref().on("child_added",function(snapshot){
  $("#nameForm").html(snapshot.val().name);
  $("#destForm").html(snapshot.val().dest);
  $("#timeForm").html(snapshot.val().time);
  $("#freqForm").html(snapshot.val().freq);


  //log all of the things
  console.log(snapshot.val());
  console.log(snapshot.val().name);
  console.log(snapshot.val().dest);
  console.log(snapshot.val().time);
  console.log(snapshot.val().freq);

},
//errors!
function(errorObject) {
  console.log("Errors handled: " + errorObject.code);
});
