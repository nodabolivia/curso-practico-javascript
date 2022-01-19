

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
    {
        name: "batman",
        discount: 15,
    },
    {
        name: "nadie",
        discount: 30,
    },
    {
        name: "secreto",
        discount: 25,
    },
];
//Solución #3: arrays y condicionales mucho más inteligentes

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("price");
    const priceValue = inputPrice.value;
    const inputCoupon = document.getElementById("coupon");
    const couponValue = inputCoupon.value;
    const isCoupinValueValid = function (coupon) {
        return coupon.name === couponValue;
    }
    const userCoupon = coupons.find(isCoupinValueValid);

    if (!userCoupon) {
        alert("El cupon " + couponValue + " no es valido");
        return;
    } else {
        const descuento = userCoupon.discount;
        const precioConDescuento =
            calcularPrecioConDescuento(priceValue, descuento);
        const resultP = document.getElementById("resultPrice");
        resultP.innerText = "El precio con descuento son $" + precioConDescuento;
    }
}

