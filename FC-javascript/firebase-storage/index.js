const auth = firebase.auth();
const storage = firebase.storage();
const database = firebase.database();
const provider = new firebase.auth.GoogleAuthProvider();

const loginButtonEl = document.querySelector('.login');
const fileInputEl = document.querySelector('.file-input');
const submitButtonEl = document.querySelector('.submit');


// login
loginButtonEl.addEventListener('click', async e => {
    authUsers();
})

// database submit
submitButtonEl.addEventListener('click', async e => {
    imageToStorage();
})



async function authUsers() {
    const result = await auth.signInWithPopup(provider);
    var token = result.credential.accessToken;
    var user = result.user;
    console.log(result);
}

async function imageToStorage() {
    let uid = auth.currentUser.uid;
    const getEpochTime = new Date().getTime();
    const refStr = `${uid}:${getEpochTime}`;
    const snapshot = await storage.ref(`/images/${refStr}`).put(fileInputEl.files[0]);
    const snapshotDownloadURL = snapshot.downloadURL;
    const imageEl = document.createElement('img');
    imageEl.src = snapshotDownloadURL;
    imageEl.style.width = `50px`;
    document.body.appendChild(imageEl);

    dataToDatabase(refStr, snapshotDownloadURL);
}

async function dataToDatabase(a, b) {
    let uid = auth.currentUser.uid;
    await database.ref(`users/${uid}/pic`).push({
        fileName: a,
        downloadURL: b
    })
}

// 세가지 상황에서 동작한다. login / logout / refresh(?) 
auth.onAuthStateChanged(function (user) {
    if (user) {
        authUsers();
    } else {
        // No user is signed in.
    }
});