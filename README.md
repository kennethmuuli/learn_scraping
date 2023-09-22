# learn_scraping
Grand Wizard Kaspar teaches us about webpage scraping

## resources
- GitHub.CLI
- Kaspari git: kta22elearnscraping (https://github.com/Kasparsu/kta22elearnscraping)
- https://www.w3schools.com/cssref/css_selectors.php
- Rohkem infot asünkroonsuse ja JSi kohta: https://www.youtube.com/watch?v=8aGhZQkoFbQ

Muud stuff:
- hea veebikoomiks: https://xkcd.com/


## tunnid

<details>
    <Summary>9/22/2023</Summary>
    
1) Tõmbasime alla github.cli, et reposid saaks mugavalt ja luua läbi terminali (NB! GitBash otse ei tööta korrektselt. Tööriist selle jaoks liiga graafiline, jooksutame GitBashi läbi windows terminali.)
2) Veidi litsentsidest:
    - https://choosealicense.com/
    - http://www.wtfpl.net/about/
3) Tööriistad:
    - node.js
    - axios (https://github.com/axios/axios#installing)
    - Cheerio (https://cheerio.js.org/docs/intro)
4) Node ei kasuta defaultina import vaid require, sellest saab ümber järgmiste trikkidega:
    - nimetada fail ümber .js -> .mjs
    - muuta package.jsonis main file tüübiks (lisada juurde) ->  "type": "module"
5) Parcel (https://parceljs.org/getting-started/webapp/) lightweight bundle, mis pakib sisu kokku üheks javascriptiks, et brauseris sisu kuvada.
6) API kaudu on võimalik saada kätte, mis iganes infot API pakub, kellele iganes on lubatud API ligipääs, kuid HTMLi lugemiseks on vaja veidi teisi vahendeid, ntks Cheerio.
    - Otsime lehe (https://xkcd.com/) HTMList välja õige unikaalse selektori, et jõuda sisuni, mis meid huvitab.
    - <div id="comic">
7) async funk JS: https://masteringjs.io/tutorials/node/sleep


</details>