// The Sun Eater, de Ruocchio, una de las mejores sagas que he leído en mi vida. Recomendada 100%
// me pregunto si alguien leera esto...

// Tests para la funcion de validacion del telefono y que solo acepte numeros
const validarTelefono = require('./validarTelefono');

describe('Pruebas de validarTelefono', () => {

    test('Debe devolver true para un teléfono válido', () => {
        expect(validarTelefono('1123456789')).toBe(true);
    });

    test('Debe devolver true para un teléfono corto', () => {
        expect(validarTelefono('1234')).toBe(true);
    });

    test('Debe devolver false si contiene letras', () => {
        expect(validarTelefono('11234abc')).toBe(false);
    });

    test('Debe devolver false si contiene espacios', () => {
        expect(validarTelefono('1123 456789')).toBe(false);
    });

    test('Debe devolver false si contiene caracteres especiales', () => {
        expect(validarTelefono('1123-456789')).toBe(false);
    });

    test('Debe devolver false si está vacío', () => {
        expect(validarTelefono('')).toBe(false);
    });

    test('Debe devolver false si contiene símbolos', () => {
        expect(validarTelefono('+541123456789')).toBe(false);
    });

});
