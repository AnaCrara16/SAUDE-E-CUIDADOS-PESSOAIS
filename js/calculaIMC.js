function calculaIMC(){
    let altura = document.getElementById("altura")
    let peso = document.getElementById("peso")

    if(altura.value == "" || peso.value == ""){
        window.alert("Preencha todos os campos!")
    }
    else{
        let imc = Number(peso.value)/(Number(altura.value) * Number(altura.value))
        let clasificacao

        if(imc < 18.5){
            clasificacao = "Abaixo do peso"
        }
        else if(imc < 25){
            clasificacao = "Peso ideal"
        }
        else if(imc < 30){
            clasificacao = "Sobrepeso"
        }
        else{
            clasificacao = "Obesidade"
        }
        
        let res = document.createElement("div")
        res.innerHTML = `
            <h3>Seu IMC: ${imc}</h3>
            <p>Sua classificação: ${clasificacao}</p>
        `

        let article = document.getElementById("article")
        article.appendChild(res)
    }

}