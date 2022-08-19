// Import stylesheets
import './style.css';

// Write TypeScript code!
let title: string = 'MyApp';
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>${title}</h1>
<hr/>
<p>Paragrafo qualquer</p>
`;
//exibindo no console
console.log('Olá mundo');

//sintaxe do for
for (let i = 1; i <= 10; i++) {
  //sintaxer do if
  if (i % 2 == 0) {
    console.log(i);
  }
}
