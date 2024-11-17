const amount = document.querySelector("#amount");

amount.addEventListener("input",()=>{
    //usando regex para negar letras
    const hasCharactersRegex = /\D+/g;
    amount.value = amount.value.replace(hasCharactersRegex,"")
    console.log(amount.value);
})