// Import stylesheets
import './style.css';

// Write TypeScript code!
let title: string = 'My Counter';
document.getElementById('app.title').innerHTML = title;
let counter: number = 0;

let intervalId = setInterval(() => {
  counter = counter + 1;
  document.getElementById('app.counter').innerHTML = counter.toString();
}, 1000);
