const amount = document.querySelector("#amount");
const currency = document.querySelector("#currency");
const form = document.querySelector("form");
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
        newPrice = convertCurrency(money,6.11,'€')
    }else if(currencyValue == "USD"){
        newPrice = convertCurrency(money,5.8,'U$')
    }else{
        newPrice = convertCurrency(money,7.33,'£')
    }
    console.log(newPrice);
})

function convertCurrency(amount,price,symbol){
    let newPrice = amount * price;
    return `${symbol} ${price}`
}