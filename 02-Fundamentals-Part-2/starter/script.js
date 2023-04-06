
<<<<<<< HEAD
const calcTip = function(bill) {
    return bill>=50 && bill<=300 ? bill*0.15 : bill*0.2;
}

const bills = [125,555,44];

const bill1 = calcTip(bills[0]);
const bill2 = calcTip(bills[1]);
const bill3 = calcTip(bills[2]);

const tips = [bill1, bill2, bill3];


const totals = [(bills[0]+tips[0]),(bills[1]+tips[1]),(bills[2]+tips[2])];

console.log(totals);
=======

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

>>>>>>> 98ef55876ccc4719b2700020e73057f18a95a7bf
