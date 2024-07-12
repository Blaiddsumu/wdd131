import {dragons} from "dragons.js";

dragons.forEach(dragon) => {
    const article = document.createElement("article");
    const h4 = document.createElement("h4");
    const p = document.createElement("p");
    const img = document.createElement("img");

    h4.textContent = dragon.name;
    p.textContent = dragon.info;
    img.textContent = dragon.imageMain;
    
    article.appendChild(h4);
    article.appendChild(p);
    article.appendChild(img);
    document.querySelector('#light').appendChild(article);
};