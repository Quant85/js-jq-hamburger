/****************************************************************************************************************
 * Hamburger menu:
 * mostrare / nascondere il menu principale
 * (ricordate che per vedere l’hamburger in alto a destra dovete scendere a risoluzioni tipo tablet o mobile).
 * Partite come base del vostro esercizio scaricando questa repo:
 * https://bitbucket.org/booleancareers/ex-hamburger-menu-base/downloads
 *Ricordate di scrivere solo il codice JavaScript con jQuery e non modificare HTML e CSS
*****************************************************************************************************************/ 

var hamburgerIconSelect = $("div.header-right > a");
var hamburgerMenuSelect = $(".hamburger-menu");
var hamburgerMenuSelectClose = $(".hamburger-menu >a.close");

hamburgerIconSelect.click(function () { 
  hamburgerMenuSelect.show();
});

hamburgerMenuSelectClose.click(function () { 
  hamburgerMenuSelect.hide();
});

