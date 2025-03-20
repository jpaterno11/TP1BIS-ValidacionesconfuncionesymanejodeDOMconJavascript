
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
        
    }
}
function mostrarMensaje(id) {
    document.getElementById(id).style.opacity = 1;
}
function esconderMensaje(id) {
    document.getElementById(id).style.opacity = 0;
}

function confirmarNota(nota, mensaje){
    const nota1 = parseFloat(document.getElementById(nota)); 
    let mensajE=document.getElementById(mensaje);
    mensajE.style.color = (nota1 > 0 && nota1 < 11 ? "green" : "red");
    mensajE.textContent = (nota1.value.length > 2 ? "El nombre contiene al menos 3 caracteres" : "El nombre no contiene al menos 3 caracteres");
    return (mensajE.style.color == "green");
}

function calcularPromedio(){
    const nota1 = parseFloat(document.getElementById('notaMatematica')); 
    const nota2 = parseFloat(document.getElementById('notaLengua')); 
    const nota3 = parseFloat(document.getElementById('notaEFSI'));
    let mostrarResultado =document.getElementById('Resultado'); 
    let materiaAlta =document.getElementById('MateriaAlta'); 
    let promedio = ((nota1 + nota2 + nota3) / 3)
    mostrarResultado.textContent = "El promedio es: " + promedio;
    mostrarResultado.style.color = (promedio >= 6 ? "green" : "red");
    let materiasAltas = [];
    let maxNota = Math.max(nota1, nota2, nota3);
    if (nota1 === maxNota) materiasAltas.push("Matematica");
    if (nota2 === maxNota) materiasAltas.push("Lengua");
    if (nota3 === maxNota) materiasAltas.push("EFSI");
    if (materiasAltas.length === 1) {
        materiaAlta.textContent = "La materia más alta es: " + materiasAltas[0];
    } else {
        materiaAlta.textContent = "Las materias más altas son: " + materiasAltas.join(" y ");
    }
}