document.getElementById('btn-deposit').addEventListener('click', function(){
    /* 
    1. get the element by id
    2. get the vlaue from the element
    3. convert string value to a number
    */
   const newDepositAmount = getInputValueById('deposit-field');

    /* 
    1. get previous deposit total by id
    */

    const previousDepositTotal = getElementValueById('deposit-total');

    /* 
        calculate new deposti total
     */
    const newDepositTotal = previousDepositTotal + newDepositAmount;

    // set deposit toal
    setTextElementValueById('deposit-total', newDepositTotal);

    // get previoust balance by using the function
    const previousBalanceTotal = getElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    setTextElementValueById('balance-total', newBalanceTotal);
});