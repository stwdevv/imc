function calcula_imc(){
    altura = document.imcform.altura.value
    peso = document.imcform.peso.value
    imc = (peso/(altura*altura))

    if (imc<18.5){
        alert("voce esta abaixo do peso indice:" + imc)
    }

    if (imc>=18.5 && imc<=24.99){
        alert("voce esta com o peso ideal indice:" + imc)
    }

    if (imc>=25 && imc<=29.99){
        alert("voce esta com sobrepeso indice:" + imc)
    }

    if (imc>=30 && imc<=39.99){
        alert("voce esta com obesidade indice:" + imc)
    }

    if (imc>=40){
        alert("voce esta com obesidade morbida indice:" + imc)
    }

}