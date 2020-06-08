// Function to modify the text content of the paragraph
const changeText = () => {
  const p = document.querySelector("p");
  p.textContent = "I changed because of an inline event handler.";
};

const changeTextAgain = () => {
  const p = document.querySelectorAll("p");
  // Accessing the second p from the p array returned by querySelectorAll
  p[1].textContent = "I changed again because of an event handler property.";
};

const button = document.querySelectorAll("button");
// Accessing the second button from the button array returned by querySelectorAll
button[1].onclick = changeTextAgain;
