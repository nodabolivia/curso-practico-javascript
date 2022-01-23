
const manager = (() => {
    function calcularPrecioConDescuento(precio, descuento) {
        const porcentajePrecioConDescuento = 100 - descuento;
        const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
        return precioConDescuento;
    }
    function printResultHtml(precioConDescuento) {
        const resultTitle = document.getElementById("resultTitle");
        const resultPrice = document.getElementById("resultPrice");
        resultTitle.hidden = false;
        resultPrice.innerText = `El precio total a pagar del producto es ${precioConDescuento} $.`;
    }


    return {
        priceDiscount: function onClickButtonPriceDiscount() {
            const inputPrice = document.getElementById("price");
            const priceValue = inputPrice.value;
            const inputDiscount = document.getElementById("discount");
            const discountValue = inputDiscount.value;
            const precioConDescuento =
                calcularPrecioConDescuento(priceValue, discountValue);
            printResultHtml(precioConDescuento);
        },
        reset: function cleanDataHtml() {
            const resultPrice = document.getElementById("resultPrice");
            const resultTitle = document.getElementById("resultTitle");
            const inputPrice = document.getElementById("price");
            const inputDiscount = document.getElementById("discount");
            resultPrice.innerText = "";
            resultTitle.hidden = "true";
            inputPrice.value = null;
            inputDiscount.value = null;
        },

    }
})();

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
}
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
function onClickButtonPriceDiscountCoupon() {
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
*/




