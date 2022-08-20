// Import stylesheets
import './style.css';

// Write TypeScript code!
/*let title: string = 'My Counter';
document.getElementById('app.title').innerHTML = title;*/
let desc: number = 0;
let ciclo: number = 8;
let work: number = 21;

for (let i = 0; i <= 1; i++) {
  let intervalId = setInterval(() => {
    desc = desc + i;
    if (desc <= 10) {
      document.getElementById('app.desc').innerHTML = desc.toString();
    }
  }, 1000);
}

/*let intervalId2 = setInterval(() => {
  work = work - 1;
  document.getElementById('app.work').innerHTML = work.toString();
}, 1000);*/
