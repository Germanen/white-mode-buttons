/*
 * White Mode Buttons – Firefox Add-on
 * Copyright © 2025 Dave Soysal (GermanusTV) | Eva Soysal | Aiden Nova
 *
 * Licensed under the MIT License with attribution required
 *
 * You can use this code freely, modify it, and distribute it,
 * as long as you name Dave Soysal as the original developer.
 * (e.g., in the README, license block, or footer)
 *
 * Project page: https://github.com/Germanen/white-mode-buttons
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
