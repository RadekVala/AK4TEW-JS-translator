// get UI elements
const userInputEl = document.querySelector("#userInputEl");
const submitEl = document.querySelector("#submitEl");
const resultEl = document.querySelector("#resultEl");

submitEl.onclick = function () {
  console.log("clicked");
  // get user input
  const userInput = userInputEl.value;
  console.log(userInput);
  submitEl.style.backgroundColor = "violet";

  if (userInput.length > 2) {
    // make HTTP GET request against API
    fetch(
      `https://api.mymemory.translated.net/get?q=${userInput}&langpair=cs-CZ|en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.responseData.translatedText);
        resultEl.value = data.responseData.translatedText;
      });
  }
};
