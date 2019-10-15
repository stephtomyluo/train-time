var firebaseConfig = {
  apiKey: "AIzaSyBmfnmHzvgOw7iXt724pOx2tI1ZyMwxxnM",
  authDomain: "project-name-d2ebd.firebaseapp.com",
  databaseURL: "https://project-name-d2ebd.firebaseio.com",
  projectId: "project-name-d2ebd",
  storageBucket: "project-name-d2ebd.appspot.com",
  messagingSenderId: "149025787405",
  appId: "1:149025787405:web:1c828b8ddc7be3ddf64f44",
  measurementId: "G-6VK7CW4V4S"
};

  firebase.initializeApp(firebaseConfig);

var trainDatabase = firebase.database();

// Add train button, collect and store info
$(document).on("click", '#addTrain', function(event) {
  event.preventDefault();
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

  trainInputs = {
  trainName: trainName,
  destination: destination,
  firstTrain: firstTrain,
  frequency: frequency
}
// Send object to firebase 
  trainDatabase.ref().push(trainInputs)
});

// Moment.js math
trainDatabase.ref().on("child_added", function(snapshot) {
  var name = snapshot.val().trainName;
  var destination = snapshot.val().destination;
  var frequency = snapshot.val().frequency;
  var firstTrain = snapshot.val().firstTrain;
// Use .split on colon
  
  var remainder = moment().diff(moment.unix(firstTrain), "minutes") % frequency
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
      "</td></tr>"
  );
});


