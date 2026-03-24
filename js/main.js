    function ejecutarMenu() {
    const opcion = parseInt(document.getElementById('opcion').value);
    const display = document.getElementById('resultado');
    display.innerHTML = ""; 

    switch (opcion) {
        case 1: ejercicio1(); break;
        case 2: ejercicio2(); break;
        case 3: ejercicio3(); break;
        case 4: ejercicio4(); break;
        case 5: ejercicio5(); break;
        case 6: ejercicio6(); break;
        case 7: ejercicio7(); break;
        case 8: ejercicio8(); break;
        case 9: ejercicio9(); break;
        case 10: ejercicio10(); break;
        case 11: ejercicio11(); break;
        default:
            alert("si eres inteligente, selecciona una opción válida entre 1 y 11 porfavor y gracias:).");
    }
}