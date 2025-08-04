const output = document.getElementById("output");
const form = document.getElementById("inputForm");

const depositButton = document.getElementById("deposit");
const withdrawButton = document.getElementById("withdraw");
const balanceButton = document.getElementById("check-balance");

function account(){
    let balance = 0;
    return {
        deposit: function(amount) {
            if (amount <= 0 || isNaN(amount)){
                return `Enter some valid amount to deposit.`;
            }
            balance += amount;
            return `Deposited ${amount} into the account.`;
        },
        withdraw: function(amount) {
            if (amount <= 0 || isNaN(amount)) {
                return `The withdraw amount should be greater than 0.`
            }
            if (balance < amount){
                return `Insufficient Funds.`;
            }
            balance -= amount;
            return `Withdrew ${amount} from the account.`;
        },
        balance: function(){
            return `Balance amount in account is ${balance}.`;
        }
    };
}

const myAccount = account();

depositButton.addEventListener("click",()=>{
    const amount = parseFloat(document.getElementById("amount").value);
    const result = myAccount.deposit(amount);
    output.textContent = `${result}`;
    document.getElementById("amount").value = '';
});
withdrawButton.addEventListener("click",()=>{
    const amount = parseFloat(document.getElementById("amount").value);
    const result = myAccount.withdraw(amount);
    output.textContent = `${result}`;
    document.getElementById("amount").value = '';

});
balanceButton.addEventListener("click",()=>{
    const amount = parseFloat(document.getElementById("amount").value);
    const result = myAccount.balance();
    output.textContent = `${result}`;
});