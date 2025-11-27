type orderStatus = "pending" | "shipped" | "delivered";

//* Si descomenta esta línea aparecerá el error diciendo que no se puede asignar ese valor a orderStatus.
// const orderStatus:orderStatus = "ready";
const orderStatus: orderStatus = "pending";

console.log(orderStatus);
