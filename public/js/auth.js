/**
 * Created by gilbertanderson on 6/17/17.
 */
function logIn() {
    let email = document.getElementById('mail').value;
    let password = document.getElementById('password').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .catch(function (error) {
            // Handle Errors here.
            let errorCode = error.code;
            let errorMessage = error.message;
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
        alert("You are already logged out")
    }
}

function checkState() {
    firebase.auth().onAuthStateChanged(function (user) {
        // console.log("STATE CHANGED")
        if (user) {
            //console.log("User present")
            window.location = ".html";
            console.log(user);
        }
        else {
            //console.log("User NOT Present")
            window.location = "index.html";
        }
    });
}

function getCurrentUser() {
    let user = firebase.auth().currentUser;
    console.log(user);
    let id = user.uid;
    fbdbref.child.push({
        id: id,
    })
}