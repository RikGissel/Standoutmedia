const header = document.querySelector('#header')
header.innerHTML += 
`<header class="page-header">
<div class="page-header__top">
  <div class='page-header__logo'><img src="assets/logo_korrekt.png" alt="company logo" /></div>
  <div class="page-header__toggle" onclick="toggleMenu()">☰</div>
</div>
<nav class="page-header__bottom">
  <ul id="navigation" class="navigation">
  <div id='nav__items__wrapper'>
  <li class="navigation__item"><i class="fa-solid fa-envelope" style="padding-right: 10px;"></i>Info@vedsted-gulve.dk</li>
    <li class="navigation__item"><i class="fa-solid fa-phone-flip" style="padding-right: 10px;"></i><span>44 91 48 99</span></li>
    <li class="navigation__item"><i class="fa-brands fa-facebook-f"></i></li>
  </div>
    <li class="navigation__item">Velkommen</li>
    <li class="navigation__item">Gulvslibning & behandling</li>
    <li class="navigation__item">Linoleum, vinyl & tæpper</li>
    <li class="navigation__item">Gulvvårdrum</li>
    <li class="navigation__item">Trægulv</li>
    <li class="navigation__item">Om os</li>
    <li class="navigation__item">Kontakt</li>
  </ul>
</nav>
</header>
`

let nav = document.getElementById('navigation');
function toggleMenu() {
  nav.classList.toggle('navigation--visible');
}