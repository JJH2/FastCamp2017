const provider = new firebase.auth.GoogleAuthProvider();
document.querySelector('.btn').addEventListener('click', async e => {
  const result = await firebase.auth().signInWithPopup(provider);
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  console.log(user);
});

const inputText = document.querySelector('.inputText');

inputText.addEventListener('keydown', async e => {

  if (e.key === 'Enter') {
    const todoList = document.querySelector('.todo-list');
    todoList.classList.add('todo-list--loading');

    const uid = firebase.auth().currentUser.uid;
    console.log(uid);
    await firebase.database().ref(`/users/${uid}/todos`).push({
      title: e.currentTarget.value,
      complete: false
    })
    e.target.value = "";
    refreshTodos();
  }
})
async function refreshTodos() {

  const todoList = document.querySelector('.todo-list');

  const uid = firebase.auth().currentUser.uid;
  const snapshot = await firebase.database().ref(`/users/${uid}/todos`).once('value');

  while (todoList.firstChild) {
    todoList.removeChild(todoList.firstChild);
  };

  const todos = snapshot.val();
  for (let [todoId, todo] of Object.entries(todos)) {
    console.log(todoId, todo);
    const liEl = document.createElement('li');
    liEl.textContent = todo.title;
    todoList.appendChild(liEl);
  }

  todoList.classList.remove('todo-list--loading');
}


// 1. 처음 로그인
// 2. 로그인 후 다시 페이지를 열었을 때
// 3. 로그아웃 했을 때
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    refreshTodos();
  } else {

  }
});
