let colors = ["#fcf7f8", "#DCEDB9", "#68e1e5", "#1c71a4", "#c82d35", "#67597A", "#0B3142", "#16425b", "#f8931d", "#c05746", "#502a41", "#513c2c", "#2f6690", "#B392AC", "#F87060", "#B3A394", "#56CBF9", "#568259", "#464E47", "#CBD081", "#85BAA1"];

let canvas = document.getElementById("canvas");

canvas.addEventListener("click", function() {
    //select a random number between 0 - 6
    let index = parseInt((Math.random() * colors.length) + 1);
    //grab the canvas
    let canvas = document.getElementById("canvas");

    canvas.style.background = `${colors[index]}`
})