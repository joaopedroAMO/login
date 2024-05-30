const inputsenha = document.getElementById('senha');
const eyes = document.getElementById('eyes');

function enviar(){
    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;
    const btn = document.getElementById('btn-voltar')
    if(usuario == "admin" && senha == "admin"){
        alert("Sucesso");
        document.getElementById("form").style.display = "none"
        btn.style.display = "block"
        // location.href = "home.html";
    }else{
        alert('Usuario ou senha incorreto');
        btn.style.display = "none"
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

function voltar(){
    const btn = document.getElementById('btn-voltar')
    if( document.getElementById("form").style.display = "none"){
        document.getElementById("form").style.display = "flex"
        btn.style.display = "none"
    }else{
        document.getElementById("form").style.display = "none"
    }
}