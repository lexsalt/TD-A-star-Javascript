// CLEAN UP THE CODE: TOO MANY FIXED VALUES IN NODE CONSTRUCTOR

const canvas = document.getElementById("canvas");
let stateLog = [];

canvas.height = 1312;
canvas.width = 2400;
const blockSize = 32;
const halfBlock = blockSize / 2;
const gridColumns = 75;
const gridRows = 40;
const speed = 4; // tiene que ser multiplo del blocksize sino crashea

const c = canvas.getContext("2d");
//c.scale(0.5,0.5)

let wallData = [577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577,
  577, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 577,
  577, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 577,
  577, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 577,
  577, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 577,
  577, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 577,
  577, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 577,
  577, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 577,
  577, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 577,
  577, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 577,
  577, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 577,
  577, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 577,
  577, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 577,
  577, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 577,
  577, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 577,
  577, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 577,
  577, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 577,
  577, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 577,
  577, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 577,
  577, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 577, 577, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 577,
  577, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 577, 577, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 577,
  577, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 577,
  577, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 577,
  577, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 577,
  577, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 577,
  577, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 577,
  577, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 577,
  577, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 577,
  577, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 577,
  577, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 577,
  577, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 577,
  577, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 577,
  577, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 577,
  577, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 577,
  577, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 577,
  577, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 577,
  577, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 577,
  577, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 577,
  577, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 577,
  577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577, 577]
//console.log(wallData.length)

//let startPoint;
//let endPoint;
let startNode;
let endNode;
let startDefaultNode = 1562;
//let currentNode;
//let x;
//let y;

let pathing; //array to store the pathing

let xArray = [];
let yArray = [];
let pathArray = [];
let blockMap;
let wallMap = [];

//let temp = []; // border generator
 /* for (let i = 0; i < 75; i++) {
  for (let j = 0; j < 40; j++) {
    if (i === 0 || i === 74 || j === 0 || j === 39) {
      temp.push(577);
    } else {
      temp.push(0);
    }
  }
}*/
//wallData = temp
//console.log([...temp]);

