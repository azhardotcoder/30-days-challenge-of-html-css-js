const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

// Function to display notes from localStorage
function showNotes() {
  if (localStorage.getItem("notes")) {
    notesContainer.innerHTML = localStorage.getItem("notes");
  }
}

// Function to update notes in localStorage
function updateStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

// Function to create a new input box
function createInputBox() {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  img.src = "images/delete.png";
  img.style.cursor = "pointer";
  notesContainer.appendChild(inputBox).appendChild(img);
}

// Event listener for creating a new input box
createBtn.addEventListener("click", () => {
  createInputBox();
  updateStorage(); // Update storage when a new input box is created
});

// Event listener for deleting an input box or editing a note
notesContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  } else if (e.target.tagName === "P") {
    // Update storage when the content of an input box changes
    updateStorage();
  }
});

// Event listener for handling Enter key to insert line break
document.addEventListener("keydown", function (e) {
  if (event.key === "Enter") {
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
});

// Call the showNotes() function when the page loads to display existing notes
document.addEventListener("DOMContentLoaded", function () {
  showNotes();
});
