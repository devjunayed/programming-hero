/* 
1.  add event hanlder with the withdraw button
2.  get the withdraw amount
3.  clear the withdraw input field
4.  get previous total
5.  calculate total withdraw amount and set it to the withdraw total element
6.  get previous balance
7.  calculate new balance and set it to the balance total element   
 */

// step-1
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // step-2
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // step-3
    withdrawField.value = "";

    // step-4
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    // step-5
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = newWithdrawTotal;

    // step-6
    const balanceElement = document.getElementById('balance-total');
    const previousBalanceTotalStrng = balanceElement.innerText;
    const previosuBalanceTotal = parseFloat(previousBalanceTotalStrng);

    // step-7
    const newBalanceTotal = previosuBalanceTotal - newWithdrawAmount;
     balanceElement.innerText = newBalanceTotal;
});