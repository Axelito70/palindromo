const verificarPalindromo = () => {
    const palabra = document.getElementById('inputPalabra').value;
    const resultado = document.getElementById('resultado');

    if (palabra === '') {
        resultado.innerHTML = '<p class="text-danger">Por favor, ingresa una palabra.</p>';
        return;
    }

    // Verificar si la palabra es un palíndromo sin usar split
    const longitud = palabra.length;
    let esPalindromo = true;

    for (let i = 0; i < longitud / 2; i++) {
        if (palabra[i] !== palabra[longitud - 1 - i]) {
            esPalindromo = false;
            break;
        }
    }

    if (esPalindromo) {
        resultado.innerHTML = '<p class="palindrome">Es un palíndromo</p>';
    } else {
        resultado.innerHTML = '<p class="not-palindrome">No es un palíndromo</p>';
    }
};
