// ------withdraw section----

document.getElementById('withdraw-btn').addEventListener('click', function(){
    console.log("withdraw button clicked");

    let withdrawAmount = document.getElementById('withdraw-amount');

    console.log(withdrawAmount.value);

    let initialWithdrawAmount = document.getElementById('initial-withdraw');
    console.log(initialWithdrawAmount.innerText);

    let balance = document.getElementById('initial-balance');
    console.log("balance is" + balance.innerText);

    if(withdrawAmount.value === ''){
        alert("Please insert a correct amount");
    }
    else{
         let initialWithdrawAmountInt = parseInt(initialWithdrawAmount.innerText); 
        let newWithdrawAmount = parseInt(withdrawAmount.value);
         let mainBalance = parseInt(balance.innerText);

         if(newWithdrawAmount > mainBalance){
            alert("You can not withdraw more than your balance");
         }
         else{
            balance.innerText = mainBalance - newWithdrawAmount;

    

     if(initialWithdrawAmountInt > 0 ){
        initialWithdrawAmount.innerText = initialWithdrawAmountInt + newWithdrawAmount;

     }
     else{


          initialWithdrawAmount.innerText = initialWithdrawAmountInt + newWithdrawAmount;
     }

    }

         

    }

   withdrawAmount.value = '';

    
});