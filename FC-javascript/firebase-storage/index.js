const auth = firebase.auth();
const storage = firebase.storage();
const database = firebase.database();
const provider = new firebase.auth.GoogleAuthProvider();

const loginButtonEl = document.querySelector('.login');
const fileInputEl = document.querySelector('.file-input');
const submitButtonEl = document.querySelector('.submit');

let uid;
// login
loginButtonEl.addEventListener('click', e => {
    authUsers();
})

// database submit
submitButtonEl.addEventListener('click', e => {
    imageToStorage();
})



async function authUsers() {
    uid = auth.currentUser.uid;
    const result = await auth.signInWithPopup(provider);
    var token = result.credential.accessToken;
    var user = result.user;
    console.log(result);
    picRender();
}

async function imageToStorage() {
    const getEpochTime = new Date().getTime();
    const refStr = `${uid}:${getEpochTime}`;
    let snapshot = await storage.ref(`/images/${refStr}`).put(fileInputEl.files[0]);
    let snapshotDownloadURL = snapshot.downloadURL;
    
    console.log(snapshotDownloadURL);

    dataToDatabase(refStr, snapshotDownloadURL);
}

async function dataToDatabase(a, b) {
    await database.ref(`users/${uid}/pic`).push({
        fileName: a,
        downloadURL: b
    })
    picRender();
}

async function picRender() {
    document.querySelector('.image-list').innerHTML = '';
    let snapshot = await database.ref(`users/${uid}/pic`).once('value');
    let picInfo = await snapshot.val();
    console.log(picInfo);
    console.log(Object.entries(picInfo));
    for (let [picId, { downloadURL, fileName }] of Object.entries(picInfo)) {
        const imageListEl = document.querySelector('.image-list');
        const imageEl = document.createElement('img');
        const imageTextEl = document.createElement('p');
        console.log(picId);
        console.log(fileName);
        console.log(downloadURL);
        imageEl.src = downloadURL;
        imageEl.classList.add('image-list__item');

        imageTextEl.textContent = fileName;
        imageTextEl.classList.add('image-list__item-text');

        imageListEl.appendChild(imageEl);
        imageListEl.appendChild(imageTextEl);
    }
}
// 세가지 상황에서 동작한다. login / logout / refresh(?) 
auth.onAuthStateChanged(function (user) {
    if (user) {
        authUsers();
    } else {
        // No user is signed in.
    }
});