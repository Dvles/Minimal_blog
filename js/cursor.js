const cursor = document.querySelector(".custom-cursor");
const links = document.querySelectorAll("a");
let isCursorInited = false;

const initCursor = () => {
  cursor.classList.add("custom-cursor--init");
  isCursorInited = true;
};

const destroyCursor = () => {
  cursor.classList.remove("custom-cursor--init");
  isCursorInited = false;
};

// Mouseover and mouseout on links to apply cursor effect
links.forEach((link) => {
  link.addEventListener("mouseover", () => {
    cursor.classList.add("custom-cursor--link");
  });

  link.addEventListener("mouseout", () => {
    cursor.classList.remove("custom-cursor--link");
  });
});

// Move cursor with mouse
document.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  if (!isCursorInited) {
    initCursor();
  }

  cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
});

// On mouseout, hide the cursor
document.addEventListener("mouseout", destroyCursor);
