function hideShowMenu() {
    if (document.getElementById("menuInfo").classList.contains("hide")) {
        document.getElementById("menuInfo").classList.remove("hide")
    }
    else {
        document.getElementById("menuInfo").classList.add("hide")
    }
}
document.getElementById("button").addEventListener("click",hideShowMenu);
