const Color = require("color"); // npm install color

const H = [   6,  78,  54,  30 ];
const S = [  96,  96 ];
const V = [  90,  50 ];

const colors = [];

for (let i = 0; i < 4; i++) {
  const h = H[i];

  for (let j = 0; j < 2; j++) {
    const s = S[j];
    const v = V[j];

    colors.push(Color({ h, s, v }).hexString());
  }
}

console.log(JSON.stringify(colors).replace(/,/g, ", ").toLowerCase());
