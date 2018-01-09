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
    let snapshot = await storage.ref(`/images/${refStr}`).put(fileInputEl.files[0]);
    const snapshotDownloadURL = snapshot.downloadURL;
    
    

    dataToDatabase(refStr, snapshotDownloadURL);
}

async function dataToDatabase(a, b) {
    let uid = auth.currentUser.uid;
    await database.ref(`users/${uid}/pic`).push({
        fileName: a,
        downloadURL: b
    })

    
    let snapshot = await database.ref(`users/${uid}/pic`).once('value');
    let picInfo = snapshot.val();
    console.log(picInfo);
    console.log(Object.entries(picInfo));
    console.log(Object.entries(picInfo[1]));
    for (let [fileName, downLoadURL] of Object.entries(picInfo)) {
        const imageListEl = document.querySelector('.image-list');
        const imageEl = document.createElement('img');
        const imageTextEl = document.createElement('p');
        imageEl.src = DownloadURL;
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