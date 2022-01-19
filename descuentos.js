

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
function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("price");
    const priceValue = inputPrice.value;
    const inputCoupon = document.getElementById("coupon");
    const couponValue = inputCoupon.value;
    let descuento;
    switch (couponValue) {
        case coupons[0]:
            descuento = 15;
            break;
        case coupons[1]:
            descuento = 30;
            break;
        case coupons[2]:
            descuento = 25;
            break;
    }
    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

    const resultP = document.getElementById("resultPrice");
    resultP.innerText = "El precio con descuento son $" + precioConDescuento;

}

