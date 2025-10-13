/*
 * White Mode Buttons – Firefox Add-on
 * Copyright (c) 2025 Dave Soysal (GermanusTV)
 *
 * MIT License – mit Namensnennungspflicht
 * 
 * Du darfst diesen Code frei verwenden, verändern und verbreiten,
 * solange du Dave Soysal als ursprünglichen Entwickler nennst.
 * (z. B. im README, Lizenzblock oder Footer)
 *
 * Projektseite: https://github.com/Germanen/white-mode-buttons
 */
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
