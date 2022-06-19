const url = "https://62aeffbbb735b6d16a4abc21.mockapi.io/api/v1/users";

const input = document.querySelector("#name-input");
const addBtn = document.querySelector("#add-btn");
const userList = document.querySelector("#user-list");

const loadUsers = async () => {
  const res = await axios.get(url);
  const users = res.data;
  return users;
};

const removeUser = async (user) => {
  const { name, id } = user;
  const isOK = confirm(`Are you sure you want to delete user ${name}?`);
  if (!isOK) return;

  await axios.delete(`${url}/${id}`);

  renderUsers();
};

const addUser = async (name) => {
  const newUser = { name };

  await axios.post(url, newUser);

  renderUsers();
};

const resetUsers = () => (userList.innerHTML = "");

const renderUsers = async () => {
  resetUsers();
  const users = await loadUsers();

  users.map((user, index) => {
    const p = document.createElement("p");

    const name = document.createElement("span");
    name.innerText = `${index + 1}. ${user.name}`;
    p.appendChild(name);

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.addEventListener("click", () => removeUser(user));
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
