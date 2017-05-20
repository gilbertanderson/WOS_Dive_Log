/**
 * Created by gilbertanderson on 5/19/17.
 */
// Initialize Firebase
var config = {
    apiKey: "AIzaSyA6v_JJJJs4GdIp_2_2eNAyhVwinqf6wzo",
    authDomain: "dive-log-38e86.firebaseapp.com",
    databaseURL: "https://dive-log-38e86.firebaseio.com",
    projectId: "dive-log-38e86",
    storageBucket: "dive-log-38e86.appspot.com",
    messagingSenderId: "350927718630"
};
firebase.initializeApp(config);

var database = firebase.database();

function writeData(uid, date, depth, name, purpose, time) {
    firebase.database().ref('Divers/' + key).set({
        uid: uid,
        date: date,
        depth: depth,
        name: name,
        purpose: purpose,
        time: time
    });

    // Get a key for a new dive.
    var newDiveKey = firebase.database().ref().child('dives').push().key;

    // Write the new dive's data simultaneously in the dives list and the user's dives list.
    var updates = {};
    updates['/dives/' + newDiveKey] = diveData;
    updates['/user-dives/' + uid + '/' + newDiveKey] = diveData;

    return firebase.database().ref().update(updates);
}

function readData() {
    var key = firebase.auth().currentUser.uid;
    return firebase.database().ref('/dives/' + userId).once('value').then(function (snapshot) {
        var username = snapshot.val().username;
    });
}