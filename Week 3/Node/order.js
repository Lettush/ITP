const calculateTotal = (cartItems) => {
    let total = 0;
    cartItems.forEach((item) => {
        total += item.price;
    })
    return total;
};

module.exports = calculateTotal;