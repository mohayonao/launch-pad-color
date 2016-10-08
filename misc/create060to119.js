const Color = require("Color");
const AbletonLiveColors = [
  "#f04115", "#bf6100", "#b18c00", "#859708",
  // 64..127
  "#50a027", "#009d8e", "#0079c0", "#0000ff", "#2d50a4", "#6247b0", "#7b7b7b", "#3c3c3c",
  "#ff0000", "#bfbb64", "#a6c000", "#78c823", "#34c500", "#00c0af", "#00a2f1", "#527de7",
  "#8868e7", "#a447af", "#b93b69", "#975731", "#f86c00", "#befd00", "#82ff5d", "#00ff00",
  "#00ffa5", "#52ffe8", "#00e9ff", "#89c4ff", "#91a5ff", "#b989ff", "#da67e7", "#ff2cd6",
  "#ffa601", "#fff200", "#e3f600", "#dcc500", "#bf9e5f", "#88b57b", "#86c2ba", "#9ab3c5",
  "#84a5c3", "#c78b7a", "#f43c7f", "#ff93a5", "#ffa36f", "#ffef9a", "#d2e594", "#bad16f",
  "#a9a9a9", "#d3fee0", "#ccf1f9", "#b9c0e4", "#cdbae5", "#d0d0d0", "#dfe6e5", "#ffffff",
];

const colors = AbletonLiveColors.map((color) => {
  let [ h, s, v ] = Color(color).hsvArray();

  s *= 1.2;

  return Color({ h, s, v }).hexString();
});

console.log(JSON.stringify(colors).replace(/,/g, ", ").toLowerCase());
