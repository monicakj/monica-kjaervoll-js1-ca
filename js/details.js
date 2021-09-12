const detailsContainer = document.querySelector(".product-details");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url = "https://api.punkapi.com/v2/beers/" + id;


async function fetchProduct() {
    try {
        const response = await fetch(url);
        const details = await response.json();

        console.log(details);

        createHtml(details);
}
    catch(error) {
        console.log("An error has occurred.");
        detailsContainer.innerHTML = displayError();
    }   
}

fetchProduct();

function createHtml(details) {
    detailsContainer.innerHTML = `
        <div class="details-title">
        <h1>${details[0].name}<h1>
        </div>

        <div class="details-tagline">
        <h2>"${details[0].tagline}"<h2>
        </div>

        <img src="${details[0].image_url}">
        <time class="details-date">First brewed: ${details[0].first_brewed}</time>
        <div class="contributed-by">
        <p>Contributed by: ${details[0].contributed_by}</p>
        </div>
        <hr>

        <div class="details-description">
        <h3>Description<h3>
        <p>${details[0].description}</p>

        <div class="foodpairing">
        <h3>Food Pairing<h3>
        <p>${details[0].food_pairing}</p>
        </div>
        `;
}