class Node {
  constructor({ id, posx, posy, width, height, size, walkable, color }) {
    let parent;
    this.id = id;
    this.posx = posx;
    this.posy = posy;
    this.width = width;
    this.height = height;
    this.size = size;
    this.walkable = walkable;
    this.color = color;
    this.string = "x:" + posx.toString();
    this.string2 = "y:" + posy.toString();
    this.getGCost; //stored default g calculated one time to endpoint
    this.getHCost = this.getValueH(); //stored default h calculated one time to endpoint
    this.getFCost; //stored default f calculated one time to endpoint
    this.inPath = false;
    this.visited = false;
    this.closed = false;
    this.open = false;
    this.parent = undefined;
  }
  getValueH() {
    if (endNode === undefined) {
      return 0;
    } else if (endNode !== undefined) {
      let endNodePosition = {
        posx: endNode.posx,
        posy: endNode.posy,
      };

      return getDistance(this, endNodePosition);
    }

    //return 0 //Dijstra no tiene smart Guess por lo que H es igual a 0
  }
  draw() {
    c.beginPath();
    c.lineWidth = "1";
    c.strokeStyle = "black";
    c.fillStyle = this.color;
    c.fillRect(this.posx, this.posy, blockSize, blockSize);
    c.rect(this.posx, this.posy, blockSize, blockSize);
    c.strokeText("id: " + this.id, this.posx + 4, this.posy + 10);
    c.strokeText(this.string, this.posx + 4, this.posy + 18);
    c.strokeText(this.string2, this.posx + 4, this.posy + 26);
    c.strokeText(this.walkable, this.posx + 4, this.posy + 34);
    c.font = "7px Verdana";
    c.closePath();
    c.stroke();
  }
  drawClosed() {
    c.beginPath();
    c.lineWidth = "1";
    c.strokeStyle = "black";
    c.fillStyle = "orange";
    c.fillRect(this.posx, this.posy, blockSize, blockSize);
    c.rect(this.posx, this.posy, blockSize, blockSize);
    c.strokeText("id: " + this.id, this.posx + 2, this.posy + 10);
    c.strokeText(
      `G: ${this.getGCost.toFixed(2)}`, // .toFixed(2) // for euclidian
      this.posx + 2,
      this.posy + 17
    );
    c.strokeText(`H: ${this.getHCost}`, this.posx + 2, this.posy + 24);
    c.strokeText(
      `F: ${(this.getValueH() + this.getGCost).toFixed(2)}`, // .toFixed(2) // for euclidian
      this.posx + 2,
      this.posy + 31
    );
    c.font = "6px Verdana";
    c.closePath();
    c.stroke();
  }
  drawOpen() {
    c.beginPath();
    c.lineWidth = "1";
    c.strokeStyle = "black";
    c.fillStyle = "yellow";
    c.fillRect(this.posx, this.posy, blockSize, blockSize);
    c.rect(this.posx, this.posy, blockSize, blockSize);
    c.strokeText("id: " + this.id, this.posx + 2, this.posy + 10);
    c.strokeText(
      `G: ${this.getGCost.toFixed(2)}`, // .toFixed(2) // for euclidian
      this.posx + 2,
      this.posy + 17
    );
    c.strokeText(`H: ${this.getHCost}`, this.posx + 2, this.posy + 24);
    c.strokeText(
      `F: ${(this.getHCost + this.getGCost).toFixed(2)}`, // .toFixed(2) // for euclidian
      this.posx + 2,
      this.posy + 31
    );
    c.font = "6px Verdana";
    c.closePath();
    c.stroke();
  }
  drawPath() {
    c.beginPath();
    c.lineWidth = "1";
    c.strokeStyle = "black";
    c.fillStyle = "rgba(3 138 255 / 1)";
    c.fillRect(this.posx, this.posy, blockSize, blockSize);
    c.rect(this.posx, this.posy, blockSize, blockSize);
    c.strokeText("id: " + this.id, this.posx + 2, this.posy + 10);
    c.strokeText(
      `G: ${this.getGCost.toFixed(2)}`, // .toFixed(2) // for euclidian
      this.posx + 2,
      this.posy + 17
    );
    c.strokeText(`H: ${this.getHCost}`, this.posx + 2, this.posy + 24);
    c.strokeText(
      `F: ${(this.getHCost + this.getGCost).toFixed(2)}`, // .toFixed(2) // for euclidian
      this.posx + 2,
      this.posy + 31
    );
    c.font = "6px Verdana";
    c.closePath();
    c.stroke();
  }
  drawStart() {
    c.beginPath();
    c.lineWidth = "1";
    c.strokeStyle = "black";
    c.fillStyle = "Pink";
    c.fillRect(this.posx, this.posy, blockSize, blockSize);
    c.rect(this.posx, this.posy, blockSize, blockSize);
    c.strokeText("id: " + this.id, this.posx + 2, this.posy + 10);
    c.strokeText(
      `G: ${this.getGCost}`, // .toFixed(2) // for euclidian
      this.posx + 2,
      this.posy + 17
    );
    c.strokeText(`H: ${this.getValueH()}`, this.posx + 2, this.posy + 24);
    c.strokeText(
      `F: ${this.getHCost + this.getGCost}`, // .toFixed(2) // for euclidian
      this.posx + 2,
      this.posy + 31
    );
    c.font = "6px Verdana";
    c.closePath();
    c.stroke();
  }
  drawEnd() {
    c.beginPath();
    c.lineWidth = "1";
    c.strokeStyle = "black";
    c.fillStyle = "rgba(0 128 0 / 1)";
    c.fillRect(this.posx, this.posy, blockSize, blockSize);
    c.rect(this.posx, this.posy, blockSize, blockSize);
    c.strokeText("id: " + this.id, this.posx + 2, this.posy + 10);
    c.strokeText(
      `G: ${this.getGCost.toFixed(2)}`, // .toFixed(2) // for euclidian
      this.posx + 2,
      this.posy + 17
    );
    c.strokeText(`H: ${this.getHCost}`, this.posx + 2, this.posy + 24);
    c.strokeText(
      `F: ${(this.getHCost + this.getGCost).toFixed(2)}`, // .toFixed(2) // for euclidian
      this.posx + 2,
      this.posy + 31
    );
    c.font = "6px Verdana";
    c.closePath();
    c.stroke();
  }
}

