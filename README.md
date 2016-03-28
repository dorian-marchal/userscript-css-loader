# Userscript CSS loader for webpack

Inject a CSS file in the DOM with the greasemonkey function `GM_addStyle`.
Useful for loading a simple CSS file without embedding both `css-loader` and `style-loader` in your userscript.

## Installation

`npm install --save-dev userscript-css-loader`

## Usage

```js
// ==UserScript==
// @name           Example userscript
// @grant          GM_addStyle
// ==/UserScript==

require('userscript-css!./style.css');
```
