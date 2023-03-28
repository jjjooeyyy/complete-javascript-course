
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