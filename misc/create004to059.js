const Color = require("color"); // npm install color

const S = [  32,  96,  96,  96 ];
const V = [ 100, 100,  80,  60 ];

const colors = [];

for (let i = 0; i < 14; i++) {
  const h = i * 24 + 6;

  for (let j = 0; j < 4; j++) {
    const s = S[j];
    const v = V[j];

    colors.push(Color({ h, s, v }).hexString());
  }
}

console.log(JSON.stringify(colors).replace(/,/g, ", ").toLowerCase());
