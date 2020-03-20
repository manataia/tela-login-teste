function confirm(){ //testar e, se for true, redirecionar o usuário
    let log = document.getElementById("login")
    let mail = document.getElementById("email")
    let pass = document.getElementById("password")

    let erro = document.getElementById("error")

    if(log.value.length == 0 || mail.value.length == 0 || pass.value.length == 0){
        erro.innerHTML = "[ERRO] Digite as suas credenciais!"
    }else{
        window.location.href = "minecraft.html"
    }
}