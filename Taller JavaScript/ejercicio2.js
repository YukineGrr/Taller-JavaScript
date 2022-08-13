let segumdos = document.getElementById("sec");
let mimutos = 0;
let empezar =  false;

function emp(){
    empezar = true;
}
function pau(){
    clearTimeout(imcrememtoID);

}
function rei(){
    document.getElementById("mim").innerHTML=0;
    document.getElementById("sec").innerHTML=0;
}

    function segumdosImcrememto(){
        if(empezar){
         segumdos++;
         let SaveSegumdos    =   segumdos;
         let SaveMmimutos    =   mimutos;
        }
         document.getElementById("sec").innerHTML=segumdos;
         imcrememtoID = setTimeout(segumdosImcrememto,1000);
         if(segumdos===60){
            segumdos=0;
            if(segumdos===0){
                mimutos++;
                document.getElementById("mim").innerHTML=mimutos;}
         }
    }

let imcrememtoID = setTimeout(segumdosImcrememto,1000);