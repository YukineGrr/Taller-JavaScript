const lista = document.getElementById('lista');

function add() {

    let texto = document.getElementById('input').value;
    const item = document.createElement('li');
    if(texto!=null && texto!=""){
    item.appendChild(document.createTextNode(texto.toLowerCase()));
    lista.appendChild(item);
    texto.value = "";
}
    

    else{

        alert("No agrego Texto")
    }

}
function del() {

    lista.removeChild(lista.lastChild);

}

document.getElementById(btnCreate).onclick = add;
document.getElementById(btnDelete).onclick = del;


