let x = prompt('Enter a text: ');
const name = x;
const logo = document.getElementById("logo");
const intervals = new Map();

// Create spans for each word and its characters
const words = name.match(/(\S+|\s)/g);
words.forEach((word) => {
  const wordSpan = document.createElement("span");
  wordSpan.classList.add("word");

  word.split("").forEach((char, i) => {
    const span = document.createElement("span");
    span.classList.add("char");
    span.dataset.index = i;
    span.dataset.char = char;
    span.textContent = char;
    wordSpan.appendChild(span);
  });

  // Add space after each word
  const space = document.createElement("span");
  space.textContent = " ";
  wordSpan.appendChild(space);

  logo.appendChild(wordSpan);
});


// Random character generator
function getRandomChar() {
  const pool = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
  return pool[Math.floor(Math.random() * pool.length)];
}

// Start randomizing a character
function startRandomizing(char) {
  if (char.dataset.char === " ") return; // Skip spaces
  if (intervals.has(char)) return;

  const interval = setInterval(() => {
    char.textContent = getRandomChar();
  }, 50);

  intervals.set(char, interval);
}

// Stop randomizing and show actual letter
function stopRandomizing(char) {
  if (char.dataset.char === " ") return; // Skip spaces
  if (intervals.has(char)) {
    clearInterval(intervals.get(char));
    intervals.delete(char);
  }
  char.textContent = char.dataset.char;
}

// Track cursor and update characters
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
