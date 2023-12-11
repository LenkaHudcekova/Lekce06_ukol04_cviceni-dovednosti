/* DOMÁCÍ ÚKOL 04
Dovednosti
Vizualizujte vědomosti.
Vytvořte si repozitář ze šablony cviceni-dovednosti. 
V repozitáři najdete zdrojové soubory stránky se třemi posuvníky. 
Ty ukazují úroveň dovedností v různých oblastech.

Doplňte do stránky JavaScriptový program, který pomocí funkce prompt 
požádá uživatele aby vyjářil svoji úroveň postupně ve všech zobrazených 
dovednostech jako číslo 0–100. Program pak nastaví posuvníky na stránce 
na odpovídající délku a hodnoty u posuvníků na uživatelem zadaná čísla.
Na samém začátku vašeho programu vytvořte funkci updateSkill, 
která bere dva vstupy: textový řetězec představující id elementu a 
číslo mezi 0–100. Tato funkce při zavolání nastaví posuvník se zadaným id 
na správnou hodnotu. Použijte tuto funkci ve vašem kódu, abyste nemuseli 
při nastavování posuvníků psát třikrát po sobě téměř stejný kód. */

console.log('funguju!');
const vstup ={
    HTML: prompt("Zadejte úroveň znalostí HTML v rozmezí 0-100:"),
    CSS: prompt("Zadejte úroveň znalostí CSS v rozmezí 0-100:"),
    JS: prompt("Zadejte úroveň znalostí Javascriptu v rozmezí 0-100:"),
} 

/* Na samém začátku vašeho programu vytvořte funkci updateSkill, která bere dva vstupy: 
textový řetězec představující id elementu a číslo mezi 0–100. 
Tato funkce při zavolání nastaví posuvník se zadaným id na správnou hodnotu. 
Použijte tuto funkci ve vašem kódu, abyste nemuseli při nastavování posuvníků psát třikrát po sobě téměř stejný kód.
 */

const updateSkill = (idElm,cislo) => {
    const skillProgrElm = document.querySelector(`#${idElm}`)
    const skillIdElm = skillProgrElm.querySelector(".skill__bar > .skill__progress")
    const skillElm = skillProgrElm.querySelector(".skill__value")
    skillElm.textContent = `${cislo} /100`
    skillIdElm.style.width = `${cislo}%`
}

updateSkill("skill1", vstup.HTML)
updateSkill("skill2", vstup.CSS)
updateSkill("skill3", vstup.JS)
