const updateStock = (currentStock: number, quantityChange: number): number => {
  return currentStock + quantityChange;
};

const result = updateStock(100, 50);

console.log("El resultado es: ", result);
