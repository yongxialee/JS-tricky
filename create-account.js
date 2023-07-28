function createAccount(pin, amount=0) {
    return {
        checkBalance(inputPin){
            if(inputPin===pin){
                return `${amount}`;
            }else{
                return "Invalid PIN"
            }

        },
        deposit(inputPin,depositAmount){

            if(inputPin===pin){ 
                let newAmount =amount+depositAmount
                return `Succesfully deposited $${depositAmount}. Current balance:$${newAmount}`

            }else{
                return "Invalid PIN"
            }

        },
        withdraw(inputPin,withdrawAmount){
            if(inputPin===pin){
                let newAmount= amount-withdrawAmount;
                return `Succesfully withdraw $${withdrawAmount}, current balance: $${newAmount}`;
            }else{
                return "INVALID PIN"
            }

        },
        changePin(inputPin,newPin){
            if(inputPin===pin){
                 inputPin=newPin
                 return `PIN successfully changed!`
            }else{
                return "INVALID PIN"
            }
        }

    }

}

module.exports = { createAccount };
