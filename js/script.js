const resultsContainer = document.querySelector(".results");

const url = "https://api.punkapi.com/v2/beers";

async function callApi() {
    try {
        const response = await fetch(url);
        const json = await response.json();
        
        console.log(json);

        resultsContainer.innerHTML = "";
    
        const results = json;

        results.forEach(function(result) {
            resultsContainer.innerHTML += `
            <a href="/details.html?id=${result.id}" class="results">
            <br><br>
            <img src="${result.image_url}">

            <div class="results-name">
            <h3>${result.name}<h3>
            </div>
            
            <div class="results-tagline">
            <p>"${result.tagline}"</p>
            </div>

            <div class="results-contributedby"
            <p>Contributed by: ${result.contributed_by}</p>
            </div>
            </a>
            `;
        });
    } catch(error) {
        console.log("An error occurred.");
        resultsContainer.innerHTML = displayError();
    }
}

callApi();

