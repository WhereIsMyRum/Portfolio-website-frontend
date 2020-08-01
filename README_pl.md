<html>
<body>
<h1 class="title">Portfolio Website Frontend</h1>
<h3 class="why">Powód</h3>
<p class="why">Strona portfolio nie mogłaby za bardzo istnieć bez odpowiedniego frontendu, zatem odpowiedź na to pytanie jest raczej oczywista.</p>
<h3 class="what">Cel</h3>
<p class="what">Frontend oparty o JavaScript, korzystający z Server-Side Rendering dzięki wykorzystaniu frameworka Next.js, oraz Client-Side Rendering przy użyciu frameworka React.js, na którym to Next.js jest oparty.</p>
<h3 class="how">Wykonanie</h3>
<p class="how">Node.js oraz Next.js odpowiadają za renderowanie HTML oraz data injection. Client-Side Rendering został wykorzystany w komponentach ładowanych dynamicznie, a konkretnie w widoku szczegółowym poszczególnych projektów. Elementy te mogłyby zostać wyrenderowane po stronie serwera, gdyby zastosowany został domyślny sposób tworzenia stron przy użyciu Next.js, to znaczy gdyby poszczególne projekty posiadałyby osobne strony, niestety wedle mojego zamysłu całość portfolio miała znajdować się na pojedynczej stronie, stąd też iniekcja odpowiednich komponentów.&nbsp;Arkusze stylów zostały wygenerowane przy pomocy JSS aby umożliwić wielokrotny użytet niektórych elementów. Wykorzystany zostal także czysty CSS celem uniknięcia efektu FUOC - Flash of Unstyled Content, który może mieć miejsce ze względu na fakt, że arkusze stylów są generowane przy pomocy JS, który jest najpóźniej ładowany przez przeglądarkę. Formularz kontaktowy został w pewnym stopniu zabezpieczony przy użyciu Honey Pot, aby uniknąć nadmiernego spamu.&nbsp;Jestem raczej zadowolony z usykanego efektu, przede wszystkim dlatego, że żaden ze mnnie designer, frontend developement nie należy do moich głównych zaintersowań, a mimo to udało mi się stworzyć stronę, na którą jestem w stanie patrzeć bez krzywienia się.</p>
<h3 class="technologies">Zastosowane technologie</h3>
<ul class="technologies">
  <li class="technologies" hover="Node.js">Node.js</li>
  <li class="technologies" hover="Next.js">Next.js</li>
  <li class="technologies" hover="Server Side Rendering">SSR</li>
  <li class="technologies" hover="JSX">JSX</li>
  <li class="technologies" hover="JSS">JSS</li> 
</ul>
<h3 class="usage">Jak korzystać</h3>
  <p class="usage">Po dokładne informacje odnośnie uruchmonienia projektu zajrzyj do projektu <i>Portfolio website</i>.</p>
<hr>
<small class="created">Data powstania: December 2019</small>
</body>
</html>
