

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}
/**CONSOLA
 * Al enviar un objeto en la consola imprime asi segun el objeto enviado
 *console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento
});

Object
{
descuento: 15
porcentajePrecioConDescuento: 85
precioConDescuento: 85
precioOriginal: 100
} */
const coupons = [
    "batman",
    "nadie",
    "secreto",
];
//Solución #2: legibilidad, error first y muerte al switch
function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("price");
    const priceValue = inputPrice.value;
    const inputCoupon = document.getElementById("coupon");
    const couponValue = inputCoupon.value;
    let descuento;

    if (!coupons.includes(couponValue)) {
        alert("El cupon " + couponValue + " no es valido");
        return;
    } else if (couponValue === "batman") {
        descuento = 15;
    } else if (couponValue === "nadie") {
        descuento = 30;
    } else if (couponValue === "secreto") {
        descuento = 25;
    }



    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

    const resultP = document.getElementById("resultPrice");
    resultP.innerText = "El precio con descuento son $" + precioConDescuento;

}

