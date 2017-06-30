
var diversRef = firebase.database().ref("Divers/");

var diver = firebase.database().ref().child('-KkWE7dwmq2LtDYDZLzD');

// diversRef.set({
//     diver:{
//      name: "Neftali",
//      date: "03/23/2016",
//      depth: 178,
//      purpose: "whatever the reason is",
//      time: "1430"
//     }   
// });

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
    .then(function (data) {
      console.log("LOGGED IN: " + JSON.stringify(data.email))
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
  else {
    alert("You are already logged out... dummy")
  }
}

function checkState() {
  firebase.auth().onAuthStateChanged(function (user) {
    // console.log("STATE CHANGED")
    if (user) {
      //console.log("User present")
      window.location = "./index.html";
      console.log(user);
    }
    else {
      //console.log("User NOT Present")
      window.location = "./login.html";
    }
    

  });
}

function getCurrentUser(){
      
      var user = firebase.auth().currentUser;
      console.log(user);
      let id = user.uid;
      fbdbref.child.push({
        id: id,
        
      }) 
      
    }

var user = firebase.auth().currentUser;
if (user != null) {
  user.providerData.forEach(function (profile) {
    console.log("Sign-in provider: " + profile.providerId);
    console.log("  Provider-specific UID: " + profile.uid);
    console.log("  Name: " + profile.displayName);
    console.log("  Email: " + profile.email);
    console.log("  Photo URL: " + profile.photoURL);
  });
}







// var diver = diversRef.child('-KkWE7dwmq2LtDYDZLzD').on('value', function(snap){
//     console.log(snap.val());
// })

// else{
//     console.log(text);

// }

diversRef.push({
  profile: {
    name: "neftali",
    id: "0001",
    email: "nefty@example.com",
    company: "diver inc"
  },
  dives: {
    dive_1:{
      name: "Dominique",
      date: "03/24/2016",
      time: "1430",
      depth: 178,
      purpose: "To catch Willie!"
    },
    dive_2:{
      name: "Dominique",
      date: "03/24/2016",
      time: "1450",
      depth: 158,
      purpose: "To free Willie!"
    }
  }  
})
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
