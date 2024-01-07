// The URL of the RSS feed
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"; // CORS proxy
const FEED_URL = CORS_PROXY + "https://www.tamilblasters.com/index.php?/forums/forum/7-tamil-new-movies-hdrips-bdrips-dvdrips-hdtv.xml";

// Fetching the feed
fetch(FEED_URL)
    .then(response => response.text())
    .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
    .then(data => {
        const items = data.querySelectorAll("item");
        let html = ``;
        items.forEach(el => {
            html += `
                <p>
                    <a href="${el.querySelector("link").textContent}">
                        ${el.querySelector("title").textContent}
                    </a>
                </p>`;
        });
        document.getElementById("feed").innerHTML = html;
    })
    .catch(err => console.log("Fetch error: ", err));
