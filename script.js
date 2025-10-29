const logo = document.getElementById("logo");
const intervals = new Map();
let userText = "";

// Prompt until valid input or cancel
while (!userText) {
  const input = prompt("Enter a text:");
  if (input === null) break;
  if (input.trim() !== "") {
    userText = input;
  }
}

// Render logo if valid input
if (userText) {
  renderLogo(userText);
} else {
  logo.innerHTML = "<span style='opacity:0.5;'>No text entered</span>";
}

// Random character generator
function getRandomChar() {
  const pool = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
  return pool[Math.floor(Math.random() * pool.length)];
}

// Start randomizing a character
function startRandomizing(char) {
  if (char.dataset.char === " ") return;
  if (intervals.has(char)) return;

  const interval = setInterval(() => {
    char.textContent = getRandomChar();
  }, 50);

  intervals.set(char, interval);
}

// Stop randomizing and show actual letter
function stopRandomizing(char) {
  if (char.dataset.char === " ") return;
  if (intervals.has(char)) {
    clearInterval(intervals.get(char));
    intervals.delete(char);
  }
  char.textContent = char.dataset.char;
}

// Render logo from text
function renderLogo(text) {
  logo.innerHTML = "";
  const words = text.match(/(\S+|\s)/g); // preserves all spaces

  words.forEach((word) => {
    const wordSpan = document.createElement("span");
    wordSpan.classList.add("word");

    if (word === " ") {
      const space = document.createElement("span");
      space.classList.add("char");
      space.textContent = " ";
      wordSpan.appendChild(space);
    } else {
      word.split("").forEach((char, i) => {
        const span = document.createElement("span");
        span.classList.add("char");
        span.dataset.index = i;
        span.dataset.char = char;
        span.textContent = char;
        wordSpan.appendChild(span);
      });
    }

    logo.appendChild(wordSpan);
  });
}

// Cursor tracking
document.addEventListener("mousemove", (e) => {
  const chars = document.querySelectorAll(".char");

  chars.forEach((char) => {
    const charX = char.getBoundingClientRect().left + char.offsetWidth / 2;
    if (e.clientX < charX) {
      startRandomizing(char);
    } else {
      stopRandomizing(char);
    }
  });
});

// Edit button
document.getElementById("editBtn").addEventListener("click", () => {
  const newText = prompt("Edit your text:", userText);
  if (newText !== null && newText.trim() !== "") {
    userText = newText;
    renderLogo(userText);
  }
});

// Refresh button
document.getElementById("refreshBtn").addEventListener("click", () => {
  location.reload();
});
