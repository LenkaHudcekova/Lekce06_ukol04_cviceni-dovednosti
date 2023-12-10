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
/* const vstup ={
    HTML: prompt("Zadejte úroveň znalostí HTML v rozmezí 0-100:"),
    CSS: prompt("Zadejte úroveň znalostí CSS v rozmezí 0-100:"),
    JS: prompt("Zadejte úroveň znalostí Javascriptu v rozmezí 0-100:"),
} 

console.log(vstup)

const skill1Elm = document.querySelector("#skill1")
const skill1ValueElm = skill1Elm.querySelector(".skill__value")
const skill1ProgrElm = skill1Elm.querySelector(".skill__bar > .skill__progress")

skill1ValueElm.textContent = `${vstup.HTML} /100`
skill1ProgrElm.style.width = `${vstup.HTML}%`

const skill2Elm = document.querySelector("#skill2")
const skill2ValueElm = skill2Elm.querySelector(".skill__value")
const skill2ProgrElm = skill2Elm.querySelector(".skill__bar > .skill__progress")

skill2ValueElm.textContent = `${vstup.CSS} /100`
skill2ProgrElm.style.width = `${vstup.CSS}%`

const skill3Elm = document.querySelector("#skill3")
const skill3ValueElm = skill3Elm.querySelector(".skill__value")
const skill3ProgrElm = skill3Elm.querySelector(".skill__bar > .skill__progress")

skill3ValueElm.textContent = `${vstup.JS} /100`
skill3ProgrElm.style.width = `${vstup.JS}%` */

/* Na samém začátku vašeho programu vytvořte funkci updateSkill, která bere dva vstupy: 
textový řetězec představující id elementu a číslo mezi 0–100. 
Tato funkce při zavolání nastaví posuvník se zadaným id na správnou hodnotu. 
Použijte tuto funkci ve vašem kódu, abyste nemuseli při nastavování posuvníků psát třikrát po sobě téměř stejný kód.
 */

const updateSkill = (idElm,cislo) => {
    const skillProgrElm = document.querySelector(`#${idElm}`)
    const skillIdElm = skillProgrElm.querySelector(".skill__bar > .skill__progress")
    return skillIdElm.style.width = `${cislo}%`
}

updateSkill("skill1", "56")
updateSkill("skill2", "90")
updateSkill("skill3", "10")
