const amount = document.querySelector("#amount");
const currency = document.querySelector("#currency");
const form = document.querySelector("form");

const USD = 5.8;
const EUR = 6.11;
const GPB = 7.33;
amount.addEventListener("input",()=>{
    //usando regex para negar letras
    const hasCharactersRegex = /\D+/g;
    amount.value = amount.value.replace(hasCharactersRegex,"")
    console.log(amount.value);
})

form.addEventListener("submit",(event)=>
{
    event.preventDefault();
    const currencyValue = currency.value;
    let newPrice = null;
    let money = amount.value;
    if(currencyValue == "EUR"){
        newPrice = convertCurrency(money,EUR,'€')
    }else if(currencyValue == "USD"){
        newPrice = convertCurrency(money,USD,'U$')
    }else{
        newPrice = convertCurrency(money,GPB,'£')
    }
    console.log(newPrice);
})

function convertCurrency(amount,price,symbol){
    let newPrice = amount * price;
    return `${symbol} ${price}`
}