// api url
const url = "https://motivational-spark-api.vercel.app/api/quotes/random/10";

const container = document.getElementById("quotes");

// promise para obtener datos del API
fetch(url)

  .then(response => {
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    return response.json(); 

  })

  .then(data => {

       displayQuotes(data);
  })
  .catch(error => {

    console.error(new Error("Failed to fetch data"));

 container.innerHTML = `<p style="color:red;">${error.message}</p>`;

  });

async function displayQuotes(quotes) {

 quotes.forEach(q => {

 const div = document.createElement("div");
    
div.classList.add("quote");

    div.innerHTML = `

<p>"${q.quote}"</p>
<p class="author">- ${q.author}</p>

    `;

container.appendChild(div);

  });

}
