
//var diversRef = firebase.database().ref("Divers/");

function logIn() {
  var email = document.getElementById('mail').value;
  var password = document.getElementById('password').value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // [START_EXCLUDE]
      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
      document.getElementById('sign-in').disabled = false;
      // [END_EXCLUDE]
    })
    .then(function(data){
    console.log("LOGGED IN: " + JSON.stringify(data))
      checkState()
    });
    
  //document.getElementById('sign-in').disabled = true;
}
function logOut() {
  if (firebase.auth().currentUser) {
    firebase.auth().signOut();
    checkState();
    //console.log('sign out function is working');
  }
  else{
    alert("You are already logged out... dummy")
  }
}

function checkState() {
  firebase.auth().onAuthStateChanged(function (user) {
   // console.log("STATE CHANGED")
    if (user) {
      //console.log("User present")
      window.location = "welcome.html";
    }
    else{
      //console.log("User NOT Present")
      window.location = "index.html";
    }

  });
}







// var diver = diversRef.child('-KkWE7dwmq2LtDYDZLzD').on('value', function(snap){
//     console.log(snap.val());
// })

// else{
//     console.log(text);

// }

// diversRef.push({
//     name : "Dominique",
//     date : "03/23/2016",
//     time : "1430",
//     depth: 178,
//     purpose : "whatever the reason is"
// })
// diversRef.push({
//     name : "Guil",
//     date : "03/23/2016",
//     time : "1430",
//     depth: 178,
//     purpose : "whatever the reason is"
// })

// diversRef.on('value', function(snap){
//     console.log(snap.val());
// });

// function readUsers(){
// diversRef.on('value', function(snap){
//   var divers = snap.val();
//   console.log(snap.val());
//   return divers;
// });
// }
//
// var mainText = document.getElementById("mainText");
// var submitBtn = document.getElementById("submitBtn");
// var fireHeading = document.getElementById("fireHeading");
//
// var headingRef = firebase.database().ref().child("Heading");
//
// headingRef.on('value', function (snap) {
//     console.log(snap.val());
// });
//
// function submitClick(){
//   var firebaseRef = firebase.database().ref();
//
//  // console.log(mainText.value);
//
//   firebaseRef.push().set("hello");
// }



//
// diversRef.set({
//    John: {
//       number: 1,
//       age: 30
//    },
//
//    Amanda: {
//       number: 2,
//       age: 20
//    }
// });

// var johnRef = firebase.database().ref("players/John");
//
// johnRef.update({
//    "number": 10
// });
//
// diversRef.push({
//    name: "Amanda",
//    number: 2,
//    age: 20
// });
