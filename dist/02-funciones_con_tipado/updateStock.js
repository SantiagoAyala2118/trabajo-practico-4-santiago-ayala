"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const updateStock = (currentStock, quantityChange) => {
    return currentStock + quantityChange;
};
const result = updateStock(100, 50);
console.log("El resultado es: ", result);
