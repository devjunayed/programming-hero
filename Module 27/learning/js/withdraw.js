/* 
 1. add withdraw button event handler
 2. get withdraw amount by suing getInputFieldValueById function
 3. get previous withdraw amount by using getTexlElementValueById function
 4. calculate new withdraw Total and set the value
 4.5. set new withdraw total by using setTextElementValueById function
 5. get previous balance total by using getElementValueById
6. calculate new balance total
7. set balance total using setTextElementValueById
*/
document.getElementById('btn-withdraw').addEventListener('click', function(){
    const newWithdrawAmount = getInputValueById('withdraw-field');
    const previousWithdrawTotal = getElementValueById( 'withdraw-total');
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    setTextElementValueById('withdraw-total', newWithdrawTotal);

    const previousBalanceTotal = getElementValueById('balance-total');
    const newBlanaceTotal = previousBalanceTotal - newWithdrawAmount;
    setTextElementValueById('balance-total', newBlanaceTotal);
});