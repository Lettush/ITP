let cartItems = [];

const addToCart = (product) => {
    cartItems.push(product);
}

const getCartItems = () => {
    return cartItems;
}

const removeFromCart = (product) => {
    const index = cartItems.indexOf(product);

    if (index !== -1)
        cartItems.splice(index, 1);
}

module.exports = {
    addToCart,
    getCartItems,
    removeFromCart
}