const div = document.createElement("div");
// div.innerText = "Hello, world!";
div.innerHTML = `
  <p style="color: red;">Hello, world</p>
`;

document.body.appendChild(div);

setTimeout(() => {
  div.remove();
}, 2000);
