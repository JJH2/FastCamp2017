const auth = firebase.auth();
const storage = firebase.storage();
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
    const refStr = `/images/${auth.currentUser.uid}:${getEpochTime}`;
    const snapshot = await storage.ref(refStr).put(fileInputEl.files[0]);

    const imageEl = document.createElement('img');
    imageEl.src = snapshot.downloadURL;
    document.body.appendChild(imageEl);
})