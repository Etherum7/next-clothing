export function addItemToCart(item, cartItems) {
  const existingCartItems = cartItems.find(
    (cartItem) => cartItem.id === item.id
  );
  if (existingCartItems) {
    return cartItems.map((cartItem) => {
      if (cartItem.id === item.id) {
        return {
          ...cartItem,
          quantity: cartItem.quantity + 1,
        };
      } else return cartItem;
    });
  } else {
    return [...cartItems, { ...item, quantity: 1 }];
  }
}

export function clearItemFromCart(
  cartItemToClear,
  cartItems
) {
  return cartItems.filter(
    (cartItem) => cartItem.id !== cartItemToClear.id
  );
}

export function removeItemFromCart(
  cartItemToRemove,
  cartItems
) {
  if (cartItemToRemove.quantity === 1) {
    return clearItemFromCart(cartItemToRemove, cartItems);
  }
  return cartItems.map((cartItem) => {
    if (cartItem.id === cartItemToRemove.id) {
      return {
        ...cartItemToRemove,
        quantity: cartItemToRemove.quantity - 1,
      };
    }
    return cartItem;
  });
}
