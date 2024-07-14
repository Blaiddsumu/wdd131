import { unconAq } from "./dragons.js";
import { unconNonAq } from "./dragons.js";

unconAq.forEach((dragon) => {
    const article = document.createElement("article");
    const p = document.createElement("p");
    p.innerHTML = `
        <h4>${dragon.name}</h4>
            <section>
                <p>${dragon.info}</p><img src="${dragon.imageMain}" alt="">
            </section>`;

    article.appendChild(p);
    article.classList.add("dragoninfo")
    document.querySelector('#aquatic').appendChild(article);
});


unconNonAq.forEach((dragon) => {
    const article = document.createElement("article");
    const p = document.createElement("p");
    p.innerHTML = `
        <h4>${dragon.name}</h4>
            <section>
                <p>${dragon.info}</p><img src="${dragon.imageMain}" alt="">
            </section>`;

    article.appendChild(p);
    article.classList.add("dragoninfo")
    document.querySelector('#nonaquatic').appendChild(article);
});

