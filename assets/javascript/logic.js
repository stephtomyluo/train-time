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
$('#add-train').on('click', function(){
    var trainName = $('#train-name-input').val().trim();
    var destination = $('#destination-input').val().trim();
    var firstTrain = moment($('#time-input').val().trim(), 'HH:mm').subtract(10,'years').format('X');
    var frequency = $('#frequency-input').val().trim();

    console.log(firstTrain)
})

trainDatabase.ref().on('child_added', function(snapshot){
    
})