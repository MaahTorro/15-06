const revelar = document.getElementById("revelar")
const senha = document.getElementById("senha")

function revelarSenha(){
    const tipo = senha.getAttribute('type')
    if(tipo == "password"){
        senha.setAttribute('type', 'text')
    }else{
        senha.setAttribute('type', 'password')
    }
}
revelar.onclick = revelarSenha