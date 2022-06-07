const typewriter = ((str) => {
  
  let delay = 0;
  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
    }, delay)
    delay += 50;
  }
});

const sentence = "hello there from Lighthouse Labs\n";
typewriter(sentence);