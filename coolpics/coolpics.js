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
}

document.getElementById("button").addEventListener("click",hideShowMenu);
document.getElementById("closeButton").addEventListener("click",exitViewer);
