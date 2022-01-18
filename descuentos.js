const precioOriginal = 120;
const descuento = 15;
const porcentajePrecioConDescuento = 100 - descuento;
const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento) / 100;
console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento
});

/**CONSOLA
 * Al enviar un objeto en la consola imprime asi segun el objeto enviado
 *
Object
{
descuento: 15
porcentajePrecioConDescuento: 85
precioConDescuento: 85
precioOriginal: 100
} */