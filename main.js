const menuBtn = document.getElementById("menuBtn");
const sideNav = document.getElementById("sideNav");

sideNav.style.right = "-250px";
menuBtn.onclick = function () {
    if (sideNav.style.right == "-250px") {
        sideNav.style.right = "0px";
} else {
        sideNav.style.right = "-250px";
    }
};



const txt = document.querySelector(".hidden");
const btn = document.querySelector(".hidden-btn");

btn.onclick = function () {
    if (txt.style.display == "none") {
        txt.style.display = "block";
        btn.innerText = "Schowaj";
    } else {
        txt.style.display = "none";
        btn.innerText = "Czytaj więcej";
    }
};
