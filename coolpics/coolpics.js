document.querySelector("#year").textContent = new Date().getFullYear();

function hideShowMenu() {
    if (document.getElementById("menuInfo").classList.contains("hide")) {
        document.getElementById("menuInfo").classList.remove("hide")
    }
    else {
        document.getElementById("menuInfo").classList.add("hide")
    }
}

function exitViewer() {
    if (document.getElementById("viewerID").classList.contains("viewer")) {
        document.getElementById("viewerID").classList.remove("viewer")
        document.getElementById("viewerID").classList.add("hide")
    }
    else {
        document.getElementById("viewerID").classList.remove("hide")
        document.getElementById("viewerID").classList.add("viewer")
    }

function viewerTemplate(pic, alt) {
    return `<div class="viewer" id="viewerID">
        <button class="close-viewer" id="closeButton">X</button>
        <img src="${pic}" alt="${alt}">
        </div>`;
    }
}

function viewHandler(event) {

    // create a variable to hold the element that was clicked on from event.target

	// get the src attribute from that element and 'split' it on the "-"

	// construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step

	// insert the viewerTemplate into the top of the body element
	// (element.insertAdjacentHTML("afterbegin", htmltoinsert))

	// add a listener to the close button (X) that calls a function called closeViewer when clicked


}

document.getElementById("button").addEventListener("click",hideShowMenu);
document.getElementById("closeButton").addEventListener("click",exitViewer);

