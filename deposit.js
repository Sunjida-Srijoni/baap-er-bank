//console.log("deposit.js file");

document.getElementById('deposit-btn').addEventListener('click', function(){
    console.log("deposit button clicked");

    let depositAmount = document.getElementById('deposit-amount');

    console.log(depositAmount.value);

    let previousDepositAmount = document.getElementById('previous-deposit');
    console.log(previousDepositAmount.innerText);

    let balance = document.getElementById('initial-balance');
    console.log("balance is" + balance.innerText);

    if(depositAmount.value === ''){
        alert("Please insert a correct amount");
    }
    else{
        let depositAmountUpdated = parseInt(previousDepositAmount.innerText); 
        let newDepositAmount = parseInt(depositAmount.value);
        let mainBalance = parseInt(balance.innerText);

        balance.innerText = mainBalance + newDepositAmount;

    

    if(depositAmountUpdated > 0 ){


        previousDepositAmount.innerText = depositAmountUpdated + newDepositAmount;

    }
    else{

        console.log("p" + previousDepositAmount.innerText);



         previousDepositAmount.innerText = depositAmountUpdated + newDepositAmount;
    }

    }

   depositAmount.value = '';

    
});
