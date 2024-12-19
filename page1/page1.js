function showContentMoblie(panagrahContentID) {
  const imgReplaceDOM = document.getElementById(
    `arrow-button${panagrahContentID}`
  );
  const state = document.getElementById(
    `panagraph-content${panagrahContentID}`
  );
  if (state.style.display == "none") {
    imgReplaceDOM.src = "../iStock-185031101/arrow-button-up.svg";
    state.style.display = "block";
  } else {
    imgReplaceDOM.src = "../iStock-185031101/arrow-button-down.svg";
    state.style.display = "none";
  }
}
