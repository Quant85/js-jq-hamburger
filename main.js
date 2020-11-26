/****************************************************************************************************************
 * Hamburger menu:
 * mostrare / nascondere il menu principale
 * (ricordate che per vedere l’hamburger in alto a destra dovete scendere a risoluzioni tipo tablet o mobile).
 * Partite come base del vostro esercizio scaricando questa repo:
 * https://bitbucket.org/booleancareers/ex-hamburger-menu-base/downloads
 *Ricordate di scrivere solo il codice JavaScript con jQuery e non modificare HTML e CSS
*****************************************************************************************************************/ 
//1. dichiaro le variabili per associare gli elementi che seleziono, in modo da renderli rimanipolabili all'occorrenza 
var hamburgerIconSelect, hamburgerMenuSelect, hamburgerMenuSelectClose;

hamburgerIconSelect = $("div.header-right > a");
hamburgerMenuSelect = $(".hamburger-menu");
hamburgerMenuSelectClose = $(".hamburger-menu >a.close");

//2. uso i metodi propri di jQ come .click per poter azionare la funzione dicharata al suo interno nel momento in cui si effettua il click sulla selezione dichiarata nella variabile ad esso associato

//2.1 Quando si effettua il click su "div.header-right > a" si attiva la funzione che permette di rendere "display: block" - (quanto meno visibile nel flusso), mediante il metodo .show(), l'elemento selezionato.
hamburgerIconSelect.click(function () { 
  hamburgerMenuSelect.show();
});
//2.1 Quando si effettua il click su ".hamburger-menu >a.close" si attiva la funzione che permette di rendere "display: none" - (quanto meno non visibile nel flusso del document), mediante il metodo .hide(), l'elemento selezionato.
hamburgerMenuSelectClose.click(function () { 
  hamburgerMenuSelect.hide();
});

