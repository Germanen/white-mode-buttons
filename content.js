
// Style Injection für weiße Buttons
const style = document.createElement('style');
style.textContent = \`
  button {
    background-color: white !important;
    color: black !important;
    border: 1px solid #ccc !important;
  }
\`;
document.head.append(style);
