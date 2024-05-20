function ShowNav() {
    document.getElementById("nav").style.width = "80%";
    document.getElementById("close").style.display = "block";
}
function HideNav() {
    document.getElementById("nav").style.width = "0%";
    document.getElementById("close").style.display = "none";
}
// Change Pic
var newImageSources = [
    "./img/Thumnail1.png",
    "./img/Thumnail2.png",
    "./img/Thumnail3.png",
    "./img/Thumnail4.png",
    "./img/Thumnail5.png",
    "./img/Thumnail6.png",
];
var images = document.querySelectorAll(".pic img");
images.forEach(function(img, index) {
    img.src = newImageSources[index];
});

var newAdr = "./img/1.png";
var imgAdr = document.querySelectorAll(".adr img");
imgAdr.forEach(function(img) {
    img.src = newAdr;
});