/**
 * This function calculates the total price in the cart order
 * @param {Array} products cartProduct: Array of objects 
 * @returns {number} Total price
 */
export const totalPrice = (products) => { 
    let total = 0
   products.forEach(element => total += element.price)
    return total
}