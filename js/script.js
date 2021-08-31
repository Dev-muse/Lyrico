// Selecting DOM elements

const formInput = document.querySelector("#form");
const search = document.querySelector("#search");
const result = document.querySelector("#result");

const apiUrl = `https://api.lyrics.ovh/v1/${searchValue}`;
const proxyUrl = "https://evening-waters-93081.herokuapp.com/";

// Get form input data

formInput.addEventListener("submit", (e) => {
  e.preventDefault();
  let searchValue = search.value.trim();

  !searchValue ? alert("Enter search term") : beginSearch(searchValue);
});

// Create search function
async function beginSearch(searchValue) {
  try {
    const searchResult = await fetch(proxyUrl + apiUrl);
    const data = await searchResult.json();
    console.log(data);

    //   displayData(data);
  } catch (error) {
    console.log(error);
  }
}
// Display searched data

// const displayData = (data) => {
//   result.innerHTML = `<ul class="songs"></ul>
//   `;
// };
