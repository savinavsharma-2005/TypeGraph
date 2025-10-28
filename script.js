let x=prompt('enter a text: ')
const name = x;
const logo = document.getElementById("logo");
const intervals = new Map(); // Track intervals per character

// Create spans for each character
name.split("").forEach((char, i) => {
  const span = document.createElement("span");
  span.classList.add("char");
  span.dataset.index = i;
  span.dataset.char = char;
  span.textContent = char;
  logo.appendChild(span);
});

// Random character generator
function getRandomChar() {
  const pool = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
  return pool[Math.floor(Math.random() * pool.length)];
}

// Start randomizing a character
function startRandomizing(char) {
  if (intervals.has(char)) return; // Already running

  const interval = setInterval(() => {
    char.textContent = getRandomChar();
  }, 50); // Adjust speed here

  intervals.set(char, interval);
}

// Stop randomizing and show actual letter
function stopRandomizing(char) {
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
