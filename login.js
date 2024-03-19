document.getElementById('btn-submit').addEventListener('click', function(){
    console.log("submit button has been clicked");

    const email = document.getElementById('email');

    console.log(email.value);

    const password = document.getElementById('password');

    console.log(password.value);

    if(email.value === 'sunjidasrijoni@gmail.com' && password.value === 'secret'){
        console.log("Valid User");
        window.location.href = 'bank.html';
    }
    else{
        alert("Invalid User");
    }


    // else{
    //     console.log("invalid user");
    // }

    
})




// const password = document.getElementById('password').addEventListener('keyup', function(e){
//     console.log(e.target.value);
// });
// console.log(password.value);

const password = document.getElementById('password');

const pass = password.value;
console.log(pass);

