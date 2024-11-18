// Change the number depending on how many complete creature sets there are
var number_of_sets = 11;
//


var heads = [];
var bodies = [];
var tails = [];

var template = "images/";

const headImage = document.getElementById("head");
const bodyImage = document.getElementById("body");
const tailImage = document.getElementById("tail");

function addFilenames() {
    for (var i = 1; i <= number_of_sets; i++) {
        heads.push(template + "head" + i + ".png");
        bodies.push(template + "body" + i + ".png");
        tails.push(template + "tail" + i + ".png");
    }
}

function randomizeImagesOnce() {
    headImage.src = heads[Math.floor(Math.random() * heads.length)];
    bodyImage.src = bodies[Math.floor(Math.random() * bodies.length)];
    tailImage.src = tails[Math.floor(Math.random() * tails.length)];
}

function randomizeImagesSlotMachine(duration) {
    let timeElapsed = 0;
    let flickerInterval = 50;

    function flicker() {
        if (timeElapsed >= duration) {
            randomizeImagesOnce();
            return;
        }

        randomizeImagesOnce();
        timeElapsed += flickerInterval;
        flickerInterval *= 1.1;

        setTimeout(flicker, flickerInterval);
    }

    flicker();
}

document.getElementById("randomizeButton").addEventListener("click", function () {
    randomizeImagesSlotMachine(2000);
});

window.addEventListener("load", addFilenames);
