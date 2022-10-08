let colors = ["#fcf7f8","#132a13", "#DCEDB9", "#ff006e", "#68e1e5", "#0ead69", "#0100bf", "#ff4d6d", "#efc3e6", "#78290f", "#444140", "#15616d", "#7161ef", "#76c893", "#e3170a", "#1c71a4","#55a630", "#c82d35", "#67597A", "#0B3142", "#3e1c33", "#ff9f1c", "#49a078", "#9381ff", "#ef476f",  "#16425b", "#f8931d", "#c05746", "#502a41", "#513c2c", "#2f6690", "#B392AC", "#6a040f", "#70e000", "#F87060", "#B3A394", "#56CBF9", "#b5179e", "#568259", "#540b0e", "#ffd7ba", "#464E47", "#CBD081", "#85BAA1"];

let canvas = document.getElementById("canvas");

canvas.addEventListener("click", function() {
    //select a random number between 0 - 6
    let index = parseInt((Math.random() * colors.length) + 1);
    //grab the canvas
    let canvas = document.getElementById("canvas");

    canvas.style.background = `${colors[index]}`
})