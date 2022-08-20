// Import stylesheets
import './style.css';

// Write TypeScript code!
/*let title: string = 'My Counter';
document.getElementById('app.title').innerHTML = title;*/
let desc: number = 0;
let ciclo: number = 0;
let work: number = 0;
let fim: string = 'Finalizado';

/*for (let i = 0; i <= 1; i++) {
  let intervalId = setInterval(() => {
    work = work + i;
    document.getElementById('app.work').innerHTML = work.toString();

    if (work == 5) {
      work = 0;
    }
    }, 1000);

    let intervalId2 = setInterval(() => {
      desc = desc + i;
      document.getElementById('app.desc').innerHTML = desc.toString();

      if(desc == 2){
        desc = 0;
        ciclo++;
        document.getElementById('app.ciclo').innerHTML = ciclo.toString();           
        if (ciclo == 8) {
        document.getElementById('app.finish').innerHTML = fim.toString();
      }
      }
      }, 1000);
}*/
let intervalId2 = setInterval(() => {
  work = work + 1;
  document.getElementById('app.work').innerHTML = work.toString();
  if (work == 20) {
    work = 0;
  }
}, 1000);

let intervalId = setInterval(() => {
  desc = desc + 1;
  document.getElementById('app.desc').innerHTML = desc.toString();

  if (desc == 10) {
    desc = 0;
    ciclo = ciclo + 1;
    document.getElementById('app.ciclo').innerHTML = ciclo.toString();

    if (ciclo == 8) {
      ciclo = 0;
    }
  }
}, 1000);

/*let intervalId2 = setInterval(() => {
  work = work - 1;
  document.getElementById('app.work').innerHTML = work.toString();
}, 1000);

 if (desc <= 10) {
      document.getElementById('app.desc').innerHTML = desc.toString();
    }

*/
