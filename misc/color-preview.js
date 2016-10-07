const midi = require("midi"); // npm install midi

const LaunchPadD1 = [
  0x51, 0x52, 0x53, 0x54, 0x55, 0x56, 0x57, 0x58,
  0x47, 0x48, 0x49, 0x4A, 0x4B, 0x4C, 0x4D, 0x4E,
  0x3D, 0x3E, 0x3F, 0x40, 0x41, 0x42, 0x43, 0x44,
  0x33, 0x34, 0x35, 0x36, 0x37, 0x38, 0x39, 0x3A,
  0x29, 0x2A, 0x2B, 0x2C, 0x2D, 0x2E, 0x2F, 0x30,
  0x1F, 0x20, 0x21, 0x22, 0x23, 0x24, 0x25, 0x26,
  0x15, 0x16, 0x17, 0x18, 0x19, 0x1A, 0x1B, 0x1C,
  0x0B, 0x0C, 0x0D, 0x0E, 0x0F, 0x10, 0x11, 0x12,
];

const output = new midi.output();

output.openPort(0);

LaunchPadD1.forEach((d1, i) => {
  output.sendMessage([ 0x90, d1, i + 0 ]);
});

output.closePort();
