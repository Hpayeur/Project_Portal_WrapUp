function getCardData() {
  const cards = document.querySelectorAll(".card");
  const cardData = [];

  cards.forEach((card) => {
    const title = card.querySelectorAll(".card-title")[0].innerText;
    const content = card.querySelector(".card-content").innerText;

    const id = card.dataset.cardId;
    const category = card.dataset.cardCategory;

    cardData.push({
      id: id,
      category: category,
      title: title,
      content: content,
    });
  });

  return cardData;
}

const myCardData = getCardData();
console.log(myCardData);

async function fetchAndRenderCards() {
  const container = document.getElementById("card-container");
  try {
    const response = await fetch("https://api.example.com/cards");
    const data = await response.json();
    data.forEach((cardInfo) => {
      const cardDiv = document.createElement("div");
      cardDiv.classList.add("card");
      cardDiv.innerHTML = `<h3 class="card-title">${cardInfo.title}</h3><p class="card-content">${cardInfo.content}</p>`;
      container.appendChild(cardDiv);
    });
  } catch (error) {
    console.error("Error Fetching Cards:", error);
  }
}
fetchAndRenderCards();

// let cardsList = document.querySelector(".cards");
// let cards = [];

// const cardData = [
//   { title: "Card 1", content: "card 1 content" },
//   { title: "Card 2", content: "card 2 content" },
//   { title: "Card 3", content: "card 3 content" },
//   { title: "Card 4", content: "card 4 content" },
//   { title: "Card 5", content: "card 5 content" },
// ];

// cards.push(...cardData);

// cards.forEach((card) => {
//   const el = document.createElement("div");
//   el.className = "card";
//   el.innerHTML = `<h3>${card.title}</h3><p>${card.content}</p>`;
//   if (cardsList) cardsList.appendChild(el);
// });

// let cardsList = document.querySelector(".cards");
// let cards = [];
// cards.map((item) => {})
// ${card.title}

// look up what an object in JavaScript is, when you find the syntax for an object, include a title and a url link
// Look up how to push an object to an array
// Example objects use { key: value } and arrays are comma-separated lists of values
