// Import stylesheets
import './style.css';

// Write TypeScript code!
/*let title: string = 'My Counter';
document.getElementById('app.title').innerHTML = title;*/
/*let desc: number = 0;
let ciclo: number = 0;
let work: number = 0;
let fim: string = 'Finalizado';*/

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
let text = '-';
let ciclo: number = 0;
let work: number = 10;

let intervalId = setInterval(() => {
  if (ciclo < 1) {
    text = 'PREPARE-SE!';
  } else if (ciclo >= 9) {
    text = 'TERMINADO, recarregue a pagina para continuar.';
  } else if (work > 10) {
    text = 'FAÇA!!!!!!!!';
  } else {
    text = 'DESCANSE!!!';
  }
  document.getElementById('app.text').innerHTML = text;
  if (ciclo >= 1 && ciclo <= 8) {
    document.getElementById('app.ciclo').innerHTML = ciclo.toString();
  } else {
    document.getElementById('app.ciclo').innerHTML = '-';
  }
  if (ciclo < 9) {
    document.getElementById('app.work').innerHTML = work.toString() + 's';
  } else {
    document.getElementById('app.work').innerHTML = '-';
  }
  work -= 1;
  if (work == 0) {
    ciclo += 1;
    work = 30;
  }
}, 100);

/*let intervalId2 = setInterval(() => {
  work = work - 1;
  document.getElementById('app.work').innerHTML = work.toString();
}, 1000);

 if (desc <= 10) {
      document.getElementById('app.desc').innerHTML = desc.toString();
    }

*/
