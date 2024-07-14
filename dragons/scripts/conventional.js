import { conLight } from "./dragons.js";
import { conHeav } from "./dragons.js";

conLight.forEach((dragon) => {
    const article = document.createElement("article");
    const p = document.createElement("p");
    p.innerHTML = `
        <h4>${dragon.name}</h4>
            <section>
                <p>${dragon.info}</p><img src="${dragon.imageMain}" alt="">
            </section>`;

    article.appendChild(p);
    article.classList.add("dragoninfo")
    document.querySelector('#light').appendChild(article);
});

conHeav.forEach((dragon) => {
    const article = document.createElement("article");
    const p = document.createElement("p");
    p.innerHTML = `
        <h4>${dragon.name}</h4>
            <section>
                <p>${dragon.info}</p><img src="${dragon.imageMain}" alt="">
            </section>`;

    article.appendChild(p);
    article.classList.add("dragoninfo")
    document.querySelector('#heavy').appendChild(article);
});
