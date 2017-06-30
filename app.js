

var diversRef = firebase.database().ref("Divers/");
var diveRef = firebase.database().ref("Dives/");
var diver = firebase.database().ref().child('-KkWE7dwmq2LtDYDZLzD');

function submit(){

var divePurpose = document.getElementById('purpose').value;
var diveDate = document.getElementById('date').value;
var diverBudy = document.getElementById('buddy').value;
var diveDepth = document.getElementById('depth').value;
var temperature = document.getElementById('temp').value;
var location = document.getElementById('location').value;
var bottomTime = document.getElementById('btime').value;
var comments = document.getElementById('comments').value;

  diveRef.push({
    Purpose: divePurpose,
    Date: diveDate,
    Buddy: diverBudy,
    Depth : diveDepth,
    Temperature: temperature,
    Location: location,
    BottomTime: bottomTime,
    Comments: comments
  })
}

function signUp(){

  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  diversRef.push({
    name: name,
    email: email
  })

  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
  });

}
function displaySignUp(){
    console.log("function is working");

  window.location.href="sign_up.html"

}

diversRef.child("-KnL9JLKuolQlU5fj5af").on('value', function(snap){
    console.log(snap.val());
});

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
      window.location = "nav_page.html";
      console.log(user);
    }
    else {
      //console.log("User NOT Present")
      window.location = "index.html";
    }
  })
}

function getCurrentUser() {

  var user = firebase.auth().currentUser;
  console.log(user);
  let id = user.uid;
  fbdbref.child.push({
    id: id,

  })
}
