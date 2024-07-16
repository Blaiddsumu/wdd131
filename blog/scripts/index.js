import { articles } from "./articles.js";

articles.forEach((articler) => {
    const article = document.createElement("article");
    const p = document.createElement("p");
    p.innerHTML = `<div class="post-info">
                        <span>Date Posted: ${articler.date}</span>
                    </div>
                    <section class="post-content">
                    <img src="${articler.imgSrc}" alt="${articler.imgAlt}">
                    <div class="post-content">
                        <section class="stats">
                            <h1>${articler.title}</h1>
                            <h3>Genre: ${articler.genre}</h3>
                            <h3>Rating: ${articler.stars}</h3>
                        </section>
                        <p>${articler.description}</p>
                    </div>
                    </section>
        `;

    article.appendChild(p);
    article.classList.add("article")
    document.querySelector('#articles').appendChild(article);
});

