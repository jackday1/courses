// change text
const text = document.querySelector("#text");
const changeTextBtn = document.querySelector("#change-text-btn");

const changeText = () => {
  text.innerHTML = text.innerHTML + " changed";
};

changeTextBtn.addEventListener("click", changeText, { once: true });

// make download progress UI
const statusText = document.querySelector("#status-text");
const progressBarContainer = document.querySelector(".progress-bar-container");
const progressBar = document.querySelector(".progress-bar");
const downloadBtn = document.querySelector("#download-btn");

const download = () => {
  statusText.innerText = "Downloading";
  progressBarContainer.style.opacity = "100%";
  progressBar.style.width = "100%";
  setTimeout(() => {
    statusText.innerText = "Downloaded!";
  }, 3000);
};

downloadBtn.addEventListener("click", download, { once: true });

// change input
const randomTextInput = document.querySelector("#random-text");
const randomTextValue = document.querySelector("#random-text-value");

randomTextInput.addEventListener("keyup", (event) => {
  const value = event.target.value;
  randomTextValue.innerText = `Your random text is: ${value}`;
});

// hover using js
const box = document.querySelector(".box");

box.addEventListener("mouseenter", () => {
  box.style.backgroundColor = "dodgerblue";
});

box.addEventListener("mouseleave", () => {
  box.style.backgroundColor = "coral";
});
