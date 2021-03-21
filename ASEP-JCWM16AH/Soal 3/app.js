var users = [
  {
    'username': 'alee',
    'email': 'alee@gmail.com',
    'role': 'Admin'
  },
  {
    'username': 'jennie',
    'email': 'jenniebp@gmail.com',
    'role': 'User'
  },
  {
    'username': 'elsa',
    'email': 'eksa@disney.com',
    'role': 'User'
  }
]

var formUser = document.getElementById('formUser')
formUser.addEventListener('submit', addUser, false)
window.addEventListener('load', getUsers(users), false)

function updateUser(e){
  let user = e.target.parentElement.parentElement
  let indexUser = parseInt(user.childNodes[1].textContent) - 1
  let username = document.getElementById('editUsername').value
  let email = document.getElementById('editEmail').value
  let role = document.getElementById('editRole').value
  users[indexUser] = {
    username,
    email,
    role
  }
  getUsers(users)
}
function editUser(e){
  let user = e.target.parentElement.parentElement
  let username = user.childNodes[3].textContent
  let email = user.childNodes[5].textContent
  let role = user.childNodes[7].textContent
  user.childNodes[3].innerHTML = `<input type="text" value="${username}" id="editUsername">`
  user.childNodes[5].innerHTML = `<input type="email" value="${email}" id="editEmail">`
  user.childNodes[7].innerHTML = `<select id="editRole">
    <option value="Admin" ${role == 'Admin' ? 'selected' : ''}>Admin</option>
    <option value="User" ${role == 'User' ? 'selected' : ''}>User</option>
  </select>`
  user.childNodes[9].innerHTML = `
  <input type="button" value="SAVE" onclick="updateUser(event)"> <input type="button" value="CANCEL" onclick="cancel()">
  `
  console.log(role)
}
function cancel(){
  getUsers(users)
}
function deleteUser(index){
  users.splice(index, 1)
  getUsers(users)
}
function addUser(e){
  e.preventDefault()
  let username = document.getElementById('username').value
  let email = document.getElementById('email').value
  let role = document.getElementById('role').value
  if(username == ''){
    alert('Harap isi Username terlebih dahulu!')
  }else if(email == ''){
    alert('Harap isi email terlebih dahulu')
  }else{
    users.push({
      username,
      email,
      role
    })
    clearForm()
    getUsers(users)
  }
  
}
function clearForm(){
  document.getElementById('username').value = ''
  document.getElementById('email').value = ''
  document.getElementById('role').selctedIndex = 0
}
function getUsers(users){
  let listUsers = ''
  users.forEach((val, index) => {
    listUsers += `<tr>
      <td>${index + 1}</td>
      <td>${val.username}</td>
      <td>${val.email}</td>
      <td>${val.role}</td>
      <td><input type="button" value="EDIT" onclick=editUser(event)> <input type="button" value="DELETE" onclick=deleteUser(${index})></td>
    </tr>`
  })
  document.getElementById('listUser').innerHTML = listUsers
}