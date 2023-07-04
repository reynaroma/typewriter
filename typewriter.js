const sentence = 'hello there from ligthouse labs';
let ms = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, ms);
  ms += 50;
};

setTimeout(() => {
  process.stdout.write('\n')
}, ms);