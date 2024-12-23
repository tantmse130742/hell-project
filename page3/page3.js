function button(id) {
  const imgButton = document.getElementById(`button${id}`);

  const displayState = document.getElementById(`displayState${id}`);

  if (displayState.style.display === "none") {
    displayState.style.display = "block";
    imgButton.src = "../asset/often uses/arrow-up.png";
  } else {
    displayState.style.display = "none";
    imgButton.src = "../asset/often uses/arrow-down.png";
  }
}
