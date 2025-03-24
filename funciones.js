
function validarForm()
{
    const nota1 = document.getElementById('notaMatematica'); 
    const nota2 = document.getElementById('notaLengua'); 
    const nota3 = document.getElementById('notaEFSI');
    if (nota1 == null && nota2 == null && nota3 == null){
        alert("No se han completado todos los campos, vuelve a intentarlo.");
        event.preventDefault();
    }
    else{
        calcularPromedio();
        event.preventDefault();
    }
}
function mostrarMensaje(id) {
    document.getElementById(id).style.opacity = 1;
}
function esconderMensaje(id) {
    document.getElementById(id).style.opacity = 0;
}

function confirmarNota(nota, mensaje){
    const nota1 = parseFloat(document.getElementById(nota).value);
    let mensajE=document.getElementById(mensaje);
    mensajE.style.color = (nota1 > 0 && nota1 < 11 ? "green" : "red");
    mensajE.textContent = (nota1 > 0 && nota1 < 11 ? "La nota es mayor a 0 y menor a 11" : "La nota no es o mayor a 0 o menor a 10");
    return (mensajE.style.color == "green");
}

function calcularPromedio(){
    const nota1 = parseFloat(document.getElementById('notaMatematica').value); 
    const nota2 = parseFloat(document.getElementById('notaLengua').value); 
    const nota3 = parseFloat(document.getElementById('notaEFSI').value);
    let mostrarResultado =document.getElementById('Resultado'); 
    let promedio = ((nota1 + nota2 + nota3) / 3)
    mostrarResultado.textContent = "El promedio es: " + promedio;
    mostrarResultado.style.color = (promedio >= 6 ? "green" : "red");
}
function mostrarMasAlta() {
    const nota1 = parseFloat(document.getElementById('notaMatematica').value); 
    const nota2 = parseFloat(document.getElementById('notaLengua').value); 
    const nota3 = parseFloat(document.getElementById('notaEFSI').value);
    let materiaAlta =document.getElementById('MateriaAlta'); 
    let materiasAltas = [];
    let maxNota = Math.max(nota1, nota2, nota3);
    if (nota1 === maxNota) materiasAltas.push("Matematica");
    if (nota2 === maxNota) materiasAltas.push("Lengua");
    if (nota3 === maxNota) materiasAltas.push("EFSI");
    materiaAlta.style.color = "blue";
    if (materiasAltas.length === 1) {
        materiaAlta.textContent = "La materia más alta es: " + materiasAltas[0];
    } else {
        materiaAlta.textContent = "Las materias más altas son: " + materiasAltas.join(" y ");
    }
}