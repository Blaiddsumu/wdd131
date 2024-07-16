import { articles } from "./articles.js";

articles.forEach((articler) => {
    const article = document.createElement("article");
    const p = document.createElement("p");
    p.innerHTML = `<div class="post-info">
                        <span>Date Posted: ${articler.date}</span>
                    </div>
                    <img src="${articler.imgSrc}" alt="${articler.imgAlt}">
                    <div class="post-content">
                        <h1>${articler.title}</h1>
                        <h3>${articler.genre}</h3>
                        <h3>${articler.stars}</h3>
                        <p>${articler.description}</p>
                    </div>
        `;

    article.appendChild(p);
    article.classList.add("article")
    document.querySelector('#articles').appendChild(article);
});

