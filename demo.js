
var push2speech = require("./push2speech");
var sys = require("sys");

var stdin = process.openStdin();

var commands = [
  "Cook timer 5 minutes remaining",
  "Cook timer finished",
  "Dish washer cycle complete",
  "Dryer cycle complete",
  "Washer cycle complete",
];

console.log('Demo Commands (enter number to trigger):');
for(var i = 0; i < commands.length; i++) {
  console.log(' ' + i + ') ' + commands[i]);
}

stdin.addListener("data", function(d) {
  var input = d.toString().substring(0, d.length-1);
  var selection = parseInt(input);
  if(selection >= 0 && selection < commands.length) {
    push2speech.talk(commands[selection]);
  } else {
    console.log('Invalid selection: ' + selection);
  }
});

