const amount = document.querySelector("#amount");
const currency = document.querySelector("#currency");

amount.addEventListener("input",()=>{
    //usando regex para negar letras
    const hasCharactersRegex = /\D+/g;
    amount.value = amount.value.replace(hasCharactersRegex,"")
    console.log(amount.value);
})

currency.addEventListener("change",()=>
{
    const currencyValue = currency.value;
    if(currencyValue == "EUR"){
        console.log("Euro");
    }else if(currencyValue == "USD"){
        console.log("Dolar")
    }else{
        console.log("Libra Esterlina")
    }
})