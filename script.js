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
    let symbol = null;
    let newPrice = null;
    let money = amount.value;
    if(currencyValue == "EUR"){
        symbol = '€'
        newPrice = convertCurrency(money,EUR,symbol)
    }else if(currencyValue == "USD"){
        symbol = 'US$'
        newPrice = convertCurrency(money,USD,symbol)
    }else{
        symbol = '£'
        newPrice = convertCurrency(money,GPB,symbol)
    }
})

function convertCurrency(amount,price,symbol){
    const footer = document.querySelector("footer");

    try{
        newPrice = (amount * price).toFixed(2);
        footer.classList.add("show-result");

        const description = document.querySelector("#description");
        description.textContent = `${symbol} 1 = ${formartCurrencyBRL(price)}`

        const result = document.querySelector("#result");

        result.textContent = `${String(newPrice).replace(".",",")} Reais`
    }catch(e){
        footer.classList.remove("show-result");
        alert("Peço Perdão mais algum erro ocorreu");
    }
}

function formartCurrencyBRL(value){
    return Number(value).toLocaleString("pt-BR",{
        style:"currency",
        currency:"BRL"
    })
}

