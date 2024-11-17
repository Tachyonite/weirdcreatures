
// PLACE NEW FILENAMES IN HERE
const heads = ["images/head1.png", "images/head2.png", "images/head3.png", "images/head4.png", "images/head5.png", "images/head6.png", "images/head7.png", "images/head8.png"];
const bodies = ["images/body1.png", "images/body2.png", "images/body3.png", "images/body4.png", "images/body5.png", "images/body6.png", "images/body7.png", "images/body8.png"];
const tails = ["images/tail1.png", "images/tail2.png", "images/tail3.png", "images/tail4.png", "images/tail5.png", "images/tail6.png", "images/tail7.png", "images/tail8.png"];



const headImage = document.getElementById("head");
const bodyImage = document.getElementById("body");
const tailImage = document.getElementById("tail");


function randomizeImages() {
    headImage.src = heads[Math.floor(Math.random() * heads.length)];
    bodyImage.src = bodies[Math.floor(Math.random() * bodies.length)];
    tailImage.src = tails[Math.floor(Math.random() * tails.length)];
}



document.getElementById("randomizeButton").addEventListener("click", randomizeImages);
