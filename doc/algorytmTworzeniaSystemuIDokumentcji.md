# Algorytm iteracyjnego tworzenia systemu i dokumentacji:

```js
// pseudo-kod w stylu js

function tworzenieSystemu() {
    var majorVersion = 0;
    var minorVersion = 0;

    var cel = null;
    var system = null;

    while (true) {
        let folder = stworzFolderONazwie(`v${majorVersion}`);

        let aktualizacjaCeluRaport
        aktualizujCel(cel, aktualizacjaCeluRaport);
        zapiszCelWPliku(`${folder}/cel.md`, aktualizacjaCeluRaport);

        let czySystemWypelniaCel = false;
        do {
            let ulepszSystemRaport;
            ulepszSystem(system, cel, uleprzSystemRaport);

            let porownanieRaport;
            czySystemWypelniaCel = porownajAktualnySystemZZadanymCelem(system, cel, porownanieRaport);

            zapiszRaportyDoPliku(`${folder}/v${major}.${minor}.md`, ulepszanieSystemuRaport, porownanieRaport);

            minorVersion++;
        } while (czySystemWypelniaCel);

        let wdrazanieRaport;
        wdroz(system, wdrazanieRaport);

        zapiszRaportDoPliku(`${folder}/wdrazanie.md`, wdrazanieRaport);

        majorVersion++
    }
}
