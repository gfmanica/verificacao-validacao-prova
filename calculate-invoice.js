/**
 * @param {{name:string, price:number, quantity:number}[]} products
 * @param {number} discount
 * @returns {number}
 */
function calculateInvoice(products, discount) {
  // Realiza a somatória do valor total dos produtos
  let total = products.reduce((acc, product) => {
    // Caso algum produto tenha quantidade ou preço negativo, lançar exceção
    if (product.quantity < 0 || product.price < 0) {
      throw new Error("InvalidProductException");
    }

    // Fa z a multiplicação do preço do produto pela quantidade e adiciona ao valor já acumulado
    return acc + product.price * product.quantity;
  }, 0);

  // Descobre o valor do desconto para ser aplicado
  const valueDiscount = (total * discount) / 1;

  // Caso o valor total seja maior que 1000, desconta 100 reais
  if (total > 1000) {
    total -= 100;
  }

  // Retorna o valor total com o desconto
  return total - valueDiscount;
}

module.exports = calculateInvoice;
