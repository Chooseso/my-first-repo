const deposit = document.getElementById("deposit");
const withdraw = document.getElementById("withdraw");
const currentBalanceElement = document.getElementById("current_balance");
const amount_Input = document.getElementById("amount");
let form = document.getElementById("container_function")

let currentBalance = 0;


function updateBalanceDisplay() {
    currentBalanceElement.textContent = `Current Balance: ₱${currentBalance}`;
}


deposit.addEventListener("click", function() {
    const amount = parseInt(amount_Input.value); 
    const process = document.createElement("h3")
    process.style.color = "green"
    if (!isNaN(amount) && amount > 0) { 
        currentBalance += amount; 
        updateBalanceDisplay(); 
        amount_Input.value = ''; 
        process.innerText = `Succefully Deposited: ₱${currentBalance}`
        form.appendChild(process)
        setTimeout(() => {form.removeChild(process)
            
        }, 1000);
    } else {
        alert("Please enter a valid amount to deposit.");
    }
});

withdraw.addEventListener("click", function() {
    const amount = parseInt(amount_Input.value); 
    const process = document.createElement("h3")
    process.style.color = "green"
    if (!isNaN(amount) && amount > 0 && amount <= currentBalance) { 
        currentBalance -= amount; 
        updateBalanceDisplay(); 
        amount_Input.value = ''; 
        process.innerText = `Succefully Withdrew: ₱${amount}`
        form.appendChild(process)
        setTimeout(() => {form.removeChild(process)
            
        }, 1000);
        
    } else {
        alert("Please enter a valid amount to withdraw, and ensure you have enough balance."); // Alert for invalid input
    }
});


updateBalanceDisplay();


form.addEventListener("submit", function(e){
    e.preventDefault()
})