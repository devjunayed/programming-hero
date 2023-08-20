const logout = document.getElementById('logout');
logout.addEventListener('click', function(){
    window.location.href="index.html";
});


var depositValue = document.getElementById('deposit-value');
var withdrawValue = document.getElementById('withdraw-value');
var balanceValue = document.getElementById('balance-value');


var btnDeposit = document.getElementById('btn-deposit');
var btnWithdraw = document.getElementById('btn-withdraw');

var inputWithdraw = document.getElementById('withdraw-input');
var inputDeposit = document.getElementById('deposit-input');

btnDeposit.addEventListener('click', function(){
    console.log(inputDeposit.value);

    if(inputDeposit.value === ""){
        blank.showModal();
        return;
    }
    if( isNaN(parseInt(inputDeposit.value)) || parseInt(inputDeposit.value) < 0){
        type.showModal();
        inputDeposit.value = "";
        return;
    }
    var depositAmount = 0;
     depositAmount = parseInt(depositValue.innerText) + parseInt(inputDeposit.value);
     depositValue.innerText = depositAmount;

     
     var totalBalance =  parseInt(balanceValue.innerText) + parseInt(inputDeposit.value);
     balanceValue.innerText = totalBalance;
     inputDeposit.value = '';
});

btnWithdraw.addEventListener('click', function(){

    if(inputWithdraw.value === ""){
        blank.showModal();
        return;
    }
    if(isNaN(parseInt(inputWithdraw.value)) || parseInt( inputWithdraw.value) < 0){
        type.showModal();
        inputWithdraw.value = "";
        return;
    }
    if(parseInt(inputWithdraw.value) > parseInt(balanceValue.innerText)){
        insufficient.showModal();
        inputWithdraw.value = "";
        return;
    }
    var withdrawAmount = parseInt(withdrawValue.innerText) + parseInt(inputWithdraw.value) ;

    withdrawValue.innerText = withdrawAmount;

    
    var totalBalance = parseInt(balanceValue.innerText) - parseInt(inputWithdraw.value);
    balanceValue.innerText = totalBalance;
    inputWithdraw.value = "";
});