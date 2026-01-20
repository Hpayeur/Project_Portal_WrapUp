const projects = [
  {
    title: "Weather News App",
    description: "All Your Weather News in One Place",
    imageURl: "Url_Images/WeatherURL.jpg",
    projectLink: "https://hpayeur.github.io/Weather_App_3/",
  },
  {
    title: "Kitten News App",
    description: "Cute Kittens News Delivered to You",
    imageURl: "Url_Images/KittenURL.jpg",
    projectLink: "https://hpayeur.github.io/Updated_Kitten_News_App/",
  },
  {
    title: "Wolf Club Project",
    description: "Pack Together with the Wolf Club",
    imageURl: "Url_Images/WolfURL.jpg",
    projectLink: "https://hpayeur.github.io/Wolf_club_Project/",
  },
  {
    title: "Memory Game Project",
    description: "test your memory skills!",
    imageURl: "Url_Images/MemoryURL.png",
    projectLink: "https://hpayeur.github.io/Memory_Game/",
  },
  {
    title: "Find My Restaurant",
    description: "Find the best restaurants near you!",
    imageURl: "Url_Images/RestaurantURL.jpg",
    projectLink: "https://hpayeur.github.io/Find_My_Restaurants/",
  },
  {
    title: "Mario Club Project",
    description: "Mario fans unite!",
    imageURl: "Url_Images/MarioURL.jpg",
    projectLink: "https://hpayeur.github.io/Mario_Club_Project/",
  },
];

function createProjectCard(project) {
  const card = document.createElement("div");
  card.classList.add("card");
  const img = document.createElement("img");
  img.src = project.imageURl;
  img.alt = project.title;
  const title = document.createElement("h2");
  title.textContent = project.title;
  const description = document.createElement("p");
  description.textContent = project.description;
  const link = document.createElement("a");
  link.href = project.projectLink;
  link.textContent = "View Project";
  link.target = "_blank";
  card.appendChild(img);
  card.appendChild(title);
  card.appendChild(description);
  card.appendChild(link);
  return card;
}

function renderProjects() {
  const container = document.getElementById("card-container");

  projects.forEach((project) => {
    const card = createProjectCard(project);
    container.appendChild(card);
  });
}

renderProjects();