class Grid {
  constructor(width, height, rows, columns, size) {
    this.width = width;
    this.height = height;
    this.rows = rows;
    this.columns = columns;
    this.size = size;
  }
  draw() {
    let columnData = []; // ex: rowData = []
    /*
    for (let i = 0; i < this.columns; i++) {
      xArray.push({ column: i, position: i * blockSize }); // pusheo el array para detectar el node clickeado
      for (let j = 0; j < this.rows; j++) {
        rowData.push([i * blockSize, j * blockSize, blockSize, blockSize]);
      }
    }
    // getting Row coords
    for (let i = 0; i < gridRows; i++) {
      yArray.push({ row: i, position: i * blockSize });
    }
    for (let i = 0; i < rowData.length; i++) {
      // agredo el id al array
      rowData[i].unshift(i);
    }
    */
    
    for (let i = 0; i < this.rows; i++) {
      yArray.push({ row: i, position: i * blockSize }); // pusheo el array para detectar el node clickeado
      for (let j = 0; j < this.columns; j++) {

        columnData.push([j * blockSize, i * blockSize, blockSize, blockSize]);
      }
    }
    //console.log(yArray)
    //console.log(columnData)
    // getting Row coords
    for (let i = 0; i < gridColumns; i++) {
      xArray.push({ column: i, position: i * blockSize });
    }
    //console.log(xArray)
    for (let i = 0; i < columnData.length; i++) {
      // agredo el id al array
      columnData[i].unshift(i);
    }

    //console.log(rowData);
    const blockMapData = [];
    columnData.forEach((node) => {
      blockMapData.push(
        new Node({
          id: node[0],
          posx: node[1],
          posy: node[2],
          width: blockSize,
          height: blockSize,
          size: blockSize,
          walkable: true,
          color: "rgba(192 192 192 / 1)",
        })
      );
    });
    //console.log(blockMapData);
    for (let i = 0; i < wallData.length; i++) {
      if (wallData[i] === 577) {
        blockMapData[i].walkable = false;
        blockMapData[i].color = "rgba(255 0 0 / 0.8)";
        wallMap.push(i);
      }
    }
    blockMap = blockMapData;
    blockMap.forEach((bloq) => {
      bloq.draw();
    });
  }
}

let grid = new Grid(
  canvas.width,
  canvas.height,
  gridRows,
  gridColumns,
  blockSize
);
grid.draw();

