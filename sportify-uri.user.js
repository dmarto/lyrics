// ==UserScript==
// @name         spotify uri
// @author       dmarto
// @version      1.0
// @match        https://open.spotify.com/*
// ==/UserScript==

window.location.replace('spotify:' + document.URL);
window.top.close();
