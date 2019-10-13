var firebaseConfig = {
    apiKey: "AIzaSyBkN7hBxeg51ajiY_tcjIEUt7iikbP3GJw",
    authDomain: "train-time-c54a0.firebaseapp.com",
    databaseURL: "https://train-time-c54a0.firebaseio.com",
    projectId: "train-time-c54a0",
    storageBucket: "train-time-c54a0.appspot.com",
    messagingSenderId: "772972568411",
    appId: "1:772972568411:web:9db21b8ae9a8114c70c47e"
  };

  firebase.initializeApp(firebaseConfig);

var trainDatabase = firebase.database();

// Add train button, collect and store info
$("#addTrain").on("click", function() {
  var trainName = $("#trainNameInput")
    .val()
    .trim();
  var destination = $("#destinationInput")
    .val()
    .trim();
  var firstTrain = moment(
    $("#timeInput")
      .val()
      .trim(),
    "HH:mm"
  )
    .subtract(10, "years")
    .format("X");
  var frequency = $("#frequencyInput")
    .val()
    .trim();

  console.log(firstTrain);
});

// Moment.js math
trainDatabase.ref().on("child_added", function(snapshot) {
  var name = snapshot.val().name;
  var destination = snapshot.val().destination;
  var frequency = snapshot.val().frequency;
  var firstTrain = snapshot.val().firstTrain;

  var remainder = moment().diff(momemt.unix(firstTrain), "minutes") % frequency;
  var minutes = frequency - remainder;
  var arrival = moment()
    .add(minutes, "m")
    .format("hh:mm A");

  console.log(remainder);
  console.log(minutes);
  console.log(arrival);

  $("#trainTable > tBody").append(
    "<tr><td>" +
      name +
      "</td><td>" +
      destination +
      "</td><td>" +
      frequency +
      "</td><td>" +
      arrival +
      "</td><td>" +
      minutes +
      "</td><td>" +
      minutes +
      "</td></tr>"
  );
});
