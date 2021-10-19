let menuObj = document.getElementById("Menu");

function Loaded() {
    alert("Welcome. The website sucks ik.");
}

function ToggleVisibilityMenu() {
    if (menuObj.display == "none") {
        OpenMenu();
    } else {
        CloseMenu();
    }

    alert("Toggled");
}

function OpenMenu() {
    menuObj.style.display = "none";
}

function CloseMenu() {
    menuObj.style.display = "none";
}
