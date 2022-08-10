let user = JSON.parse(window.localStorage.getItem("user"));
console.log(user);

const userInfo = document.createElement("h1");
const welcome = document.getElementById("home-title");
const form = document.querySelector("form");
const zipInput = document.querySelector("#zip");
const categoryInput = document.querySelector("#category");
const priceInput = document.querySelector("#price");
const businessContainer = document.querySelector("#business-container");

welcome.textContent = `
    Let's Eat, ${user.name}! 
`;

const getResturants = (e) => {
  e.preventDefault();
  axios
    .get(
      `/api/search?zip_code=${zipInput.value}&categories=${categoryInput.value}&price=${priceInput.value}`
    )
    .then((res) => {
      const data = res.data;
      console.log(res);
      resturantCard(data);
    })
    .catch((err) => {
      console.log(err);
    });

  function resturantCard(businesses) {
    console.log(businesses);
    //clears for every new search
    businessContainer.innerHTML = "";
    businesses.forEach((business) => {
      const resturantCard = document.createElement("div");
      resturantCard.classList.add("business-card");

      resturantCard.innerHTML = `<div class="each-res">
            <img alt='resturant cover' src=${business.image_url} class="resturant-cover"/>
            <p class="resturant-title">${business.name}</p>
            <p class="resturant-rating">Rating: ${business.rating}<p> 
            </div>    
            `;
      businessContainer.appendChild(resturantCard);
    });
  }
};

form.addEventListener("submit", getResturants);
