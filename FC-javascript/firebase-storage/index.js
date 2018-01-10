const auth = firebase.auth();
const storage = firebase.storage();
const database = firebase.database();

const provider = new firebase.auth.GoogleAuthProvider();
const loginButtonEl = document.querySelector('.login');
const fileInputEl = document.querySelector('.file-input');

loginButtonEl.addEventListener('click', async e => {
    
    const result = await firebase.auth().signInWithPopup(provider);
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
    console.log(result);
})

fileInputEl.addEventListener('change', async e => {
    console.log(fileInputEl.files[0]);
    const getEpochTime = new Date().getTime();
    const refStr = `${auth.currentUser.uid}:${getEpochTime}`;

    const snapshot = await storage.ref(`/images/${refStr}`).put(fileInputEl.files[0]);
    await database.ref(`/images/`).push({
        downloadURL: snapshot.downloadURL,
        fileName: fileInputEl.files[0].name
    });

    refreshImages();
})

async function refreshImages() {

    
    const imageListEl = document.querySelector('.image');
    const snapshot = await database.ref(`/images/`).once('value');
    const getImages = snapshot.val();

    for (let [imageId, imageInfo] of Object.entries(getImages)) {
        const liEl = document.createElement('li');
        const imageEl = document.createElement('img');
        const pEl = document.createElement('p');
        liEl.classList.add('image-list');
        imageEl.src = imageInfo.downloadURL;
        imageEl.classList.add('image-list__item');
        pEl.textContent = imageInfo.fileName;
        imageListEl.appendChild(liEl);

        liEl.appendChild(imageEl)
        liEl.appendChild(pEl);
    }
}

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        refreshImages();
    } else {
        // No user is signed in.
    }
});