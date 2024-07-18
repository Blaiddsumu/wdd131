import {dragons} from "./dragons.js"

const randomDragon = dragons[Math.floor(Math.random() * dragons.length)];
const article = document.createElement("article");
const p = document.createElement("p");
p.innerHTML = `
        <h3>Random Dragon: ${randomDragon.name}</h3>
            <section>
                <p>${randomDragon.info}<br>
                Click the image to see more.</p><a href="${randomDragon.type}.html#${randomDragon.subtype}"><img src="${randomDragon.imageMain}" alt="Random Dragon"></a>
            </section>`;
article.appendChild(p);
document.querySelector('#randomDerg').appendChild(article);

