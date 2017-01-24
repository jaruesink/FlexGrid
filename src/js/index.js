import '../styles/main.scss';
const modernizr = require('./modernizr-flexbox.js');

const examples = document.getElementsByClassName("example");

for (let example of examples) {
  let prettyprint = example.nextElementSibling;
  prettyprint.textContent = example.innerHTML;
}