// localStorage
//  - limitation: 5MB
//  - only contains string
//  - methods:
//    + getItem(key: string)
//    + setItem(key: string, value: string)
//    + removeItem(key: string)

// sessionStorage
//  - same as localStorage
//  - will be terminated when session ends

const input = document.querySelector("#name-input");
const addBtn = document.querySelector("#add-btn");
const userList = document.querySelector("#user-list");

const loadUsers = () => {
  const usersString = localStorage.getItem("users");
  const users = usersString ? JSON.parse(usersString) : [];
  return users;
};

const removeUser = (index) => {
  const users = loadUsers();
  const userToDelete = users[index];

  if (!userToDelete) return;
  const isOK = confirm(
    `Are you sure you want to delete user ${userToDelete.name}?`
  );
  if (!isOK) return;

  const newUsers = users.filter((user, i) => i !== index);

  localStorage.setItem("users", JSON.stringify(newUsers));

  renderUsers();
};

const addUser = (name) => {
  const users = loadUsers();
  const newUsers = [...users, { name }];

  localStorage.setItem("users", JSON.stringify(newUsers));

  renderUsers();
};

const resetUsers = () => (userList.innerHTML = "");

const renderUsers = () => {
  resetUsers();
  const users = loadUsers();

  users.map((user, index) => {
    const p = document.createElement("p");

    const name = document.createElement("span");
    name.innerText = `${index + 1}. ${user.name}`;
    p.appendChild(name);

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.addEventListener("click", () => removeUser(index));
    p.appendChild(deleteBtn);

    userList.appendChild(p);
  });
};

renderUsers();

addBtn.addEventListener("click", () => {
  const value = input.value;
  if (!value || !value.trim()) return;

  addUser(value);
  input.value = "";
});