function PathFinder(nodes, start, end) {
  console.log(start);
  console.log(end);

  // ACA TENGO QUE HACE UN RESET DE LO DIBUJADO
  let gridArray = nodes; // hace una copia de BlockMap
  let startNode = gridArray[start.id];
  let endNode = gridArray[end.id];
  let currentNode;
  let open = [];
  let closed = [];
  let gridArrayMap = new Grid(
    canvas.width,
    canvas.height,
    gridRows,
    gridColumns,
    blockSize
  );

  // NABOS coN WALLS = walkable: false
  function getNabos(node) {
    let checkX; // primero sacamos los nabos y despues chequeamos que esten dentro del mapa o que no sean paredes
    let checkY;
    let nabosList = [];
    let tempList = [];
    let finalNaboList = [];
    for (let x = -blockSize; x <= blockSize; x += blockSize) {
      for (let y = -blockSize; y <= blockSize; y += blockSize) {
        if (x == 0 && y == 0) {
          continue;
        }
        // aca se puede hacer un if que filtre las diagonales, de ser necesario
        checkX = node.posx + x;
        checkY = node.posy + y;
        //console.log("x: "+checkX+" y: "+checkY)
        if (
          checkX >= 0 &&
          checkX <= canvas.width - blockSize &&
          checkY >= 0 &&
          checkY <= canvas.height - blockSize
        ) {
          tempList.push({ x: checkX, y: checkY });
        }
      }
    }
    // for loop for pushing only the nodes that are not walls

    for (let i = 0; i < tempList.length; i++) {
      let tempNode = getNode(
        tempList[i].x,
        tempList[i].y,
        xArray,
        yArray,
        gridArray
      );
      if (wallMap.includes(blockMap[tempNode].id)) {
        //console.log("node is a wall: " + gridArray[tempNode].id);
        nabosList.push(
          getNode(
            tempList[i].x,
            tempList[i].y,
            xArray,
            yArray,
            gridArray,
            (walkable = false)
          )
        );
      } else if (!wallMap.includes(gridArray[tempNode].id)) {
        nabosList.push(
          getNode(tempList[i].x, tempList[i].y, xArray, yArray, gridArray)
        );
      }
      //console.log(tempList[i])
      //console.log(getNode(tempList[i].x,tempList[i].y, xArray,yArray, blockMap))
    }
    //console.log(nabosList)
    for (let i = 0; i < nabosList.length; i++) {
      finalNaboList.push(gridArray[nabosList[i]]);
      //console.log(finalNaboList)
    }
    return finalNaboList;
  }

  // Main algorith
  let pathFinding = true;
  function findPath() {
    gridArrayMap.draw();
    open = [];
    closed = [];
    startNode.getHCost = startNode.getValueH();
    startNode.getGCost = 0;
    currentNode = startNode;
    open.push(currentNode);
    let counter = 0;
    let limit = 2000; // hard coded limiter for avoiding infinite loop // CHANGE ASAP

    while (pathFinding && counter < limit) {
      if (counter >= limit) {
        console.log("limit reached");
        console.log(closed);
        console.log(open);
      }
      tempArray = Array.from(open);
      //currentNode = tempArray[0];
      //console.log(currentNode);
      //console.log("state: " + counter);
      counter++;
      let lowestIndex = 0;
      for (let i = 0; i < tempArray.length; i++) {
        currentNode.getHCost = currentNode.getValueH();
        tempArray[i].getHCost = tempArray[i].getValueH();
        stateLog.push({
          type: "1.0",

          cid: currentNode.id,
          tid: tempArray[i].id,
          chk:
            tempArray[i].getGCost + tempArray[i].getValueH() <
              currentNode.getGCost + currentNode.getValueH() ||
            (tempArray[i].getGCost + tempArray[i].getValueH() ===
              currentNode.getGCost + currentNode.getValueH() &&
              tempArray[i].getValueH() < currentNode.getValueH()),
          i: i,
          cF: currentNode.getGCost + currentNode.getValueH(),
          tF: tempArray[i].getGCost + tempArray[i].getValueH(),
          opn: tempArray[i].open,
          cld: tempArray[i].closed,
        });

        if (
          tempArray[i].getGCost + tempArray[i].getValueH() <
            tempArray[lowestIndex].getGCost +
              tempArray[lowestIndex].getValueH() ||
          (tempArray[i].getGCost + tempArray[i].getValueH() ===
            tempArray[lowestIndex].getGCost +
              tempArray[lowestIndex].getValueH() &&
            tempArray[i].getValueH() < tempArray[lowestIndex].getValueH())
        ) {
          lowestIndex = i;
        }
      }
      currentNode = open[lowestIndex];

      if (currentNode.id === endNode.id) {
        //console.log("arrived");
        var curr = currentNode;
        var ret = [];
        while (curr.parent) {
          //console.log(curr.parent);
          ret.push(curr);
          curr = curr.parent;
        }
        //console.log("ret");
        //console.log(ret);
        ret.forEach((bloq) => {
          bloq.drawPath();
        });
        startNode.drawStart();
        closed.push(currentNode);
        //console.log(startNode);
        currentNode.drawEnd();
        pathing = ret.reverse(); //encontrar esta funcion
        pathing.unshift(startNode);
        let player = new PathLine(startNode, endNode, pathing);
        player.draw();
        console.log("pathing");
        console.log(pathing);
        startNode = gridArray[currentNode.id];
        pathFinding = false;
        counter = limit;
        //console.log(counter);
        stateLog.push({
          type: "3.0",
          c: currentNode.id,
          open: currentNode.open,
          closed: currentNode.closed,
          visited: currentNode.visited,
        });
        return; //exits loop
      }
      //console.log("to be spliced");
      //console.log(gridArray[open[lowestIndex].id]);
      open.splice(lowestIndex, 1); //usar splice y el indexToSplice que viene del primer loop
      gridArray[currentNode.id].closed = true;

      closed.push(currentNode);
      currentNode.closed = true;
      currentNode.open = false;
      currentNode.drawClosed();
      stateLog.push({
        type: "1.2",
        c: currentNode.id,
        open: currentNode.open,
        closed: currentNode.closed,
        visited: currentNode.visited,
      });
      // stateLog.push({type: "Closed", closed: closed})

      let movementCost; // need this variable to set the best neighbor
      if (pathFinding) {
        getNabos(currentNode).forEach(function (neighbor) {
          if (!neighbor.walkable) {
            stateLog.push({
              type: "2.0.wall",
              nid: neighbor.id,
            });
            return;
          } else if (neighbor.walkable) {
            if (neighbor.closed) {
              stateLog.push({
                type: "2.0.closed",
                nid: neighbor.id,
              });
              return;
            } else if (!neighbor.closed) {
              if (neighbor.getGcost === undefined) {
                gridArray[neighbor.id].getGCost =
                  currentNode.getGCost + getDistance(currentNode, neighbor);
                neighbor.getGCost =
                  currentNode.getGCost + getDistance(currentNode, neighbor);
              } else if (neighbor.getGcost === 0) {
                gridArray[neighbor.id].getGCost =
                  currentNode.getGCost + getDistance(currentNode, neighbor);
                neighbor.getGCost =
                  currentNode.getGCost + getDistance(currentNode, neighbor);
              }
              movementCost =
                currentNode.getGCost + getDistance(currentNode, neighbor);
              if (
                movementCost < neighbor.getGCost ||
                !open.includes(neighbor)
              ) {
                //console.log("best G");
                neighbor.getGCost = movementCost;
                neighbor.getHCost = neighbor.getValueH();
                gridArray[neighbor.id].getGCost = movementCost;
                gridArray[neighbor.id].getHCost =
                  gridArray[neighbor.id].getValueH();
                neighbor.open = true;
                neighbor.parent = gridArray[currentNode.id];
                gridArray[neighbor.id].parent = gridArray[currentNode.id];
                neighbor.visited = true;
                gridArray[neighbor.id].open = true;
                gridArray[neighbor.id].parent = currentNode;
                gridArray[neighbor.id].visited = true;
                gridArray[neighbor.id].drawOpen();
                neighbor.drawOpen();
                open.push(neighbor);
                stateLog.push({
                  type: "2.1",
                  c: currentNode.id,
                  n: neighbor.id,
                  mC: movementCost,
                  nG: neighbor.getGCost,
                  cC: currentNode.getGCost,
                  chk: movementCost < neighbor.getGCost,
                  open: neighbor.open,
                  closed: neighbor.closed,
                  visited: neighbor.visited,
                });
                if (!open.includes(neighbor) && !closed.includes(neighbor)) {
                  neighbor.getGCost = movementCost;
                  neighbor.getHCost = neighbor.getValueH();
                  gridArray[neighbor.id].getGCost = movementCost;
                  gridArray[neighbor.id].getHCost =
                    gridArray[neighbor.id].getValueH();
                  neighbor.open = true;
                  gridArray[neighbor.id].open = true;
                  //gridArray[neighbor.id].parent = currentNode;
                  gridArray[neighbor.id].visited = true;
                  gridArray[neighbor.id].drawOpen();
                  open.push(gridArray[neighbor.id]);
                  stateLog.push({
                    type: "2.2",
                    c: currentNode.id,
                    n: neighbor.id,
                    mC: movementCost,
                    nG: neighbor.getGCost,
                    cC: currentNode.getGCost,
                    chk: movementCost < neighbor.getGCost,
                    open: neighbor.open,
                    closed: neighbor.closed,
                    visited: neighbor.visited,
                  });
                }
              }
            }
          }
        });
      }
    }
  }
  //console.log(stateLog);
  findPath();
}

