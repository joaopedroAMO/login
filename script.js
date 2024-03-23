const inputsenha = document.getElementById('senha');
const eyes = document.getElementById('eyes');
const usuario = document.getElementById('usuario').value;
const senha = document.getElementById('senha').value;

function enviar(){
    if(usuario == "admin" && senha == "admin"){
        alert("Sucesso");
        location.href = "home.html";
    }else{
        alert('Usuario ou senha incorreto');
    }
}

function versenha(){
    let inputsenhatype = inputsenha.type == "password"

    if(inputsenhatype){
        inputsenha.setAttribute("type", "text");
        eyes.setAttribute("src", "./img/olho.png");
    }else{
        inputsenha.setAttribute("type","password");
        eyes.setAttribute("src", "./img/closed.png");
    }
}