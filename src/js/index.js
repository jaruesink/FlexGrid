import '../styles/main.scss';

const examples = document.querySelectorAll('.row');
examples.forEach((example) => {
  const code_example = document.createElement('pre');
  const html = example.outerHTML;
  code_example.innerHTML = `<xmp>${html}</xmp>`;
  code_example.className = 'prettyprint lang-html';
  document.body.insertBefore(code_example, example)
});