class PathLine {
  constructor(start, end, path) {
    this.start = start;
    this.end = end;
    this.path = path;
  }
  draw() {
    c.lineWidth = 3;
    c.beginPath(); //punto de origen
    //c.moveTo(this.start.posx + 20, this.start.posy + 20); //punto de origen movido
    if (this.path === undefined) {
      console.log("no pathing");
    } else {
      this.path.forEach((node) => {
        //console.log(node)
        c.lineTo(node.posx + halfBlock, node.posy + halfBlock);
        c.moveTo(node.posx + halfBlock, node.posy + halfBlock);
      });
    }
    //c.lineTo(this.end.posx + 20, this.end.posy + 20);
    c.stroke();
  }
}

//
function getNode(x, y, xArray, yArray, blockMap) {
  let tempX;
  let tempY;
  let result;
  for (i = 0; i < xArray.length; i++) {
    if (x >= xArray[i].position) {
      tempX = xArray[i]; // takes the last value with the position x
    }
  }
  for (i = 0; i < yArray.length; i++) {
    if (y >= yArray[i].position) {
      tempY = yArray[i]; // takes the last value with the position y
    }
  }
  for (let i = 0; i < blockMap.length; i++) {
    if (
      blockMap[i].posx === tempX.position &&
      blockMap[i].posy === tempY.position
    ) {
      result = blockMap[i].id;
    }
  }
  return result;
}

