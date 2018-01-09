const auth = firebase.auth();
const storage = firebase.storage();
const database = firebase.database();
const provider = new firebase.auth.GoogleAuthProvider();

const loginButtonEl = document.querySelector('.login');
const fileInputEl = document.querySelector('.file-input');
const submitButtonEl = document.querySelector('.submit');

// 사진 이름과 downloadURL을 저장한다.
let arr = [];

// login
loginButtonEl.addEventListener('click', async e => {
    authUsers();
})

// database submit
submitButtonEl.addEventListener('click', async e => {
    let uid = auth.currentUser.uid;
    const getEpochTime = new Date().getTime();
    const refStr = `${uid}:${getEpochTime}`;
    const snapshot = await storage.ref(`/images/${refStr}`).put(fileInputEl.files[0]);

    arr.push({
        fileName: `${refStr}`,
        downloadURL: `${snapshot.downloadURL}`
    });
    console.log(arr);

    const imageEl = document.createElement('img');
    imageEl.src = snapshot.downloadURL;
    imageEl.style.width = `50px`;
    document.body.appendChild(imageEl);

    await database.ref(`users/${uid}/pic`).push(arr)
})



async function authUsers() {
    const result = await auth.signInWithPopup(provider);
    var token = result.credential.accessToken;
    var user = result.user;
    console.log(result);
}



auth.onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.
        authUsers();
    } else {
        // No user is signed in.
    }
});