/* 
fixed: per item wood requirements
1. chair --> 3 cft
2. table --> 10 cft
3. bed   --> 50 cft

vary: quantity
*/

function woodCalculator(chairQuanttity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairWood = chairQuanttity * perChairWood;
    const tableWood = tableQuantity * perTableWood;
    const bedWood = bedQuantity * perBedWood;

    const totalWood = chairWood + tableWood + bedWood;

    return totalWood;
}

const totalWood = woodCalculator(2, 2, 5);
console.log(totalWood);