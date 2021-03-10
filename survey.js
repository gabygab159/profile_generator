const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are cool too ', (answer) => {
  console.log(`Nice to meet you: ${answer}`);
  rl.question('What\'s an activity you like doing? ', (answer) => {
    console.log(`${answer} sounds like a fun time`);
    rl.question('What do you listen to while doing that? ', (answer) =>{
      console.log(`${answer} is ok but have you ever listened to Roxette?`);
      rl.question('What\'s your favourite meal? Breakfast? Second Breakfast? Elevensies? Lunch? Afternoon tea?', (answer) => {
        console.log(`"I don't think he's heard of " ${answer} ...`);
        rl.question(`Speaking of which...who is your favourite hobbit? `, (answer) => {
          console.log(`${answer}...bootcamp is making talk to my code`);
          rl.close();
        });
      });
    });
  });

});