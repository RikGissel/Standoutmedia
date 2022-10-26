// her fortæller jeg browseren at brugeren skal lande tilbage til toppen af hjemmesiden hver gang der trykkes "refresh"
if (history.scrollRestoration) {
  history.scrollRestoration = "manual";
} else {
  onbeforeunload = function () {
    scrollTo(0, 0);
  };
}

// jeg vil først have at min top knap kommer frem nede i højre hjørne efter at man scroller 150 pixels ned af :-)
let topButton = document.getElementById("back-to-top");
function scrollBtn() {
  document.documentElement.scrollTop > 150
    ? (topButton.style.display = "block") /* <----- ternary operator bruger jeg i dette tilfælde da det er nemt og effektivt (jeg sparer kode) */
    : (topButton.style.display = "none"); /* <----- og her er min conditional operator */
}
function scrollEffect() {
  (document.body.scrollTop = 0), (document.documentElement.scrollTop = 0);
}
window.onscroll = () => {
  scrollBtn();
};