function getDistance(nodeA, nodeB) {
  //Manhattan distance

  // let distX = Math.abs(nodeA.posx - nodeB.posx);
  // let distY = Math.abs(nodeA.posy - nodeB.posy);
  // return distX + distY;

  // Distancia Euclidiana ()
  let distX = Math.abs(nodeA.posx - nodeB.posx);
  let distY = Math.abs(nodeA.posy - nodeB.posy);
  let c = Math.sqrt(distX * distX + distY * distY);
  let d = c.toFixed(2);
  return Number(d);
}
function clicked(x, y, xArray, yArray, blockMap) {
  //pathFinding = true
  if (startNode === undefined) {
    console.log(`setting start to ${startDefaultNode} because undefined`);
    //console.log(startNode);
    startNode = blockMap[startDefaultNode];
  } else if (startNode !== undefined) {
    console.log("Starting from end of old path");
    startNode = endNode;
  }
  if (blockMap[getNode(x, y, xArray, yArray, blockMap)].walkable) {
    endNode = blockMap[getNode(x, y, xArray, yArray, blockMap)];
    //endPoint = new Vec2(x, y);
    PathFinder(blockMap, startNode, endNode);
  } else if (!blockMap[getNode(x, y, xArray, yArray, blockMap)].walkable) {
    console.log("cannot set endNode to wall");
  }
}

canvas.addEventListener("click", function (event) {
  let x = event.pageX;
  //console.log(event.pageX)
  //console.log(event.pageY)
  let y = event.pageY;
  clicked(x, y, xArray, yArray, blockMap);
});
