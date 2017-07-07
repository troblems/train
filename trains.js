<src="https://www.gstatic.com/firebasejs/4.1.3/firebase.js">

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

  // 2. Button for adding trains
  $("#add-train-btn").on("click", function(event) {
    event.preventDefault();

    // Grabs user input
    var trainName = $("#train-name-input").val().trim();
    var dest = $("#dest").val().trim();
    var firstTime = moment($("#start-input").val().trim(), "DD/MM/YY").format("X");
    var freq = $("#rate-input").val().trim();

    // Creates local "temporary" object for holding new train
    var newTrain = {
      name: trainName,
      role: dest,
      start: firstTime,
      rate: freq
    };
  }
  // Uploads train data to the database
  database.ref().push(newTrain);
