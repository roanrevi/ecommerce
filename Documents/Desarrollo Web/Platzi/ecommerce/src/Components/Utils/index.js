
/**
 * This funtion calculates total prices of a new order
 * @param {Array} products carProduct: Array of objects
 * @returns {number} Total price
 */


export const totalPrice = (products) => {
    let sum=0
    products.forEach(product =>sum +=product.price);
    return sum
}

// Otra opcion para esta funcion, podria estar en el context para no estar aparte

// const suma1 = context.cartProducts.map(p=>(p.price
// )).reduce((valorAnterior, valorActual) => {
//     return valorAnterior + valorActual;
//   }, 0);
// console.log(suma1)