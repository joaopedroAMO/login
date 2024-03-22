const inputsenha = document.getElementById('senha');
const eyes = document.getElementById('eyes');

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