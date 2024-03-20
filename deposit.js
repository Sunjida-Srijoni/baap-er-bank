//console.log("deposit.js file");

document.getElementById('deposit-btn').addEventListener('click', function(){
    console.log("deposit button clicked");

    let depositAmount = document.getElementById('deposit-amount');

    console.log(depositAmount.value);

    let previousDepositAmount = document.getElementById('previous-deposit');
    console.log(previousDepositAmount.innerText);

    console.log(typeof(previousDepositAmount.innerText));
    console.log(typeof(depositAmount.value));

    let depositAmountUpdated = parseInt(previousDepositAmount.innerText); 
    let newDepositAmount = parseInt(depositAmount.value);

    console.log("deposit Amount updated is"+ depositAmountUpdated);

    if(depositAmountUpdated > 0 ){


        previousDepositAmount.innerText = depositAmountUpdated + newDepositAmount;

    }
    else{

        console.log("p" + previousDepositAmount.innerText);



         previousDepositAmount.innerText = depositAmountUpdated + newDepositAmount;
    }

   

    
});
