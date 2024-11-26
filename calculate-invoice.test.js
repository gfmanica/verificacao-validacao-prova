const calculateInvoice = require("./calculate-invoice");

describe("calculateInvoice", () => {
  test("Calcula sem desconto informado", () => {
    const discount = 0;
    const products = [
      { name: "apple", price: 50, quantity: 2 },
      { name: "banana", price: 40, quantity: 5 },
    ];

    const result = calculateInvoice(products, discount);

    expect(result).toBe(300.0);
  });

  test("Calcula com desconto informado", () => {
    const discount = 0.1;
    const products = [
      { name: "apple", price: 50, quantity: 2 },
      { name: "banana", price: 40, quantity: 5 },
    ];

    const result = calculateInvoice(products, discount);
    expect(result).toBe(270.0);
  });

  test("Fatura acima de R$ 1.000 com desconto informado", () => {
    const discount = 0.1;
    const products = [
      { name: "apple", price: 100, quantity: 7 },
      { name: "banana", price: 40, quantity: 10 },
    ];

    const result = calculateInvoice(products, discount);
    expect(result).toBe(890.0);
  });

  test("Fatura acima de R$ 1.000 sem desconto informado", () => {
    const discount = 0;
    const products = [
      { name: "apple", price: 100, quantity: 8 },
      { name: "banana", price: 40, quantity: 12 },
    ];

    const result = calculateInvoice(products, discount);
    expect(result).toBe(1180.0);
  });

  test("Dispara exceção com preço negativo", () => {
    const discount = 0.2;
    const products = [
      { name: "apple", price: 60, quantity: 5 },
      { name: "banana", price: -40, quantity: 5 },
    ];

    expect(() => calculateInvoice(products, discount)).toThrow(
      "InvalidProductException"
    );
  });

  test("Dispara exceção com quantidade negativa", () => {
    const discount = 0.3;
    const products = [
      { name: "apple", price: 90, quantity: 7 },
      { name: "banana", price: 40, quantity: -5 },
    ];

    expect(() => calculateInvoice(products, discount)).toThrow(
      "InvalidProductException"
    );
  });
});
