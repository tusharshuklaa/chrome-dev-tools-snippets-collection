// DO NOT PRETTIFY

console.dog = (bark, l = bark.toString().length / 1.66) => {
  console.log(`
       /‾${`‾‾`.repeat(l)}‾
  🐶  < `, bark, `
       \\_${`__`.repeat(l)}_
  `);
};
