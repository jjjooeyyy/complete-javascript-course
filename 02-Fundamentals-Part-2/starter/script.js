

fgffvconst calcAverage = (a,b,c) => (a+b+c)/3;

const scoreDolphin = console.log(calcAverage(85,54,41));
const scoreKoala = console.log((calcAverage(23,34,27)));

const checkWinner = function(avgDolphins,avgKoalas) {
    if(scoreDolphin>=scoreKoala*2) {
        console.log(`Dolphin win(${scoreDolphin} vs ${scoreKoala})`);
    } else if (scoreKoala>=scoreDolphin*2) {
        console.log(`Koala win(${scoreKoala} vs ${scoreDolphin})`);
    } else {
        console.log("No one win");
    }
}

checkWinner(scoreDolphin,scoreKoala);

