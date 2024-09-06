/* document.getElementById("iniciarSesion").addEventListener("click", function(){
    cambiarBoton()
}); 
console.log(cambiarBoton()) */
function cambiarBoton() {
    let cierre ="Cerrar Sesión"
    document.getElementById("iniciarSesion").innerHTML = cierre;
}
function aumentarmg(){
    alert("Gato Atigrado was liked")
    document.getElementById("cantidad").innerHTML ++
}
function aumentarmg2(){
    alert("Golden Retiever was liked")
    document.getElementById("cantidad2").innerHTML ++
}
function desaparecer(){
    document.getElementById("definicion").style.display = "none"
}